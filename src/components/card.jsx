import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./contextReducer";
import pizza from "/pizza.jpg"

function Card(props) {
  let dispatch=useDispatchCart();
  let data = useCart();
  const priceRef=useRef();
  let options=props.options;
  let priceOptions=Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart= async ()=>{
    let food = [];
    for(const item of data){
      if(item.id === props.foodItem._id && item.size === size){
        food = item;
        break;
      }
    }
    console.log(data)
    console.log((food.length));
    if(food.length !== 0){
        console.log("UPDATE")
        await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty,size:size});
        return;
    }
    else{
    console.log("ADD")
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size,img:props.foodItem.img});
    await console.log(dispatch);
    }
  }
  let finalPrice= qty*parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])
  return (
    <div>
      <div>
        <div
          className="card mt-3 m- auto"
          //style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img className="card-img-top" src={props.foodItem.img} alt="Card image cap" style={{height:"180px",objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            {/* <p className="card-text">
              {props.foodItem.description}
            </p> */}
            
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rouded" onChange={(e)=>{setQty(e.target.value)}}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
                {priceOptions.map((data)=>{
                  return(
                    <option key={data} value={data}>
                      {data}
                    </option>
                  )
                })}
              </select>
              <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
            </div>
            <hr/>
          <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Card;
