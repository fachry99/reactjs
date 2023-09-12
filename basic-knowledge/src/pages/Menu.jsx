import { useNavigate } from "react-router-dom"; // useNavigate is a hook that can be used to navigate to a different page

export const Menu = () => {
  const navigate = useNavigate(); // useNavigate is a hook that can be used to navigate to a different page
  return (
    <div>
      <h1>this is Menu Page</h1>
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Go to Contact page
      </button>
    </div>
  );
};
