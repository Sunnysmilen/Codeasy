import { Link } from "react-router";

import "./ResultPage.css";
/*import { useEffect, useState } from "react";*/

function ResultPage() {
  /*const [items, setItems] = useState([]);*/

  /* useEffect(() => {
    const items = JSON.parse(localStorage.getItem("score"));
    if (items) {
      setItems(items);
    }
  }, []);*/
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
            <div className="scoreDisplay">Score : items 🚀 </div>
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
