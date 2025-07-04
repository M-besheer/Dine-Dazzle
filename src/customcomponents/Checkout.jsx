import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "./Checkout.css";
import axios from "axios";
import { useCartCount } from "../Cartcontext";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price
  const { cartcount, cartadd, cartremove, resetCartCount } = useCartCount();
  const [menuItems,setMenuItems]= useState([]);
    
 
  useEffect(() => {
    axios.get('http://localhost:3010/view-cart', { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        const items = Object.entries(response.data).map(([name, item]) => ({
          name,
          quantity: item.quantity,
          price: item.price
        }));
        setMenuItems(items);
        
        // Calculate total price
        const totalPrice = items.reduce((total, item) => total + (item.quantity * item.price), 0);
        setTotalPrice(totalPrice);
      })
      .catch((err) => console.log(err));
  });

  const handlePostRequest = async (index,item) => {
    console.log("Index:", index); // Log the index to ensure it's correct
    const foodNames = menuItems.map((item) => item.name); // Extract food_name
    const hardcodedUrl = 'http://localhost:3010/add-to-cart/'; // Replace with your actual API endpoint
    console.log(foodNames);
    console.log(index.name);
    try {
        const response = await axios.post(hardcodedUrl + index.name, { withCredentials: true });
        console.log("Success for item", item, response.data);
        cartadd();
        // Handle success based on API response (e.g., update UI, display confirmation)
    } catch (error) {
        console.error("Error for item", index, error);
        // Handle errors (e.g., display error message, retry logic)
    }
};


const handlePostRequestRemove = async (index,item) => {
  console.log("Index:", index); // Log the index to ensure it's correct
  const foodNames = menuItems.map((item) => item.name); // Extract food_name
  const hardcodedUrl = 'http://localhost:3010/remove-from-cart/'; // Replace with your actual API endpoint
  console.log(foodNames);
  console.log(index.name);
  try {
      const response = await axios.post(hardcodedUrl + index.name, { withCredentials: true });
      console.log("Success for item", item, response.data);
      cartremove();
      // Handle success based on API response (e.g., update UI, display confirmation)
  } catch (error) {
      console.error("Error for item", index, error);
      // Handle errors (e.g., display error message, retry logic)
  }
};
const navigate = useNavigate();
const Paymentroute = () => {
  if (totalPrice==0) {
    alert('There is nothing in the cart');
  }
  else{
  navigate("/Payment");
  }
};

  return (
    <div className="Maincheckout">
      <Navbar cartcount={cartcount} />
      <div className="StageCheckout">
        <div className="CHECKOUT">
        
        
        
        <div className="checkoutdiv">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            
            <div className="menuitemincart" key={index}>
            <div className="menuitemscroll">
              <h1 className="itemname">{item.name}</h1>
              <p className="itemquantity">Quantity: {item.quantity}</p>
              <p className="itemprice">Price: {item.price}</p>
            </div>
            <div className="twobtns">
              <button className="buttonadd" onClick={() => handlePostRequestRemove(item)}>-</button>
              <button onClick={() => handlePostRequest(item)} className="buttonadd">+</button>
            </div>
            </div> 
            
          ))
        ) : (
          <div className="menuitemincart">
            <h1 className="itemname">No items found</h1>
          </div>
        )}
        
        
        </div>
      </div>

        <div className="total-price">
          <h2>Total Price: {totalPrice}</h2>
          <button className="checkout-button" onClick={Paymentroute}>Checkout</button>
        </div>
      
       </div>
    </div>
  );
}
