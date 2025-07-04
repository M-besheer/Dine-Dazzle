import React , {useState} from 'react';
import "./NavHome.css";
import Logo from "./pics/Logo2.png";
import { useNavigate } from "react-router-dom";
import menu from "./customcomponents/icons8-three-dots-50.png";
import close from "./customcomponents/icons8-close-64.png";
import { Link } from "react-router-dom";
function NavHome() {
    const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function OpenMenu() {
    setShowMenu(true);
    setTimeout(() => {
        navigate('./Menupage');
    }, 2000);
     // Navigate to the previous route immediately
  }
    function showSidebar(){
        const sidebar = document.querySelector(".sidebar_");
        sidebar.style.display = 'flex'
    } 
    function closeSidebar(){
        const sidebar = document.querySelector(".sidebar_");
        sidebar.style.display = 'none'
        
    } 
    return (
        <div className="NavBig_">
        <div className="Main_">
            
            <div className="text_" > 
                <h2 className="hideOnMobile_"><Link  to="/hotline">Hotline</Link></h2>
                <h2 className="hideOnMobile_" onClick={OpenMenu}>Menu</h2>
                <h2 className="hideOnMobile_">Offers!</h2>
                <h2 className="hideOnMobile_"><Link  to="Reserve">Reserve</Link></h2>
                
            </div> 
            <div className="sidebar_" > 
                <img className="close_" onClick={closeSidebar} src={close} alt="photo"/>
                <h2 className="hotline_"><Link  to="/hotline">Hotline</Link></h2>
                <h2 className="Menulink_" onClick={OpenMenu}>Menu</h2>
                <h2 className="Offers_">Offers!</h2> 
                <h2 className="Offers_"><Link  to="/Reserve">Reserve</Link></h2>
                <h2 className="Offers_">Login</h2>
            </div>
            <div className="glowybar_"></div>
            <img className="Logo_" src={Logo} alt="logo" />
            <h2 className="LLogin"><Link  to="/Login">Login</Link></h2>
            <img className="menu_" onClick={showSidebar} src={menu} alt="photo"/>

        </div>
        
        {showMenu && (
        <div className='back_'>
          <h1 className='h1'>Loading Menu</h1>
          <div className='loading'>
            <div className='loader'></div>
          </div>
        </div>
      )}
        </div>
    )
}

export default NavHome