type props = { theme: string; id: number };

import { Link } from "react-router";
import "./Card.css";
import data from "../../data/data.json";

function Card({ theme, id }: props) {
  const scoreKey = `score${id}`;
  const scoreString = localStorage.getItem(scoreKey);
  const score = scoreString ? JSON.parse(scoreString) : 0;

  const question = data.map((d) => d.questions && d.id);
  const total = score / question.length;

  return (
    <Link to={`/games/${id}`} className="course">
      <h1>{theme}</h1>
      <h3>{Math.round(total * 100)}%</h3>
    </Link>
  );
}

export default Card;
