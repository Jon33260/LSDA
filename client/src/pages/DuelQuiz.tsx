import { useEffect, useState } from "react";
import "../styles/quiz.css";

const questions = [
  {
    question:
      "Quel est le nom de l’ami de Frodon qui l’accompagne tout au long de son voyage ?",
    options: ["Aragorn", "Sam", "Legolas", "Merry"],
    answer: "Sam",
  },
  {
    question: "Quelle est la couleur du premier anneau d’Elrond ?",
    options: ["Or", "Argent", "Bleu", "Rouge"],
    answer: "Bleu",
  },
  {
    question: "Comment s’appelle l’épée d’Aragorn ?",
    options: ["Andúril", "Glamdring", "Sting", "Orcrist"],
    answer: "Andúril",
  },
  {
    question: "Qui est le premier à proposer d’emmener l’anneau à Mordor ?",
    options: ["Gandalf", "Aragorn", "Frodon", "Bilbon"],
    answer: "Frodon",
  },
  {
    question: "Quel est le surnom d'Aragorn parmi les rôdeurs ?",
    options: ["Grand-Pas", "Lame du Nord", "L'Errant", "Ombre-errante"],
    answer: "Grand-Pas",
  },
  {
    question: "Qui est le traître parmi la Communauté de l’Anneau ?",
    options: ["Legolas", "Gimli", "Boromir", "Pippin"],
    answer: "Boromir",
  },
  {
    question: "Qui a forgé l'Anneau Unique ?",
    options: ["Elrond", "Sauron", "Saroumane", "Galadriel"],
    answer: "Sauron",
  },
  {
    question: "Quel est le rôle de Gollum dans l’histoire ?",
    options: [
      "Porteur de l'anneau",
      "Guide de Frodon",
      "Gardien de la porte noire",
      "espion",
    ],
    answer: "Guide Frodon",
  },
  {
    question:
      "Quel est le nom de la créature géante que Frodon et Sam rencontrent dans le Mordor  ?",
    options: ["Shelob", "Balrog", "Warg", "Azog"],
    answer: "Shelob",
  },
  {
    question: "Quel est le nom de l'ami d'Aragorn qui devient roi de Rohan ?",
    options: ["Théoden", "Eomer", "Faramir", "Pippin"],
    answer: "Théoden",
  },
];

const DuelQuiz = () => {
  // Charger les scores sauvegardés
  const getSavedScores = () => {
    const savedScores = localStorage.getItem("quizScores");
    return savedScores ? JSON.parse(savedScores) : { player1: 0, player2: 0 };
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<{ player1: number; player2: number }>(
    getSavedScores(),
  );
  const [turn, setTurn] = useState<"player1" | "player2">("player1");
  const [gameOver, setGameOver] = useState(false);

  // Sauvegarder les scores dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(scores));
  }, [scores]);

  const handleAnswer = (selectedAnswer: string) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      setScores((prevScores) => ({
        ...prevScores,
        [turn]: prevScores[turn] + 1,
      }));
    }

    // Passer au joueur suivant
    setTurn(turn === "player1" ? "player2" : "player1");

    // Vérifier si c'était la dernière question
    if (currentQuestion + 1 === questions.length) {
      setGameOver(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Si c'est le tour de Gandalf (player 2), il choisit une réponse au hasard
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (turn === "player2" && !gameOver) {
      const randomAnswer =
        questions[currentQuestion].options[
          Math.floor(Math.random() * questions[currentQuestion].options.length)
        ];
      setTimeout(() => {
        handleAnswer(randomAnswer);
      }, 2000); // Gandalf prend 1 seconde pour répondre
    }
  }, [turn, currentQuestion, gameOver]);

  const restartGame = () => {
    setCurrentQuestion(0);
    setScores({ player1: 0, player2: 0 }); // Réinitialiser les scores
    localStorage.removeItem("quizScores"); // Effacer les scores enregistrés
    setTurn("player1");
    setGameOver(false);
  };

  return (
    <div className="quiz-container">
      <h1>Défiez Gandalf 📖</h1>
      {!gameOver ? (
        <div className="question-card">
          <h3>{questions[currentQuestion].question}</h3>
          <p>
            Tour de : {turn === "player1" ? "Joueur 1" : "Joueur 2 (Gandalf)"}
          </p>
          <div className="options">
            {turn === "player1"
              ? questions[currentQuestion].options.map((option, index) => (
                  <button
                    type="button"
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={index}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))
              : "Gandalf réfléchit..."}
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>Résultat du duel 🏆</h2>
          <p>Joueur 1 : {scores.player1} points</p>
          <p>Joueur 2 (Gandalf) : {scores.player2} points</p>
          <h3>
            {scores.player1 > scores.player2
              ? "Joueur 1 remporte la victoire ! 🎉"
              : scores.player1 < scores.player2
                ? "Gandalf a gagné ! 🔮"
                : "Égalité ! ⚖️"}
          </h3>
          <button type="button" onClick={restartGame}>
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
};

export default DuelQuiz;
