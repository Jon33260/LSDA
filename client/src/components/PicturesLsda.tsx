import axios from "axios";
import "../styles/PicturesLsda.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function PicturesLsda({
  warrior,
  onDeleteWarrior,
  onUpdateWarrior,
}: WarriorsProps) {
  const [warriorDelete, setWarriorDelete] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedWarrior, setUpdatedWarrior] = useState(warrior);
  const navigate = useNavigate();

  const deleteWarrior = (id: number) => {
    console.info("Suppression en cours pour l'ID:", id);
    axios
      .delete(`${API}/api/warriors/${id}`)
      .then(() => {
        console.info("Guerrier supprimé avec succès");
        if (onDeleteWarrior) {
          onDeleteWarrior(id);
        }

        navigate("/warriors");
        setWarriorDelete("Suppression réussie");
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression:", error);
      });
  };

  // Fonction pour gérer l'édition du guerrier
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedWarrior((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(`${API}/api/warriors/${updatedWarrior.id}`, updatedWarrior)
      .then((response) => {
        console.info("Guerrier modifié avec succès", response.data);
        setIsEditing(false);
        if (onUpdateWarrior) {
          onUpdateWarrior(updatedWarrior);
        }
        navigate("/warriors");
      })
      .catch((error) => {
        console.error("Erreur lors de la modification:", error);
      });
  };

  return (
    <div className="warrior-container">
      <div className="warrior-card">
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <label>
              Nom:
              <input
                type="text"
                name="nom"
                value={updatedWarrior.nom}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Âge:
              <input
                type="number"
                name="age"
                value={updatedWarrior.age}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Race:
              <input
                type="text"
                name="race"
                value={updatedWarrior.race}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Arme:
              <input
                type="text"
                name="weapon_type"
                value={updatedWarrior.weapon_type}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Image:
              <input
                type="text"
                name="img"
                value={updatedWarrior.img}
                onChange={handleEditChange}
              />
            </label>
            <button type="submit">Enregistrer les modifications</button>
          </form>
        ) : (
          <>
            <h2>{warrior.nom}</h2>
            <p>Race: {warrior.race}</p>
            <p>Âge: {warrior.age}</p>
            <p>Arme: {warrior.weapon_type}</p>
            <img
              className="warrior-image"
              src={warrior.img}
              alt={warrior.nom}
            />
            <button
              className="delete-button"
              type="button"
              onClick={() => deleteWarrior(warrior.id)}
            >
              ❌ Supprimer
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={() => setIsEditing(true)} // Activer le mode édition
            >
              ✏️ Modifier
            </button>
            {warriorDelete && <p>{warriorDelete}</p>}
          </>
        )}
      </div>
    </div>
  );
}
