import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonies from "./components/Function1";
import Function2 from "./components/Function2";
import Function3 from "./components/Function3";
import Function4 from "./components/Function4";
import BackgroundPictureComponent from "./components/BackgroundPictureComponent";

import "uikit/dist/css/uikit.min.css";
import VericalLine from "./components/VerticalLine";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Header />
      <About />
      <Testimonies />
      <Function2 />
      <Function3 />
      <Function4 />
      <BackgroundPictureComponent />
      
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
