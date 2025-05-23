import "../ErrorPage/ErrorPage.css";

export default function ErrorPage() {
  return (
    <>
      <div className="Error_container">
        {" "}
        <h1 className="lost">Joueur, tu es perdu !</h1>
        <br /> <h1 className="lost"> Reviens vers la page d'accueil 🚀 </h1>
        <img
          className="robot_lost"
          src="/image-accueil.webp"
          alt="Robot souhaitant la bienvenue d'un signe de la main"
        />
      </div>
    </>
  );
}
