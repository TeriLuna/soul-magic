import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [] });

  // Add to cart
  const addToCart = (product, count, setCount) => {
    const productsInCart = cart.products;
    let innerCount = count;
    const singleProduct = isInCart(product)
    if (singleProduct) {
      if(innerCount >= singleProduct.stock){
        innerCount = singleProduct.stock;
      }
      singleProduct.count = innerCount;
      setCount(innerCount);
    } else {
      productsInCart.push({ product: product, count: innerCount });
    }
    setCart({ products: productsInCart });
  };

  const findProduct = (product) => {
    const productsInCart = cart.products;
    const index = productsInCart.findIndex(
      (item) => item.product.id === product.id
    );
    return productsInCart[index];
  };

  // Remove from cart
  const removeFromCart = (product) => {
    const productsInCart = cart.products;
    const index = productsInCart.findIndex(
      (item) => item.product.id === product.id
    );
    productsInCart.splice(index, 1);
    setCart({ products: productsInCart });
  };

  // Update cart
  const isInCart = (product) => {
    const found = cart.products.find((item) => {
      return item.product.id === product.id;
    });
    return found ? found : false;
  };
  // Clear cart
  const clearCart = () => {
    setCart({ products: [] });
  };

  // Number of items in cart
  const numberOfItemsFunction = () => {
    let total = 0;
    cart.products.map((product) => {
      total += product.count;
      return total;
    });
    return total;
  };
  const numberOfItems = numberOfItemsFunction();

  // Total price of Cart
  const totalPriceProductsFuntion = () => {
    let total = 0;

    cart.products.map((product) => {
      total += product.product.price * product.count;
      return total;
    });
    return total;
  };

  const totalPriceProducts = totalPriceProductsFuntion();

  const value = {
    numberOfItems,
    addToCart,
    removeFromCart,
    isInCart,
    clearCart,
    cart,
    setCart,
    findProduct,
    totalPriceProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
