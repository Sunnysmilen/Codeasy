import { Link } from "react-router";
import { useParams } from "react-router";
import "./ResultPage.css";

function ResultPage() {
  const { id } = useParams();

  const scoreKey = `score${id}`;
  const scoreString = localStorage.getItem(scoreKey);
  const score = scoreString ? JSON.parse(scoreString) : 0;

  console.log(localStorage);

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
            <div className="blob1" />
            <div className="blob2" />
            <div className="scoreDisplay">Score : {score} 🚀 </div>
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
