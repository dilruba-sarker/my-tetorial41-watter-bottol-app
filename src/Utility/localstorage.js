const getStoredData=()=>{
    const getStoredString=localStorage.getItem("cart")
    if(getStoredString){
        return JSON.parse(getStoredString)
    }
        return []
    
}
const saveToLS=cart=>{
    const cartString=JSON.stringify(cart)
    localStorage.setItem('cart',cartString)
}
const addToLS=id=>{
    const cart =getStoredData()
    cart.push(id)
    saveToLS(cart)
}

const removeFromLS=id=>{
    const cart=getStoredData();
    const remaining= cart.filter(idx=>idx !==id)
    saveToLS(remaining)
}
export {addToLS,getStoredData,removeFromLS}