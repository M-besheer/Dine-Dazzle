import { Navigate, useNavigate } from 'react-router-dom';
import './Reserve.css';
import { useState } from 'react';

function Reserve() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function ConfirmReserve() {
    setShowConfirmation(true);
    setTimeout(() => {
        navigate('../');
    }, 2000);
     // Navigate to the previous route immediately
  }

  return (
    <div className="App">
      <form className="form">
        <h1 className='Rizz'>
          Reservation
        </h1>

        <label>Email:</label>
        <input type="email" placeholder="Enter Email" />

        <label>Phone number:</label>
        <input type="number" placeholder="Enter Phone number" />

        <label>Date :</label>
        <input type="date" placeholder="Select a date" />

        <label>Time:</label>
        <input type="time" placeholder="Select a time" />

        <h1 className='button' onClick={ConfirmReserve}>
          Reserve
        </h1>
      </form>

      {showConfirmation && (
        <div className='back_'>
          <h1 className='h1'>We're waiting for you</h1>
          <div className='loading'>
            <div className='loader'></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reserve;
