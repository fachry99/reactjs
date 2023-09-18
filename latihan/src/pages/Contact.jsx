import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate(); // useNavigate is a hook that can be used to navigate to a different page
  return (
    <div>
      <h1>Contact</h1>
      <p>Ini adalah halaman Contact</p>
      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Go to menu page
      </button>
    </div>
  );
};
