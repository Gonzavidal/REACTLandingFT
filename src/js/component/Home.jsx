import React from "react";
import Navbar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
import {CardSet} from "./CardSet.jsx";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <CardSet />
        </div>
      <Footer />
    </>
  );
}

export default App;
