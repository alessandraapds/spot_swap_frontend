import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./views/NavBar";
import Landingpage from "./views/Landing";
import Offers from "./routes/Offers";
import Register from "./routes/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Navbar />}>
          <Route path="/offers" element={<Offers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
