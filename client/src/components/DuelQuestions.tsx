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
    return array
      .map((item) => ({ item, sort: Math.random() })) // Associe un nombre aléatoire à chaque élément
      .sort((a, b) => a.sort - b.sort) // Trie par ce nombre
      .map(({ item }) => item); // Extrait les éléments mélangés
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getAllQuestions()
      .then((data) => {
        const shuffledQuestions = shuffleArray(data).slice(0, 10);

        setAnswerQuestions([...shuffledQuestions]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des questions", error);
      });
  }, []);

  useEffect(() => {
    const storedScores: Score[] = JSON.parse(
      localStorage.getItem("scores") || "[]",
    );
    setScores(storedScores);
  }, []);

  const getComputerAnswer = (correctAnswer: string): string => {
    const options = ["option1", "option2", "option3", "option4"];
    const randomOption = options[Math.floor(Math.random() * options.length)];

    switch (difficulty) {
      case "easy":
        return Math.random() < 0.5 ? correctAnswer : randomOption;
      case "medium":
        return Math.random() < 0.75 ? correctAnswer : randomOption;
      case "hard":
        return Math.random() < 0.95 ? correctAnswer : randomOption;
      default:
        return randomOption;
    }
  };

  const handleAnswerSelection = (answer: string, correctAnswer: string) => {
    setSelectedAnswer(answer);

    const userIsCorrect = answer === correctAnswer;
    if (userIsCorrect) {
      setIsAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setIsAnswerCorrect(false);
    }

    const computerAnswer = getComputerAnswer(correctAnswer);

    if (computerAnswer === correctAnswer) {
      setGandalfScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (questionIndex < answerquestions.length - 1) {
        setQuestionIndex(questionIndex + 1); // Passe à la question suivante
      } else {
        setQuizFinished(true); // Marque le quiz comme terminé
      }
      setSelectedAnswer(null); // Réinitialise la réponse sélectionnée
      setIsAnswerCorrect(null); // Réinitialise la validité de la réponse
    }, 1500);
  };

  const saveScore = () => {
    const newScore: Score = {
      username: username || "Joueur Anonyme",
      userScore: score,
      gandalfScore: gandalfScore,
    };

    const storedScores: Score[] = JSON.parse(
      localStorage.getItem("scores") || "[]",
    );

    const existingScoreIndex = storedScores.findIndex(
      (s) => s.username === newScore.username,
    );

    if (existingScoreIndex !== -1) {
      storedScores[existingScoreIndex] = newScore;
    } else {
      storedScores.push(newScore);
    }

    storedScores.sort((a, b) => b.userScore - a.userScore);
    localStorage.setItem("scores", JSON.stringify(storedScores));
    setScores(storedScores);
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
    setScores([]);
  };

  const resetQuiz = () => {
    setQuizFinished(false);
    setScore(0);
    setGandalfScore(0);
    setQuestionIndex(0);
    setUsername("");
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (quizFinished) {
      saveScore();
    }
  }, [quizFinished]);

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

        <div className="ranking">
          <h3>Classement :</h3>
          {displayScores()}
        </div>

        <button type="button" onClick={resetScores}>
          Réinitialiser les scores
        </button>

        <button type="button" onClick={resetQuiz}>
          Recommencer le quiz
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
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
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
