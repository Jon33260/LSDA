import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import paysage from "../assets/images/paysage.jpg";

export default function () {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={paysage} alt="Logo du seigneur des anneaux" />
      </Link>
      <Link to="/auth">Se connecter</Link>

      <ul>
        <Link to="/quiz">DuelQuiz</Link>
        <Link to="/histoire">Histoire</Link>
        <Link to="/warriors">Guerriers</Link>
        <Link to="/inscription">Inscription</Link>
      </ul>
    </div>
  );
}
