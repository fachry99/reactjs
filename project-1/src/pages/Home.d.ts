import { Form } from "../components/Form";

import "bootstrap/dist/css/bootstrap.min.css";
declare module "./pages/Home" {
  const Home: any;
  import { Form } from "../components/Form";

  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <p>Ini adalah halaman Home</p>
        <Form />
      </div>
    );
  };

  export default Home;
  export default Home;
  export const Home;
}
