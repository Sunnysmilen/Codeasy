import "../ErrorPage/ErrorPage.css";

export default function Error() {
  return (
    <>
      <div className="Error_container">
        {" "}
        <h1 className="lost">Player, you are lost!</h1>
        <br /> <h1 className="lost"> Let's go back to our homepage</h1>
        <img
          className="robot_lost"
          src="/image-accueil.webp"
          alt="Robot souhaitant la bienvenue d'un signe de la main"
        />
      </div>
    </>
  );
}
