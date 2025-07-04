import React  from 'react';
import "./App.css";
import Menu from './customcomponents/MenuPage';
import NavHome from './NavHome';
import HomePage from './customcomponents/HomePage';
import { CartCountProvider } from "./Cartcontext";

export default function App(){
  return (
    <div>
    <CartCountProvider>
      <NavHome/>
      <HomePage/>
    </CartCountProvider>
    </div>
    
  )
}