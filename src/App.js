/* import libraries */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

/* import the components */
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
/* import my page web*/
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
