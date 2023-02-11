import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";

function App() {
  const todos = [
    {
      doing: false,
      done: false,
      desc: "Amet Lorem anim minim commodo incididunt velit consequat sint magna duis do eu ullamco.",
    },
    {
      doing: false,
      done: false,
      desc: "Do exercitation dolore veniam duis ut irure velit mollit.",
    },
    {
      doing: false,
      done: false,
      desc: "Lorem dolor ea magna cillum officia eiusmod.",
    },
    {
      doing: true,
      done: false,
      desc: "Sit est aliquip dolore sunt consequat in aute exercitation culpa duis Lorem. Voluptate Lorem enim sunt minim aliqua pariatur dolor. Esse velit esse sunt id nulla incididunt adipisicing id dolor nisi.",
    },
    {
      doing: true,
      done: true,
      desc: "Amet Lorem anim minim commodo incididunt velit consequat sint magna duis do eu ullamco.",
    },
  ];
  const local = localStorage.getItem("todos");
  if (!local) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
