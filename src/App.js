import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
