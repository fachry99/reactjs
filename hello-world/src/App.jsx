import "./App.css";
import ErrorBoundry from "./components/ErrorBoundry";
import Hero from "./components/Hero";
// import PortalDemo from "./components/PortalDemo";

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Superman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry>

      {/* <PortalDemo /> */}
    </div>
  );
}

export default App;
