type props = {theme: string}

import "./Card.css";

function Card ({theme, }: props) {
    return (
        <div className="course">
            <h1>{theme}</h1>
            <h3>0%</h3>
        </div>
    )
}

export default Card;