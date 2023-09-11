import React, { useEffect, useState } from "react";
import Bottle from "../Bottol/Bottle"; 
import "./Bottols.css";

import { addToLS, getStoredData, removeFromLS } from "../../Utility/localstorage";
import PurchaseBollot from "../PurchaseBottol/PurchaseBollot";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottols(data));
  }, []);
  // load data from localStorage
  useEffect(() => {
    // console.log("call useEffect " + bottols.length);
    // result will be 0 as data is loaded in above useeffect.there is no relation between two useEffect.

    if (bottols.length == 0) {
      const getStore = getStoredData();
      //   console.log(getStore, bottols);
      const saveCart = [];
      for (const id of getStore) {
        // console.log(id);

        const bottol = bottols.find((bottol) => bottol.id === id);

        if (bottol) {
          saveCart.push(bottol);
        }
      }
      //   console.log("saveCart", saveCart);
      setBottols(saveCart);
    }

    // Send bottols as dependece ,if data of bottols change this useEffect will call
  }, [bottols]);

  const [purchaseBollot, setPurchaseBottol] = useState([]);
  const handleAddtoCart = (bottol) => {
    const newPurchaseBottol = [...purchaseBollot, bottol];
    setPurchaseBottol(newPurchaseBottol);
    addToLS(bottol.id);
  };

  const handleRemoveCart = (id) => {
    const remainingCart=purchaseBollot.filter(bottol=>bottol.id !==id)
    setPurchaseBottol(remainingCart)
    removeFromLS(id)
  };

  return (
    <>
      <h2>Bottols Hare:{bottols.length}</h2>
      {/* <h4> Cart: {purchaseBollot.length} </h4> */}

      <PurchaseBollot purchaseBollot={purchaseBollot} 
      handleRemoveCart={handleRemoveCart}
      
      >

      </PurchaseBollot>

      <div className="bottols-container">
        {bottols.map((bottol) => (
          <Bottle
            key={bottol.id}
            handleAddtoCart={handleAddtoCart}
            bottol={bottol}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottols;
