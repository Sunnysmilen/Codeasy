import { Editor, type OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import "./game.css";

//import { useParams } from "react-router";
import data from "../../data/data.json";

/*type QuestionType = {
  id: number;
  theme: string;
  questions: [
    {
      title: string;
      course: string;
      exercise: string;
      answer: string;
    },
  ];
};*/

type IStandaloneCodeEditor = Parameters<OnMount>[0];

//const { id } = useParams();
const id = 1;

function Games() {
  const [response, setResponse] = useState<string | undefined>("");
  const [question, setQuestion] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const editorRef = useRef<IStandaloneCodeEditor>(null);
  const handleEditorDidMount = (editor: IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };
  console.log(question);
  const themeIndex: number = Number(id) - 1;

  useEffect(() => {
    if (id) {
      setQuestion(data[themeIndex]);
    }
  }, [themeIndex]);

  const handleClick = () => {
    console.log(response);
    console.log(data[themeIndex].questions[currentQuestion].answer);
    if (
      data[themeIndex].questions[currentQuestion].answer
        .trim()
        .toLowerCase() === response?.trim().toLowerCase()
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
      alert(
        `faux!, la bonne réponse était: \n${data[themeIndex].questions[currentQuestion].answer}`,
      );
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
      if (editorRef.current) {
        editorRef.current.setValue("");
      }
    }
  };

  return (
    <div className="editorContainer">
      <h1 className="editorHeader">Code Editor</h1>
      <p className="notionText">
        {data[themeIndex].questions[currentQuestion].course}
      </p>
      <p className="exercise">
        À toi de jouer! {data[themeIndex].questions[currentQuestion].exercise}
      </p>
      <div className="editor_wrapper">
        <Editor
          height={250}
          defaultLanguage={data[themeIndex].theme.toLowerCase()}
          theme="vs-dark"
          onChange={(value) => setResponse(value)}
          onMount={handleEditorDidMount}
        />
      </div>
      <button className="responsBtn" type="button" onClick={handleClick}>
        Réponse
      </button>
    </div>
  );
}

export default Games;
