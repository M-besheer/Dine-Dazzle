import React, { useEffect } from "react";
import "./MenuPage.css"; 
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";
import { useCartCount } from "../Cartcontext";
export default function MenuPage() {
  const { cartcount, cartadd, cartremove, resetCartCount } = useCartCount();
   
    const [menuItems,setMenuItems]= useState([]);
    useEffect(()=>{
      fetch('http://localhost:3010/menu')
      .then(response => response.json())
      .then(data => {setMenuItems(data);
        console.log(data);
      })
      
      .catch(err => console.log(err))
  },[])

  const [count, setCount] = useState(Array(5).fill(0)); 

  const incrementCount = (item) => {
      setCount((prevCount) => {
        const updatedCount = [...prevCount];
        updatedCount[item] = prevCount[item] + 1;
        
        return updatedCount;
      });
    };
    
    const decrementCount = (item) => {
      setCount((prevCount) => {
        const updatedCount = [...prevCount];
        if (updatedCount[item] > 0) { 
          updatedCount[item] = prevCount[item] - 1;
        }
        
        return updatedCount;
        
      });
    };
    
    const handlePostRequest = async (item, index) => {
      console.log("item object:", item); // Log the entire item object
      const foodNames = menuItems.slice(0,5).map(item => item.food_name); // Extract food_name
      const hardcodedUrl = 'http://localhost:3010/add-to-cart/'; // Replace with your actual API endpoint
      // console.log(foodNames);
  
       try {
        const response = await axios.post(hardcodedUrl + foodNames[item], {withCredentials: true});
        console.log("Success for item", item, response.data);
        incrementCount(item);
        cartadd();
        // Handle success based on API response (e.g., update UI, display confirmation)
      } catch (error) {
        console.error("Error for item", index, error);
    
        // Handle errors (e.g., display error message, retry logic)
      }
    };

    const handlePostRequestRemove = async (item, index) => {
      console.log("item object:", item); // Log the entire item object
      const foodNames = menuItems.slice(0,5).map(item => item.food_name); // Extract food_name
      const hardcodedUrl = 'http://localhost:3010/remove-from-cart/'; // Replace with your actual API endpoint
      console.log(foodNames);

       try {
        const response = await axios.post(hardcodedUrl + foodNames[item], {withCredentials:true});
        console.log("Success for item", item, response.data);
        decrementCount(item);
        cartremove();
    
        // Handle success based on API response (e.g., update UI, display confirmation)
      } catch (error) {
        console.error("Error for item", index, error);
    
        // Handle errors (e.g., display error message, retry logic)
      }
    };
  

    const navigate = useNavigate();
    function Chickenroute(){
      navigate("./fera5");
    }
    function Sideroute(){
      navigate("./sideitems");
    }
    function Addonsroute(){
      navigate("./Addons");
    }
    
      return(
        <div className="bgdiv">
        <Navbar cartcount={cartcount}/>
       <div className="App1-1">
        <ul className='Scrollbar'>
          <li className='beefburgers'>Beef Burgers</li>
          <li onClick={Chickenroute} >Chicken Burgers</li>
          <li onClick={Sideroute} >Side Items</li>
          <li onClick={Addonsroute}>Add-Ons</li>
          
        
        </ul>
       </div>
      <div className="App2">
        <div className='ALLMENU'>
        {menuItems.length > 0 ? (
            menuItems.slice(0,5).map((list, item)=>(
            <div className="menuitem" key={item}>
            <div className='menuimg'><img src={list.image} alt="photo" className='menuitem-logo'/></div>
            <div className='menuitemdescribe'>
            <h1 className='description'>{list.food_name}</h1> 
            <p className='subtext'>{list.food_description}</p>
            </div>
            <div className='addprice'> 
            <h1 className='price'>price :{list.food_price}</h1>
            <div className='zawedwena2as' >
            {count[item] > 0 && <button className='buttonadd' onClick={() => handlePostRequestRemove(item)}>-</button>}
            {count[item] > 0 && <h2 className='itemcount'>{count[item]}</h2>}  {/* Access count for this item */}
            <button onClick={() => handlePostRequest(item)} className='buttonadd'>+</button>

          </div>
          </div>
          </div>
        ))
        ):(
            <div className="menuitemincart">
              <h1 className="itemname">No items found</h1>
            </div>
        )}
               </div>
           </div>
     
      </div>
      )
}