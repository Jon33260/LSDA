import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Inscription() {
  const warriorsData = useLoaderData() as Warrior[];
  console.info("Données chargées dans Inscription:", warriorsData);
  const [warriors, setWarriors] = useState(() => useLoaderData() as Warrior[]);
  const [newWarrior, setNewWarrior] = useState({
    nom: "",
    race: "",
    age: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewWarrior({ ...newWarrior, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/warriors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWarrior),
      });
      console.info("coucou depuis inscription");

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du guerrier");
      }
      console.info("apres le if");

      const savedWarrior = await response.json(); // Récupère la réponse du serveur (avec l'ID généré)
      console.info("3e etape");

      setWarriors([...warriors, savedWarrior]); // Ajoute le guerrier à la liste

      console.info("4e etape");

      setNewWarrior({ nom: "", race: "", age: "", img: "" }); // Réinitialisation du formulaire
    } catch (error) {
      console.error("Erreur:", error);
      console.info("5e etape");
    }
  };
  return (
    <>
      <h1>Liste des Guerriers</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={newWarrior.nom}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="race"
            placeholder="Race"
            value={newWarrior.race}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Âge"
            value={newWarrior.age}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="img"
            placeholder="URL de l'image"
            value={newWarrior.img}
            onChange={handleChange}
            required
          />
          <button type="submit">Ajouter un Guerrier</button>
        </form>
      </div>
    </>
  );
}
