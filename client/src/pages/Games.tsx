import Editor from "@monaco-editor/react";
import { useState } from "react";
import "../assets/styles/games.css";
function Games() {
  const [response, setResponse] = useState("");

  function handleEditorChange(value: string | undefined) {
    console.log("Valeur actuelle :", value);
    setResponse(value ?? "");
  }

  const handleClick = () => {
    console.log("valeur du bouton :", response);
    console.log("type de la valeur :", typeof response);
  };

  return (
    <div className="editorContainer">
      <h1 className="editorHeader">Code Editor</h1>
      <p className="notionText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, maiores,
        reprehenderit eaque illo tenetur corrupti assumenda animi aut maxime
        eveniet tempora ab. Voluptas temporibus ad iste nam unde velit vel?
      </p>

      <Editor
        height={250}
        defaultLanguage="html"
        defaultValue="// for(let ...; ){}"
        theme="vs-dark"
        onChange={handleEditorChange}
      />

      <button className="responsBtn" type="button" onClick={handleClick}>
        Réponse
      </button>
    </div>
  );
}

export default Games;
