import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstansts";

export const addToCart = (id, qty) => async (dispacth, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispacth({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // storing cart items in the local storage
    //getState() is getting state from the combine reducers in store.js
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) 
}

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) 
}