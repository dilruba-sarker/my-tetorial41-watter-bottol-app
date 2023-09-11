import React from 'react';
import './Bottol.css'

const Bottle = ({bottol,handleAddtoCart}) => {
    // console.log(bottol);
    const{name,img,price}=bottol
    return (
        <div className='bottol'>
           <h4>Name:{name}</h4> 
           <h5>price:{price}</h5>
           <img src={img} alt="" /> <br />
           <button onClick={()=>{handleAddtoCart(bottol)}}>purchase</button>
        </div>
    );
};

export default Bottle;