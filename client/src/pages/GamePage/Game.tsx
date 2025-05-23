import { Editor, type OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import "./game.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
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

  const notify = (correctAnswer: string) => {
    toast.error(`😭 😭 😭 La bonne réponse était : ${correctAnswer}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };
  const notifySuccess = () => {
    toast.success("👏👏👏 Bonne réponse !", {
      position: "top-right",
      autoClose: 2000,
    });
  };

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

    // verifying las question condition to trigger result page redirection
    const lastQuestion =
      currentQuestion === data[themeIndex].questions.length - 1;

    if (trimedAnswer === trimedResponse) {
      notifySuccess();
      if (lastQuestion) {
        setTimeout(() => {
          navigate(`/result-page/${id}`);
        }, 2400);
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setScore(score + 1);
          setResponse("");
          if (editorRef.current) {
            editorRef.current.setValue("");
          }
        }, 2000);
      }
    }
    if (trimedAnswer !== trimedResponse) {
      notify(question?.questions[currentQuestion].answer || "non disponible");
      if (lastQuestion) {
        setTimeout(() => {
          navigate(`/result-page/${id}`);
        }, 2400);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setResponse("");
        if (editorRef.current) {
          editorRef.current.setValue("");
        }
      }
    }
  };

  // score local storage update
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  console.log(currentQuestion, "/", question?.questions.length);

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
        <div>
          <button className="responsBtn" type="button" onClick={handleClick}>
            Répondre
          </button>
          <ToastContainer />
        </div>
      </div>
      <button className="responsBtn" type="button" onClick={handleClick}>
        Réponse
      </button>
      <ToastContainer />
    </div>
  );
}

export default Games;
