import Navbar from "../components/NavBar";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";


const Home = () => {
  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("jwt");
  const name = sessionStorage.getItem("name")

  const navigate = useNavigate()
  return (
    <div>
      {!token ? navigate("/") : null}
      <Navbar />
      <div className="Heading"><h1>Welcome Back {name}</h1></div>
      <Form />
      <footer className="footer">
      <Footer/>
      
      </footer>
    </div>
    
  );
};

export default Home;
