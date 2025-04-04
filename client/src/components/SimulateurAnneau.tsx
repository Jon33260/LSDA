import { useEffect, useRef, useState } from "react";
import "../styles/RingSimulateur.css";
import musique from "../assets/audio/Sauron.mp3";
import sauronEye from "../assets/images/oeilSauron.jpg";

export default function RingSimulator() {
  const [isWearingRing, setIsWearingRing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleRing = () => {
    setIsWearingRing(!isWearingRing);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isWearingRing) {
        audioElement.play(); // Lancer la musique si l'anneau est porté
      } else {
        audioElement.pause(); // Mettre la musique en pause si l'anneau est retiré
      }
    }
  }, [isWearingRing]); // Le useEffect se déclenche à chaque fois que "isWearingRing" change

  const handleEyeClick = () => {
    // Si l'œil est cliqué, on retire l'anneau et on arrête la musique
    setIsWearingRing(false);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
    }
  };

  return (
    <div className="main-container">
      <div className="ring-content">
        <h2>Simulateur de l'Anneau</h2>
        {!isWearingRing && (
          <button type="button" onClick={toggleRing} className="ring-button">
            Mettre l'Anneau
          </button>
        )}
      </div>

      <audio ref={audioRef} autoPlay loop>
        <source src={musique} type="audio/mp3" />
        <track kind="captions" label="Français" srcLang="fr" default />
      </audio>

      {isWearingRing && (
        <>
          <div className="spectral-effect" />

          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div className="sauron-eye-wrapper" onClick={handleEyeClick}>
            <p className={`spectral-text ${isWearingRing ? "visible" : ""}`}>
              Le pouvoir de l'Anneau t’envahit...
            </p>
            <img src={sauronEye} alt="Œil de Sauron" className="sauron-eye" />

            <button
              type="button"
              onClick={handleEyeClick}
              className="ring-button remove-ring-button"
            >
              Retirer l'Anneau
            </button>
          </div>
        </>
      )}
    </div>
  );
}
