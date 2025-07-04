import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";
// import { OrderSummary } from "./Components/order confirmed";
// import Test from "./Test";
import Reserve from "./customcomponents/Reserve";
import Checkout from "./customcomponents/Checkout";
import Hotline from "./customcomponents/Hotline";
import Chicken from "./customcomponents/Chicken";
import Sideitems from "./customcomponents/Sideitems";
import MenuPage from "./customcomponents/MenuPage";
import Login from "./customcomponents/Login";
import Addons from "./customcomponents/Addons";
import Payment from "./customcomponents/Payment";

// import Testing from "./Testing";
export default function highapp(){
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Menupage/sideitems" element={<Sideitems/>}/>
        <Route path='/Menupage/fera5' element={<Chicken/>}/>
        <Route path="/Menupage/Addons" element={<Addons/>}/>
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Menupage" element={<MenuPage/>}/>
        <Route path="/Reserve" element={<Reserve/>} />
        <Route path="/hotline" element={<Hotline/>}/>
        <Route path="/Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}