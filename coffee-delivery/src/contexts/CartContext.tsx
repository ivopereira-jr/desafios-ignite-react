import { createContext, ReactNode, useState } from 'react';
import { produce } from 'immer';

import { Coffee } from '../pages/Home/components/CatalogCoffees';

export interface CartItem extends Coffee {
  amount: number;
}

interface CartContextProps {
  addCoffeeToCart: (coffee: CartItem) => void;
  removeCoffeeToCart: (coffeeId: string) => void;
  changeCartItemQuantity: (
    coffeeId: string,
    type: 'increase' | 'decrease'
  ) => void;
  cleanCart: () => void;
  cartItems: CartItem[];
  amountProductsInCart: number;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProvider {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const amountProductsInCart = cartItems.reduce((total, product) => {
    return total + product.amount;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeIncart = cartItems.findIndex(
      product => product.id === coffee.id
    );

    const newCart = produce(cartItems, draft => {
      if (coffeeIncart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeIncart].amount += coffee.amount;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(
    coffeeId: string,
    type: 'increase' | 'decrease'
  ) {
    const coffeeExistsInCart = cartItems.findIndex(
      coffee => coffee.id === coffeeId
    );

    const newCart = produce(cartItems, draft => {
      if (coffeeExistsInCart >= 0) {
        const product = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].amount =
          type === 'increase' ? product.amount + 1 : product.amount - 1;
      }

      return;
    });

    setCartItems(newCart);
  }

  function removeCoffeeToCart(coffeeId: string) {
    const coffeeIncart = cartItems.findIndex(
      product => product.id === coffeeId
    );

    const newCart = produce(cartItems, draft => {
      if (coffeeIncart >= 0) {
        draft.splice(coffeeIncart, 1);
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCoffeeToCart,
        cleanCart,
        cartItems,
        amountProductsInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
