import "../styles/NavBar.css";
import { useEffect, useRef } from "react";
import musique from "../assets/images/LSDA.mp3"; // Importation de la musique

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Référence à l'élément audio

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      // D'abord, on attend que l'audio se charge et soit prêt pour la lecture
      const onCanPlay = () => {
        // Attendre un peu avant de désactiver le mute
        setTimeout(() => {
          audioElement.muted = false;
        }, 1000); // Attendre 1 seconde avant de désactiver le mute
      };

      // Ajouter un écouteur d'événement pour savoir quand l'audio est prêt à jouer
      audioElement.addEventListener("canplay", onCanPlay);

      // Nettoyer l'événement au démontage du composant
      return () => {
        audioElement.removeEventListener("canplay", onCanPlay);
      };
    }
  }, []); // Le useEffect s'exécute une seule fois au montage

  return (
    <section className="container">
      {/* Balise audio avec autoplay et muted au départ */}
      <audio ref={audioRef} autoPlay loop muted>
        <source src={musique} type="audio/mp3" />
        Votre navigateur ne supporte pas la lecture audio.
      </audio>

      <div className="titre">
        <h2>🏰 Bienvenue en Terre du Milieu ! 🌿✨</h2>
      </div>
      <p className="introduction">
        Plongez dans l’univers épique du Seigneur des Anneaux, un monde où la
        magie, l’honneur et le destin s’entrelacent. Des vastes plaines du Rohan
        aux majestueuses forêts de Lothlórien, en passant par les profondeurs
        sombres du Mordor, chaque lieu raconte une histoire, chaque peuple a sa
        légende. Rejoignez les Guerriers, les Sages et les Aventuriers dans
        cette quête à travers la Terre du Milieu. Forgez votre propre légende,
        découvrez les récits des plus grands héros et explorez les mystères de
        cet univers légendaire. 🔥 Serez-vous un valeureux combattant, un noble
        elfe ou un humble hobbit prêt à changer le destin du monde ? 🌍⚔️ ➡️
        Entrez dans l’aventure et laissez la légende s’écrire ! 🏹📜
      </p>
    </section>
  );
}
