import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const navigate = useNavigate();
  const [loginOK, setLoginOK] = useState(false);

  function ConfirmLogin() {
    setLoginOK(true);
    setTimeout(() => {
        navigate('../');
    }, 4000);
     // Navigate to the previous route immediately
  }
  return (
    <div className="App">
    <form className='zeft'>
    <h1 className='Login'>
       Login 
     </h1>
     <label>Email:</label>
         <input type="email" placeholder="Enter Email" />

         <label>Password:</label>
         <input type="password" placeholder="Enter Password" />
         <button className='buttonlog' onClick={ConfirmLogin}>
            Reserve
         </button>
    </form>
   
    {loginOK && (
        <div className='back_1'>
          <h1 className='h11'>Login Successfful</h1>
          <div className='loading1'>
            <div className='loader1'></div>
          </div>
        </div>
      ) }
 </div>

  )
}

export default Login