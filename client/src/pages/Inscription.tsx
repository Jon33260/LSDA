import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Inscription() {
  const warriorsData = useLoaderData() as Warrior[];
  console.info("Données chargées dans Inscription:", warriorsData);

  // Charger les guerriers depuis localStorage au démarrage
  const [warriors, setWarriors] = useState<Warrior[]>(() => {
    const savedWarriors = localStorage.getItem("warriors");
    return savedWarriors ? JSON.parse(savedWarriors) : warriorsData;
  });

  const [newWarrior, setNewWarrior] = useState({
    nom: "",
    race: "",
    age: "",
    img: "",
    faction: "",
    arme: "",
  });

  useEffect(() => {
    localStorage.setItem("warriors", JSON.stringify(warriors));
  }, [warriors]);

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

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du guerrier");
      }

      const savedWarrior = await response.json(); // Récupération de la réponse serveur

      const updatedWarriors = [...warriors, savedWarrior];
      setWarriors(updatedWarriors); // Mise à jour de l'état

      setNewWarrior({
        nom: "",
        race: "",
        age: "",
        img: "",
        faction: "",
        arme: "",
      }); // Réinitialisation du formulaire
    } catch (error) {
      console.error("Erreur:", error);
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
          <input
            type="text"
            name="faction"
            placeholder="Faction"
            value={newWarrior.faction}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="arme"
            placeholder="Arme"
            value={newWarrior.arme}
            onChange={handleChange}
            required
          />
          <button type="submit">Ajouter un Guerrier</button>
        </form>
      </div>
    </>
  );
}
