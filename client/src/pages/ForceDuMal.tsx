import { useLoaderData } from "react-router-dom";
import "../styles/forcedubien.css";
import PicturesLsda from "../components/PicturesLsda";

export default function ForceDuMal() {
  const { warriors } = useLoaderData() as { warriors: Warrior[] };
  console.info(warriors);
  return (
    <div className="page-container">
      <h1 className="title">Force du Mal</h1>
      <div className="bien-container">
        {warriors.map((warrior) => (
          <PicturesLsda key={warrior.id} warrior={warrior} />
        ))}
      </div>
    </div>
  );
}
