/* eslint-disable react/prop-types */
import { createContext, useState,useRef, useEffect } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState({});
  const Url = "http://localhost:4000"

  const [token,setToken] = useState("")
  const [food_list,setFoodList] = useState([])
  
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToSection = (section) => {
    if (section === "menu" && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token){
      await axios.post(Url+"/API/cart/add",{itemId},{headers:{token}})
    }

  };
  
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (token){
      await axios.post(Url+"/API/cart/remove",{itemId}, {headers:{token}})
    }
  };
  
  const getTotalCartAmount = () =>{
    let totalAmount = 0

    if (food_list.length === 0 || !cartItems) {
      return totalAmount;
  }

    for (const item in cartItems){
      if(cartItems[item] >= 0){
        let foundItem = food_list.find((product)=>product._id === item)
        totalAmount += foundItem.price * cartItems[item]
      }
    }
    return totalAmount
  }
  
  const loadCartData = async (token)=>{
    const response = await axios.post(Url+"/API/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }
  
  const fetchFoodList = async ()=>{
    try {
      const response = await axios.get(Url + "/API/food/list");
      setFoodList(response.data.data);  
    } catch (error) {
      console.error("Failed to fetch food list", error);
    }
  }
  useEffect(()=>{
    
    async function loadData() {
      await fetchFoodList()
      if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    } 
    loadData()
  
  },[])

  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    scrollToSection,
    menuRef,
    contactRef,
    getTotalCartAmount,
    Url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
