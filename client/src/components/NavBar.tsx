import "../styles/NavBar.css";
import { Link, useLocation } from "react-router-dom";
import paysage from "../assets/images/paysage.jpg";

export default function () {
  const location = useLocation();
  if (location.pathname === "/errorpage") {
    return null;
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={paysage} alt="Logo du seigneur des anneaux" />
      </Link>

      <ul>
        <Link to="/quiz">DuelQuiz</Link>
        <Link to="/anneaupage">L'anneau de pouvoir</Link>
        <Link to="/generateurdenom">Générateur de nom</Link>
        <Link to="/histoire">Histoire</Link>
        <Link to="/warriors">Guerriers</Link>
        <Link to="/inscription">Inscription</Link>
      </ul>
    </div>
  );
}
