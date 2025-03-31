import { useEffect, useState } from "react";
import "../styles/forcedubien.css";

interface Warrior {
  id: number;
  nom: string;
  race: string;
  age: number;
  img: string;
}

export default function ForceDuMal() {
  const [warriors, setWarriors] = useState<Warrior[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/warriors/mal")
      .then((res) => res.json())
      .then((data) => {
        console.info(data);
        setWarriors(data);
        console.info(data);
      })
      .catch((err) =>
        console.error("Erreur lors de la récupération des guerriers :", err),
      );
  }, []);

  return (
    <div className="page-container">
      <h1 className="title">Force du Bien</h1>
      <div className="bien-container">
        {warriors.map((warrior) => (
          <div key={warrior.id} className="bien-card">
            <h2>
              {warrior.nom} ({warrior.race})
            </h2>
            <p>Âge : {warrior.age} ans</p>
            <img className="bien-image" src={warrior.img} alt={warrior.nom} />
          </div>
        ))}
      </div>
    </div>
  );
}
