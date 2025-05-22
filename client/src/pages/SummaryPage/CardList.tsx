import data from "../../data/data.json";
import Card from "./Card.tsx";

function CardList() {
  return (
    <div className="container">
      {data.map((cours) => (
        <Card key={cours.id} id={cours.id} theme={cours.theme} />
      ))}
    </div>
  );
}

export default CardList;
