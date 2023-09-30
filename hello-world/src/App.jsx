import "./App.css";
import ComponentC from "./components/ComponentC";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Fachry"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <ComponentC />
    </div>
  );
}

export default App;
