import React, { useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom"; // Added BrowserRouter
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Model from './components/Model';
import { AnimatePresence } from 'framer-motion';

function App() {
  //Get the info about the current route location
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const[showModel, setShowModel] = useState(true);


  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Model showModel={showModel} setShowModel={setShowModel}/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModel= {setShowModel} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
      </>
  );
}

export default App;