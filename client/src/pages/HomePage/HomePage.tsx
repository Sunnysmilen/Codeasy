import { Link } from "react-router";
import "./HomePage.css";


function HomePage() {
  localStorage.setItem("score", "");

  const savedScore = localStorage.getItem("score");

  savedScore
    ? console.log("Le score est: ${savedScore}")
    : console.log("Aucun score");

  return (
    <div className="homepage-container">
      <section>
        <img
          src="/image-accueil.webp"
          alt="Robot souhaitant la bienvenue d'un signe de la main"
        />
        <h1>Bienvenue dans le monde du code ! </h1>
        <p>Pas besoin d’être un geek : ici, on apprend en s’amusant.</p>
      </section>

      <Link to="/summary-page">
        <button type="button">C'est parti !</button>
      </Link>

    </div>
  );
}

export default HomePage;
