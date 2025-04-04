import { Link } from "react-router-dom";
import "../styles/errorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 - Vous ne passerez pas !</h1>

        <Link to="/" className="error-button">
          Retour en Comté
        </Link>
      </div>
    </div>
  );
}
