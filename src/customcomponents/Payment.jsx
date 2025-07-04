import React, { useState } from 'react';
import "./Payment.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCartCount } from "../Cartcontext";
const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { cartcount, cartadd, cartremove, resetCartCount } = useCartCount();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const [menuItems,setMenuItems]= useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function ConfirmPayment() {
    setShowConfirmation(true);
    setTimeout(() => {
        const response = axios.post('http://localhost:3010/checkout');
        console.log(response);
        resetCartCount();
        navigate('../');
    }, 2000);
     // Navigate to the previous route immediately
  }
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
  },[]);

  return (
    <div className="bigform">
    <form className='paymentform' onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Enter card number"
        />
      </label>
      <label>
        Card Holder:
        <input
          type="text"
          value={cardHolder}
          onChange={handleCardHolderChange}
          placeholder="Enter card holder's name"
        />
      </label>
      <label>
        Expiry Date:
        <input
          type="text"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YYYY"
        />
      </label>
      <label>
        CVV:
        <input
          type="text"
          value={cvv}
          onChange={handleCvvChange}
          placeholder="Enter CVV"
        />
      </label>
      <div className="priceandpay">
      <button type="submit" className='paybtn' onClick={ConfirmPayment} >Pay Now</button>
       <h2>Total price = {totalPrice}</h2> 
    </div>
    </form>
   
      {showConfirmation && (
        <div className='back_'>
          <h1 className='h1'>Payment Successful. Enjoy your meal</h1>
          <div className='loading'>
            <div className='loader'></div>
          </div>
        </div>
      )}
      </div>
  );
};

export default Payment;
