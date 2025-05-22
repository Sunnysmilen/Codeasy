type props = {theme: string, id: number}


import { Link } from "react-router";
import "./Card.css";

function Card ({theme, id }: props) {
    return (
        <Link to={`/games/${id}`} className="course">
            <h1>{theme}</h1>
            <h3>0%</h3>
        </Link>
    )
}

export default Card;