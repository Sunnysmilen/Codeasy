import { Editor, type OnMount } from "@monaco-editor/react";
import { useRef, useState } from "react";
import "./game.css";

import data from "../../data/data.json";

type IStandaloneCodeEditor = Parameters<OnMount>[0];

function Games() {
  const [response, setResponse] = useState<string | undefined>("");

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const editorRef = useRef<IStandaloneCodeEditor>(null);

  const handleEditorDidMount = (editor: IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleClick = () => {
    console.log(response);
    console.log(data[2].questions[currentQuestion].answer);
    if (
      data[2].questions[currentQuestion].answer.trim().toLowerCase() ===
      response?.trim().toLowerCase()
    ) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setScore(score + 1);
        setResponse("");
        if (editorRef.current) {
          editorRef.current.setValue("");
        }
      }, 1000);
    } else {
      alert("faux!");
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="editorContainer">
      <h1 className="editorHeader">Code Editor</h1>
      <progress
        className="progressBar"
        value={currentQuestion}
        max={currentQuestion + 1}
      />

      <p className="notionText">{data[2].questions[currentQuestion].course}</p>
      <p className="dataText">{data[2].questions[currentQuestion].exercise}</p>
      <Editor
        height={250}
        defaultLanguage={data[2].theme.toLowerCase()}
        theme="vs-dark"
        onChange={(value) => setResponse(value)}
        onMount={handleEditorDidMount}
      />
      <button className="responsBtn" type="button" onClick={handleClick}>
        Réponse
      </button>
    </div>
  );
}

export default Games;
