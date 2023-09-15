import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    error,
    refetch,
  } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) return "Data on Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <h1>
      THIS IS THE HOME PAGE <p>{catData?.fact}</p>
      <button type="button" className="btn btn-primary" onClick={refetch}>
        Update data
      </button>
    </h1>
  );
};
