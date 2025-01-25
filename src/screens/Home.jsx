import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import Carousal from "../components/carousal";

function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async ()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    });
    response = await response.json();
    console.log(response);
  }
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
