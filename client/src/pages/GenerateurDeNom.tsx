import { useState } from "react";
import "../styles/generateur.css";

// Suffixes et préfixes des races
const elfiqueSuffixes = ["dor", "ion", "wen", "mir", "lith", "iel", "las"];
const nainSuffixes = ["in", "grim", "son", "li", "rik", "bur"];
const hobbitPrefixes = ["Bil", "Fro", "Sam", "Pip", "Mer", "Ros"];

// Fonction pour choisir un élément aléatoire d'un tableau
const getRandomElement = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export default function GenerateurDeNom() {
  const [name, setName] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const generateName = (type: "elfe" | "nain" | "hobbit") => {
    if (!name) return;
    let newName = name.charAt(0).toUpperCase() + name.slice(1);

    // Logique de génération de nom selon la race
    if (type === "elfe") newName += getRandomElement(elfiqueSuffixes);
    if (type === "nain") newName = getRandomElement(nainSuffixes) + newName;
    if (type === "hobbit")
      newName = getRandomElement(hobbitPrefixes) + newName.slice(-3);

    // Animation de l'apparition du nom généré
    setIsVisible(false);
    setTimeout(() => {
      setGeneratedName(newName);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="name-generator">
      <h2>Générateur de noms</h2>
      <input
        type="text"
        placeholder="Votre prénom..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />
      <div className="button-container">
        <button
          type="button"
          onClick={() => generateName("elfe")}
          className="btn elfe"
        >
          Elfe
        </button>
        <button
          type="button"
          onClick={() => generateName("nain")}
          className="btn nain"
        >
          Nain
        </button>
        <button
          type="button"
          onClick={() => generateName("hobbit")}
          className="btn hobbit"
        >
          Hobbit
        </button>
      </div>
      {/* Animation du nom généré */}
      {generatedName && (
        <p className={`generated-name ${isVisible ? "fadeIn" : ""}`}>
          Ton nom : {generatedName}
        </p>
      )}
    </div>
  );
}
