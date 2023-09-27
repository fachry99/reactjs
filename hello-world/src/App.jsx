import "./App.css";
import ClickCounter from "./components/ClickCounter";
// import ErrorBoundry from "./components/ErrorBoundry";
// import Hero from "./components/Hero";
// import PortalDemo from "./components/PortalDemo";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="fachry" />
      <HoverCounter />
      {/* <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Superman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry> */}
      {/* <PortalDemo /> */}
    </div>
  );
}

export default App;
