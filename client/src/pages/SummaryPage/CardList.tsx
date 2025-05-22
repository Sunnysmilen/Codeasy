
import Card from "./Card.tsx";
import data from "../../data/data.json";

function CardList () {
    
    return (
        <div className="container">
            {data.map((cours) => (
            <Card key={cours.id} id={cours.id} theme={cours.theme} />))}
        </div>
    )
}

export default CardList;