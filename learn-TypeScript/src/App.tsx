import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Fachry"
        age={20}
        hobbies={["Coding", " Gaming"]}
        isMarried={false}
        friends={["Anton", "Bayu", "Cahya"]}
        country={Country.Indonesia}
      />
    </div>
  );
}

export default App;
