import { Link } from "react-router";
import "./ResultPage.css";

function ResultPage() {
  return (
    <div className="resultpage-container">
      <section>
        <img
          src="/image-resultat.png"
          alt="Robot félicitant le résultat d'un pouce levé"
        />
        <h1>Mission accomplie ! 🚀 </h1>
        <p>Notion terminée, tu gères.</p>
      </section>
      <Link to="/summary-page">
        <button type="button">Retour au thème</button>
      </Link>
    </div>
  );
}

export default ResultPage;
