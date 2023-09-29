import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      <ClassCounterOne />
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
    </div>
  );
}

export default App;
