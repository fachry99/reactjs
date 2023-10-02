import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
// import DocTitleOne from "./components/DocTitleOne";
// import DocTitleTwo from "./components/DocTitleTwo";

function App() {
  return (
    <div className="App">
      <CounterTwo />
      <CounterOne />
      {/* <DocTitleTwo />
      <DocTitleOne /> */}
    </div>
  );
}

export default App;
