import { Link } from "react-router-dom";
import "../styles/errorPage.css";
import { useEffect } from "react";
import gandalfGif from "../assets/images/gandalgif.mp4";

export default function ErrorPage() {
  useEffect(() => {
    const audio = new Audio("/assets/you-shall-not-pass.mp3"); // 🎶 Son de Gandalf
    audio.play();
  }, []);

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 - Vous ne passerez pas !</h1>
        <p className="error-text">
          "Même Gandalf ne peut retrouver cette page..."
        </p>
        <video autoPlay loop muted className="gandalf-gif">
          <source src={gandalfGif} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture des vidéos.
        </video>

        <Link to="/" className="error-button">
          Retour en Comté
        </Link>
      </div>
    </div>
  );
}
