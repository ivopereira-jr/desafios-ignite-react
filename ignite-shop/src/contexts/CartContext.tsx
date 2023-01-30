import { createContext, ReactNode, useState } from 'react';

export interface Product {
	id: string;
	name: string;
	imageUrl: string;
	price: string;
	numberPrice: number;
	description: string;
	defaultPriceId: string;
}

interface CartContextProps {
	addProductToCart: (product: Product) => void;
	removeProductToCart: (productId: string) => void;
	checkIfProductIsInTheCart: (productId: string) => boolean;
	amountProductsInCart: number;
	cartProducts: Product[];
	cartTotalCost: number;
}

interface CartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);

	const cartTotalCost = cartProducts.reduce((total, product) => {
		return total + product.numberPrice;
	}, 0);
	const amountProductsInCart = cartProducts.length;

	function addProductToCart(product: Product) {
		setCartProducts(state => [...state, product]);
	}

	function removeProductToCart(productId: string) {
		setCartProducts(state => state.filter(product => product.id !== productId));
	}

	function checkIfProductIsInTheCart(productId: string) {
		return cartProducts.some(product => product.id === productId);
	}

	return (
		<CartContext.Provider
			value={{
				addProductToCart,
				removeProductToCart,
				checkIfProductIsInTheCart,
				amountProductsInCart,
				cartProducts,
				cartTotalCost
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
