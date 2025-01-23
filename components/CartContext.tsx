"use client";


import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

// Product type definition
type Product = {
  id: string;
  name: string;
  heading: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
};

// Cart context type definition
type CartContextType = {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

// CartProviderProps type definition for the children
type CartProviderProps = {
  children: ReactNode;
};

// Create CartContext
export const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component definition
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Calculate total cart count
  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  // Function to add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to update product quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart in any component
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
          




// "use client";

// import { createContext, useContext, useState } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   heading: string;
//   price: number;
//   image: string;
//   quantity: number;
//   selectedColor: string;
//   selectedSize: string;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     console.log("Adding item:", item);
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id && cartItem.selectedColor === item.selectedColor && cartItem.selectedSize === item.selectedSize);
//       if (existingItem) {
//         console.log("Item already in cart, updating quantity");
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id && cartItem.selectedColor === item.selectedColor && cartItem.selectedSize === item.selectedSize
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       console.log("New item added to cart");
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
  
//     alert("Added to cart Successfully!");
//   };
  
//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) return;
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === id ? { ...cartItem, quantity } : cartItem
//       )
//     );
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
//     alert("Remove to cart Successfully!");
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, updateQuantity, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);

//   console.log(context);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };