/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/header";

function App() {
  const students = [
    { id: 1, name: "fachry" },
    { id: 2, name: "kelfin" },
    { id: 3, name: "guing" },
    { id: 4, name: "ilham" },
    { id: 5, name: "ilham" },
  ];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header contoh="Props Refactor" />
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>like ({likes})</button>
      <Main />
      <Footer />
    </>
  );
}

function Main() {
  return (
    <div>
      <p>ini versi menggunakan function🚀</p>
      <img src="logo-reactjs.png" alt="gambar logo" />
    </div>
  );
}

function Footer() {
  return <p>Fachry 7 September 2023</p>;
}

export default App;
