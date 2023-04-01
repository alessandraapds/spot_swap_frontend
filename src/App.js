import "./App.css";
import { Route, Routes } from "react-router-dom";
import Offers from "./routes/Offers";
import Navbar from "./views/NavBar";
import Form from "./views/Form";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="offers" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
