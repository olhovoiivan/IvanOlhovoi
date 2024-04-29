import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
