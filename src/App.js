import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Landingpage from "./views/Landing";
import Home from "./views/Home";
import Offers from "./routes/Offers";
import Register from "./routes/OfferRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route element={<Navbar />}>
          <Route path="registeryouroffer" element={<Register />} />
          <Route path="offers" element={<Offers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
