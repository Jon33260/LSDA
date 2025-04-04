import "../styles/NavBar.css";
import { useEffect, useRef } from "react";
import musique from "../assets/images/LSDA.mp3";
import image1 from "../assets/paysage1.jpg";
import image2 from "../assets/paysage2.jpg";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement
        .play()
        .then(() => {
          audioElement.volume = 0.1;

          setTimeout(() => {
            audioElement.volume = 0.1;
          }, 1000);
        })
        .catch((error) => {
          console.error("Erreur lors de la lecture de la musique:", error);
        });
    }
  }, []);

  return (
    <section className="container">
      {/* Balise audio avec autoplay mais sans muted */}
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <audio ref={audioRef} autoPlay loop>
        <source src={musique} type="audio/mp3" />
      </audio>

      <div className="titre">
        <h2>🏰✨ Bienvenue en Terre du Milieu ! 🌿🧙‍♂️🔥</h2>
      </div>

      <img
        src={image1}
        alt="Illustration de la Terre du Milieu"
        className="image-top"
      />

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
      <img
        src={image2}
        alt="Un autre visuel du Seigneur des Anneaux"
        className="image-bottom"
      />
    </section>
  );
}
