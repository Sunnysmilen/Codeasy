import CardList from "./CardList";
import "./Card.css";

function SummaryPage() {
  return (
    <>
      <h1 className="firstTitle">Quelle compétence veux-tu débloquer ?</h1>
      <CardList />
    </>
  );
}

export default SummaryPage;
