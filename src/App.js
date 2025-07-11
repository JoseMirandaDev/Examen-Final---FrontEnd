import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EstudiantesProvider } from "./context/EstudiantesContext";
import Navbar from "./components/Sidebar"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Matriculas from "./pages/Matriculas";
import "./App.css";

function App() {
  return (
    <EstudiantesProvider>
      <Router>
        <Navbar />
        <div className="layout">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matriculas" element={<Matriculas />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </EstudiantesProvider>
  );
}

export default App;
