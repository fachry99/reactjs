import { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []); // empty array as second argument to useEffect() means that the effect will only run once, after the initial render
  return (
    <div>
      <h1>
        {loading ? "loading" : post.fact}
        {error ? error : null}
      </h1>
    </div>
  );
}

export default DataFetchingOne;
