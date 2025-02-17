import React from 'react'
//import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/contextReducer'

export default function Cart() {
    let data = useCart();
    const api=import.meta.env.VITE_API_URL;
    const orderAPI="/api/orderdata";
    //console.log(data.id)
    let dispatch = useDispatchCart();
    if (data.length === 0) {
      return (
        <div>
          <div className='m-5 w-100 text-center fs-3 text-white'>The Cart is Empty!</div>
        </div>
      )
    }
    // const handleRemove = (index)=>{
    //   console.log(index)
    //   dispatch({type:"REMOVE",index:index})
    // }

    const handleCheckOut = async () => {
      console.log(orderAPI);
      let userEmail = localStorage.getItem("userEmail");
      let response = await fetch(orderAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
      console.log("Order Response", response);
      if(response.status === 200){
        dispatch({type:"DROP"});
      }
    }
  
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
      <div>
  
        {/* {console.log(data)} */}
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md text-white' >
          <table className='table table-hover text-white'>
            <thead className='text-white fs-4'>
              <tr>
                <th scope='col' className='text-white'>#</th>
                <th scope='col' className='text-white'>Name</th>
                <th scope='col' className='text-white'>Quantity</th>
                <th scope='col' className='text-white'>Option</th>
                <th scope='col' className='text-white'>Amount</th>
                <th scope='col' className='text-white'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr>
                  <th scope='row' className='text-white'>{index + 1}</th>
                  <td className='text-white'>{food.name}</td>
                  <td className='text-white'>{food.qty}</td>
                  <td className='text-white'>{food.size}</td>
                  <td className='text-white'>{food.price}</td>
                  <td ><button type="button" className="btn p-0 text-white" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Delete</button> </td>
                  </tr>
              ))}
            </tbody>
          </table>
          <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
          <div>
            <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
          </div>
        </div>
  
  
  
      </div>
    )
}
