import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonies from "./components/Testimonies";
import Function2 from "./components/Function2";
import "uikit/dist/css/uikit.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Header />
      <Hero />
      <Testimonies />
      <Function2 />
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
