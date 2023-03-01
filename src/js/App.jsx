import react from "react";
import Navbar from "./components/navbar.jsx";
import Jumbotron from "./components/jumbotron.jsx";
import Footer from "./components/footer.jsx";
import { CardContainer } from "./components/cardSet.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <CardContainer />
      </div>

      <Footer />
    </>
  );
}

export default App;