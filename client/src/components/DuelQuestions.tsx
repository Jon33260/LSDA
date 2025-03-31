import { useEffect, useState } from "react";
import { getAllQuestions } from "../services/requests";
import "../styles/QuestionLsda.css";

interface Question {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

interface Score {
  username: string;
  userScore: number;
  gandalfScore: number;
}

export default function QuestionsLsda() {
  const [answerquestions, setAnswerQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // La réponse sélectionnée
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null); // Si la réponse est correcte ou non
  const [score, setScore] = useState<number>(0); // Le score de l'utilisateur
  const [gandalfScore, setGandalfScore] = useState<number>(0); // Le score de Gandalf
  const [questionIndex, setQuestionIndex] = useState<number>(0); // L'index de la question actuelle
  const [quizFinished, setQuizFinished] = useState<boolean>(false); // Vérifier si le quiz est terminé
  const [difficulty, setDifficulty] = useState<string>("easy"); // Niveau de difficulté (facile, moyen, difficile)
  const [username, setUsername] = useState<string>(""); // Nom de l'utilisateur
  const [scores, setScores] = useState<Score[]>([]); // Ajouter l'état des scores

  // Fonction pour mélanger les questions
  const shuffleArray = (array: Question[]): Question[] => {
    const shuffledArray = [...array]; // Crée une copie du tableau pour ne pas le modifier en place
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Échanger les éléments
    }
    return shuffledArray;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getAllQuestions()
      .then((data) => {
        console.info("Questions récupérées :", data); // Affichage dans la console pour vérifier
        // Limiter à 10 questions et les mélanger
        const shuffledQuestions = shuffleArray(data.slice(0, 10));
        setAnswerQuestions(shuffledQuestions); // Mettre à jour les questions mélangées
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des questions", error);
      });
  }, []); // Ce useEffect se déclenche lors du premier chargement du composant

  useEffect(() => {
    const storedScores: Score[] = JSON.parse(
      localStorage.getItem("scores") || "[]",
    );
    setScores(storedScores); // Charger les scores à partir du localStorage
  }, []); // Ce useEffect se déclenche lors du montage du composant

  const getComputerAnswer = (correctAnswer: string): string => {
    const options = ["option1", "option2", "option3", "option4"];
    const randomOption = options[Math.floor(Math.random() * options.length)];

    switch (difficulty) {
      case "easy":
        return randomOption;
      case "medium":
        return Math.random() < 0.75 ? correctAnswer : randomOption;
      case "hard":
        return Math.random() < 0.9 ? correctAnswer : randomOption;
      default:
        return randomOption;
    }
  };

  const handleAnswerSelection = (answer: string, correctAnswer: string) => {
    setSelectedAnswer(answer);

    const userIsCorrect = answer === correctAnswer;
    if (userIsCorrect) {
      setIsAnswerCorrect(true);
      setScore(score + 1); // Incrémente le score de l'utilisateur
    } else {
      setIsAnswerCorrect(false);
    }

    const computerAnswer = getComputerAnswer(correctAnswer);
    if (computerAnswer === correctAnswer) {
      setGandalfScore(gandalfScore + 1); // Incrémente le score de Gandalf
    }

    setTimeout(() => {
      if (questionIndex < answerquestions.length - 1) {
        setQuestionIndex(questionIndex + 1); // Passe à la question suivante
      } else {
        setQuizFinished(true); // Marque le quiz comme terminé
      }
      setSelectedAnswer(null); // Réinitialise la réponse sélectionnée
      setIsAnswerCorrect(null); // Réinitialise la validité de la réponse
    }, 1000);
  };

  const saveScore = () => {
    // Si l'utilisateur n'a pas encore de pseudo, on l'assigne par défaut à "Joueur Anonyme"
    const newScore: Score = {
      username: username || "Joueur Anonyme",
      userScore: score,
      gandalfScore: gandalfScore,
    };

    // Récupération des scores depuis le localStorage
    const storedScores: Score[] = JSON.parse(
      localStorage.getItem("scores") || "[]",
    );

    // Vérifier si l'utilisateur existe déjà dans les scores
    const existingScoreIndex = storedScores.findIndex(
      (s) => s.username === newScore.username,
    );

    if (existingScoreIndex !== -1) {
      // Si l'utilisateur existe déjà, mettre à jour son score
      storedScores[existingScoreIndex] = newScore;
    } else {
      // Sinon, ajouter le nouveau score
      storedScores.push(newScore);
    }

    // Trier les scores par ordre décroissant
    storedScores.sort((a, b) => b.userScore - a.userScore);

    // Sauvegarder les scores dans le localStorage
    localStorage.setItem("scores", JSON.stringify(storedScores));
    setScores(storedScores); // Mettre à jour l'état des scores
  };

  const displayScores = () => {
    return scores.map((score, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <div key={index} className="score-item">
        <span>
          {index + 1}. {score.username} - {score.userScore} /{" "}
          {score.gandalfScore}
        </span>
      </div>
    ));
  };

  const resetScores = () => {
    localStorage.removeItem("scores");
    setScores([]); // Réinitialiser l'état des scores dans React
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (quizFinished) {
      saveScore(); // Appeler `saveScore` uniquement après la fin du quiz
    }
  }, [quizFinished]); // Ce useEffect se déclenche uniquement lorsque `quizFinished` est `true`

  if (quizFinished) {
    return (
      <div className="score-container">
        <h2>Quiz terminé !</h2>
        <p>
          Votre score final est : {score} / {answerquestions.length}
        </p>
        <p>
          Le score de Gandalf est : {gandalfScore} / {answerquestions.length}
        </p>
        <p>
          {score > gandalfScore
            ? "Félicitations, vous avez gagné !"
            : score < gandalfScore
              ? "Désolé, Gandalf a gagné."
              : "C'est un match nul !"}
        </p>

        {/* Affichage du classement */}
        <div className="ranking">
          <h3>Classement :</h3>
          {displayScores()}
        </div>

        {/* Bouton pour réinitialiser les scores */}
        <button type="button" onClick={resetScores}>
          Réinitialiser les scores
        </button>
      </div>
    );
  }

  return (
    <div className="question-container">
      <div>
        <input
          type="text"
          placeholder="Entrez votre nom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <h3>
          Niveau : {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </h3>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
      </div>

      {answerquestions.length > 0 && (
        <div key={answerquestions[questionIndex].id} className="question-card">
          <h2>{answerquestions[questionIndex].question}</h2>
          <div className="options">
            <button
              type="button"
              onClick={() =>
                handleAnswerSelection(
                  answerquestions[questionIndex].option1,
                  answerquestions[questionIndex].answer,
                )
              }
              className={
                selectedAnswer === answerquestions[questionIndex].option1
                  ? isAnswerCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {answerquestions[questionIndex].option1}
            </button>
            <button
              type="button"
              onClick={() =>
                handleAnswerSelection(
                  answerquestions[questionIndex].option2,
                  answerquestions[questionIndex].answer,
                )
              }
              className={
                selectedAnswer === answerquestions[questionIndex].option2
                  ? isAnswerCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {answerquestions[questionIndex].option2}
            </button>
            <button
              type="button"
              onClick={() =>
                handleAnswerSelection(
                  answerquestions[questionIndex].option3,
                  answerquestions[questionIndex].answer,
                )
              }
              className={
                selectedAnswer === answerquestions[questionIndex].option3
                  ? isAnswerCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {answerquestions[questionIndex].option3}
            </button>
            <button
              type="button"
              onClick={() =>
                handleAnswerSelection(
                  answerquestions[questionIndex].option4,
                  answerquestions[questionIndex].answer,
                )
              }
              className={
                selectedAnswer === answerquestions[questionIndex].option4
                  ? isAnswerCorrect
                    ? "correct"
                    : "incorrect"
                  : ""
              }
            >
              {answerquestions[questionIndex].option4}
            </button>
          </div>

          {selectedAnswer && (
            <div>
              <p>
                <strong>
                  {isAnswerCorrect ? "Bonne réponse !" : "Mauvaise réponse"}
                </strong>
              </p>
              <p>
                <strong>La bonne réponse était : </strong>
                {answerquestions[questionIndex].answer}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
