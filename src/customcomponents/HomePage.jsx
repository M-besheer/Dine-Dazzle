import React , {useState} from "react";
import "./HomePage.css";
import homebg from "../pics/5488025-hd_1920_1080_25fps.mp4";
import back from "../pics/left-chevron.png";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
    const navigate = useNavigate();
    const [showMenu1, setShowMenu1] = useState(false);
  
    function OpenMenu() {
      setShowMenu1(true);
      setTimeout(() => {
          navigate('./Menupage');
      }, 3000);
       // Navigate to the previous route immediately
    }
    return(
        <div>
        <div className="homepage">
        <div className="text-home">
                <h1 className="logo-name-text">Dine & Dazzle</h1>
                <h2 className="subtext-logo">Where Quality of taste is beyond your expectations </h2>
                <p className="lorem">Get your delicious fix fast! We serve up all your favorite classics, made with fresh ingredients and served with a smile.  Whether you're dining in, taking out, or swinging through the drive-thru, we're your go-to spot for quick, convenient eats.</p>
                <button className="Order-Now" onClick={OpenMenu}>Order Now!</button>
            </div>
            <div className="logo">
            <div className="viddiv">
            <button className="back-btn" ><img className="back" src={back}/></button>
            
            <div className="somevids">
            <video src={homebg} className="homebg" autoPlay muted loop/>
            <video src={homebg} className="homebg" autoPlay muted loop/>
            <video src={homebg} className="homebg" autoPlay muted loop/>
            <video src={homebg} className="homebg" autoPlay muted loop/>
            <video src={homebg} className="homebg" autoPlay muted loop/>
            <video src={homebg} className="homebg" autoPlay muted loop/>
            </div>
            <button className="front-btn" ><img className="front" src={back}/></button>
            </div>
            
            </div>
            {showMenu1 && (
        <div className='back_'>
          <h1 className='h1'>Loading Menu</h1>
          <div className='loading'>
            <div className='loader'></div>
          </div>
        </div>
      ) }
        </div>
       
        </div>
    )
}
