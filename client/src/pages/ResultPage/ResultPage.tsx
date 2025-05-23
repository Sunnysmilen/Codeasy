import { Link } from "react-router";
import { useParams } from "react-router";
import "./ResultPage.css";
import sad from "../../assets/images/robot wait.gif";
import happy from "../../assets/images/you did it.gif";

function ResultPage() {
  const { id } = useParams();

  const scoreKey = `score${id}`;
  const scoreString = localStorage.getItem(scoreKey);
  const score = scoreString ? JSON.parse(scoreString) : 0;

  //console.log(localStorage);

  return (
    <div className="resultpage-container">
      <section>
        {score < 2 ? (
          <img src={sad} alt="Loading ... Try again robot" />
        ) : (
          <img src={happy} alt="Loading ... Happy robot" />
        )}
        <h1>
          {score < 2
            ? "Courage, réessaye encore!"
            : "Notion terminée, tu gères!"}
          <div className="scoreDisplayBloc">
            <div className="blob1" />
            <div className="blob2" />
            <div className="scoreDisplay">Score : {score} 🚀 </div>
          </div>
        </h1>
      </section>
      <Link to="/summary-page">
        <button type="button">Retour au thème</button>
      </Link>
    </div>
  );
}

export default ResultPage;
