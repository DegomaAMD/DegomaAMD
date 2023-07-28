import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook to access the CartContext
const useCartContext = () => useContext(CartContext);

// CartContext Provider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cartData.find(item => item.id === product.id);

    if (existingProduct) {
      // Increment quantity if already in cart
      existingProduct.quantity += 1;
    } else {
      // Add the product to the cart with quantity 1
      cartData.push({ ...product, quantity: 1 });

    }

    // Save updated cart data to LocalStorage
    localStorage.setItem('cart', JSON.stringify(cartData));

  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (item, newQuantity) => {
    const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // CartContext value object
  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export { CartProvider, useCartContext };
