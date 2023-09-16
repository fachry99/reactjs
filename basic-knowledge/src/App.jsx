/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden text here</h1>}

      <button className="btn btn-secondary" onClick={toggle2}>
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h1>Hidden text here</h1>}
    </div>
  );
}

export default App;
