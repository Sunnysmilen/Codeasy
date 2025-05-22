import { Editor, type OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import "./game.css";

import { useNavigate, useParams } from "react-router";
import data from "../../data/data.json";

type Question = {
  title: string;
  course: string;
  exercise: string;
  answer: string;
};

type QuestionType = {
  id: number;
  theme: string;
  questions: Question[];
};

type IStandaloneCodeEditor = Parameters<OnMount>[0];

function Games() {
  const { id } = useParams();
  const [response, setResponse] = useState<string | undefined>("");
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();
  const editorRef = useRef<IStandaloneCodeEditor>(null);
  const handleEditorDidMount = (editor: IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };
  const themeIndex: number = Number(id) - 1;

  // reload elements depending on id and theme index
  useEffect(() => {
    if (id) {
      setQuestion(data[themeIndex]);
    }
  }, [id, themeIndex]);

  // Answer validation , score and next question
  const handleClick = () => {
    // trimed strings to compare values:
    const trimedAnswer = question?.questions[currentQuestion].answer
      .toLowerCase()
      .trim()
      .replace(/ /g, "");

    const trimedResponse = response?.toLowerCase().trim().replace(/ /g, "");
    //console.log(trimedAnswer, trimedResponse);

    if (currentQuestion >= data[themeIndex].questions.length - 1) {
      setTimeout(() => {
        navigate(`/result-page/${id}`);
      }, 400);
    }

    if (trimedAnswer === trimedResponse) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setScore(score + 1);
        setResponse("");
        if (editorRef.current) {
          editorRef.current.setValue("");
        }
      }, 1800);
    } else {
      alert(
        `faux!, la bonne réponse était: \n${question?.questions[currentQuestion].answer}`,
      );
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
      if (editorRef.current) {
        editorRef.current.setValue("");
      }
    }
  };

  // score local storage update
  useEffect(() => {
    localStorage.setItem(`score${id}`, JSON.stringify(score));
  }, [id, score]);

  console.log(localStorage);

  return (
    <div className="editorContainer">
      <h1 className="editorHeader">Code Editor</h1>
      <progress
        className="progressBar"
        value={currentQuestion}
        max={currentQuestion + 1}
      />

      <p className="notionText">
        {question?.questions[currentQuestion].course}
      </p>
      <p className="exercise">
        À toi de jouer! {question?.questions[currentQuestion].exercise}
      </p>
      <div className="editor_wrapper">
        {" "}
        <Editor
          height={250}
          defaultLanguage={question?.theme.toLowerCase()}
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
