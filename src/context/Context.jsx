import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();
export function CartContext ({children}){

    const [cartItems , setCartItems] = useState([])

    function addtocart(item){
        setCartItems(prev => {
            const found = prev.find(i => i._id === item._id);
            if (found) {
                return prev.map(i => i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i);
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    }

    function removeFromCart(id) {
        setCartItems(prev => prev.filter(i => i._id !== id));
    }

    function updateQuantity(id, quantity) {
        setCartItems(prev => prev.map(i => i._id === id ? { ...i, quantity } : i));
    }
    
    return(
    <Context.Provider value={{cartItems, addtocart, removeFromCart, updateQuantity}}>
        {children}
    </Context.Provider>

    )
}
export function Usecart(){
    return useContext(Context);
}