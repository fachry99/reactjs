/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Person } from "./Components/person";
function App() {
  return (
    <div className="App">
      <Person
        name="Fachry"
        email="Fachry151@gmail.com"
        age={20}
        isMarried={false}
        friends={["aldi", "dono", "dodi"]}
      />
    </div>
  );
}

export default App;
