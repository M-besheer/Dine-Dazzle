import React from "react";
import "./navbar.css";
import cart from "../pics/icons8-add-to-cart-90.png";
import Logo from "../pics/Logo2.png";
import { useNavigate } from "react-router-dom";
import menu from "./icons8-three-dots-50.png";
import close from "./icons8-close-64.png";
import { Link } from "react-router-dom";
import { useCartCount } from "../Cartcontext";
export default function Navbar(props){
    const { cartcount, cartadd, cartremove, resetCartCount } = useCartCount();
    function myRoute(){
        navigate("/Checkout")
    }
   const navigate = useNavigate();

    function showSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = 'flex'
    } 
    function closeSidebar(){
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = 'none'
        
    } 
    return (
        
        <div className="NavBig">
        <div className="Main">
            
            <div className="text" > 
                <h2 className="hideOnMobile"><Link to="/hotline">Hotline</Link></h2>
                <h2 className="hideOnMobile"><Link to="/">Homepage</Link></h2>
                <h2 className="hideOnMobile">Offers!</h2>
            
            </div> 
            <div className="sidebar" > 
                <img className="close" onClick={closeSidebar} src={close} alt="photo"/>
                <h2 className="hotline"><Link to="/hotline">Hotline</Link></h2>
                <h2 className="Homepage"><Link to="/">Homepage</Link></h2>
                <h2 className="Offers">Offers!</h2>
    
            </div>
            <div className="glowybar"></div>
            <img className="Logo" src={Logo} alt="logo" />
            <div className="Cartmain">
                    <h1 className="count" onClick={myRoute} >{cartcount}</h1>
                    <img className="bucket" src={cart} alt="photo"/>
            </div>
            <img className="menu" onClick={showSidebar} src={menu} alt="photo"/>

        </div>
        
        </div>
    )
}