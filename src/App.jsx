import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Stars from "./pages/Stars";
import Galaxies from "./pages/Galaxies";
import Missions from "./pages/Missions";
import Astronauts from "./pages/Astronauts";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/astronauts" element={<Astronauts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;