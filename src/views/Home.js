import Navbar from "../components/NavBar";
import Form from "../components/Form";
import { useNavigate } from "react-router";

const Home = () => {
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");
  const navigate = useNavigate();
  return (
    <div>
      {!token ? navigate("/") : null}
      <Navbar />
      <Form />

      {/* Welcome Home User Number: {userId}  */}
    </div>
  );
};

export default Home;
