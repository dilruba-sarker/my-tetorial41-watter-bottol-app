import './PurchaseBottol.css'
const PurchaseBollot = ({ purchaseBollot,handleRemoveCart }) => {
  return (
    <div>
      <h4> Cart: {purchaseBollot.length} </h4>
      <div className="bottol-img">
       { purchaseBollot.map(bottol=><div key={ bottol.name}>
        <img src={bottol.img}></img>
        <button onClick={()=>handleRemoveCart( bottol.id)}>remove</button>

       </div>)}
         
         
       
       
      </div>
    </div>
  );
};

export default PurchaseBollot;
