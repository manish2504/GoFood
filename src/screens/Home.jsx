import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import Carousal from "../components/carousal";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
