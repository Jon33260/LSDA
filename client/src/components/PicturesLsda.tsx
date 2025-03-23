import "../styles/PicturesLsda.css";

export default function PicturesLsda({ warriors }: WarriorsProps) {
  console.info("Données reçues par PicturesLsda:", warriors);

  return (
    <div className="warrior-container">
      {warriors.map((warrior) => (
        <div key={warrior.id} className="warrior-card">
          <h2>{warrior.nom}</h2>
          <p>Race: {warrior.race}</p>
          <p>Âge: {warrior.age}</p>
          <p>Arme: {warrior.arme}</p>
          <img className="warrior-image" src={warrior.img} alt={warrior.nom} />
        </div>
      ))}
    </div>
  );
}
