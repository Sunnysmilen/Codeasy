import { Link } from "react-router";
import "./ResultPage.css";

interface ResultPageProps {
  score: number;
}

function ResultPage({ score }: ResultPageProps) {
  return (
    <div className="resultpage-container">
      <section>
        <img
          src="/image-resultat.png"
          alt="Robot félicitant le résultat d'un pouce levé"
        />
        <h1>
          Mission accomplie !
          <div className="scoreDisplayBloc">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="scoreDisplay">Score : {score}🚀 </div>
          </div>
        </h1>
        <p>Notion terminée, tu gères.</p>
      </section>
      <Link to="/summary-page">
        <button type="button">Retour au thème</button>
      </Link>
    </div>
  );
}

export default ResultPage;
