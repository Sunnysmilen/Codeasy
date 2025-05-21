import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <img
        src="/image-accueil.webp"
        alt="Robot souhaitant la bienvenue d'un signe de la main"
      />
      <section>
        <h1>Bienvenue dans le monde du code ! </h1>
        <h2>Pas besoin d’être un geek : ici, on apprend en s’amusant.</h2>
      </section>
      <button type="button">C'est parti !</button>
    </div>
  );
}

export default HomePage;
