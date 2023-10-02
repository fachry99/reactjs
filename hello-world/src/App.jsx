import "./App.css";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
// import FocusInput from "./components/FocusInput";

function App() {
  return (
    <div className="App">
      <HookTimer />
      <ClassTimer />
      {/* <FocusInput /> */}
    </div>
  );
}

export default App;
