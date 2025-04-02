import "../styles/PicturesLsda.css";

export default function PicturesLsda({ warrior }: WarriorsProps) {
  return (
    <div className="warrior-container">
      <div className="warrior-card">
        <h2>{warrior.nom}</h2>
        <p>Race: {warrior.race}</p>
        <p>Âge: {warrior.age}</p>
        <p>Arme: {warrior.weapon_type}</p>

        <img className="warrior-image" src={warrior.img} alt={warrior.nom} />
      </div>
    </div>
  );
}
