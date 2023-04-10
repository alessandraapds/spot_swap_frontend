import Navbar from "../components/NavBar";
import Form from "../components/Form";

const Home = () => {
  const userId = sessionStorage.getItem("userId")
  return (
    <div>
      <Form />

      Welcome Home User Number: {userId}
    </div>
  );
};

export default Home;
