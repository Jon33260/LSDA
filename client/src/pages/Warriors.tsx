import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import communaute from "../assets/images/communaute.jpg";
import volcan from "../assets/images/volcan.jpg";
import PicturesLsda from "../components/PicturesLsda";

export default function Warriors() {
  const warrior = useLoaderData() as Warrior[];

  return (
    <div>
      <h1>Liste des guerriers</h1>
      <section className="Forces">
        <div className="bien">
          <h2 className="Communaute de l'anneau">Force du bien</h2>
          <Link to="/ForceDuBien">
            <img src={communaute} alt="La communauté de l'anneau" />
          </Link>
        </div>
        <div className="mal">
          <h2 className="Tenebres">Force du mal</h2>
          <Link to="/ForceDuMal">
            <img src={volcan} alt="Montagne du destin" />
          </Link>
        </div>
      </section>
      <PicturesLsda warriors={warrior} />
    </div>
  );
}
