import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Image from 'next/image';
import axios from 'axios';
import { useCart } from '../../hooks/useCart';

import { CartButton } from '../CartButton';

import {
	CardProduct,
	CardProductContent,
	CardProductImage,
	CartButtonClose,
	CartContent,
	CartSummary,
	CartSummaryContent,
	TextCartEmpty
} from './styles';

export function Cart() {
	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
		useState(false);

	const {
		amountProductsInCart,
		cartProducts,
		cartTotalCost,
		removeProductToCart
	} = useCart();

	const formattedCartTotalCost = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(cartTotalCost);

	function handleRemoveProductToCart(productID: string) {
		removeProductToCart(productID);
	}

	async function handleBuyProduct() {
		try {
			setIsCreatingCheckoutSession(true);

			const response = await axios.post('/api/checkout', {
				products: cartProducts
			});
			const { checkoutUrl } = response.data;

			window.location.href = checkoutUrl;
		} catch (error) {
			console.log(error);

			setIsCreatingCheckoutSession(false);
			alert('Falha ao redirecionar ao checkout');
		}
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<CartButton quantity={amountProductsInCart} />
			</Dialog.Trigger>
			<Dialog.Portal>
				<CartContent>
					<CartButtonClose>
						<X size={24} weight="bold" />
					</CartButtonClose>

					<section>
						<h2>Sacola de compras</h2>

						{cartProducts.length <= 0 ? (
							<TextCartEmpty>Seu sacola está vazia</TextCartEmpty>
						) : (
							<>
								{cartProducts.map(product => (
									<CardProduct key={product.id}>
										<CardProductImage>
											<Image
												width={100}
												height={93}
												alt=""
												src={product.imageUrl}
											/>
										</CardProductImage>

										<CardProductContent>
											<p>{product.name}</p>
											<strong>{product.price}</strong>

											<button
												onClick={() => handleRemoveProductToCart(product.id)}
											>
												Remover
											</button>
										</CardProductContent>
									</CardProduct>
								))}

								<CartSummary>
									<CartSummaryContent>
										<div>
											<span>Quantidade</span>
											<p>
												{amountProductsInCart}{' '}
												{amountProductsInCart > 1 ? 'itens' : 'item'}
											</p>
										</div>

										<div>
											<span>Valor total</span>
											<p>{formattedCartTotalCost}</p>
										</div>
									</CartSummaryContent>

									<button
										disabled={isCreatingCheckoutSession}
										onClick={handleBuyProduct}
									>
										Finalizar compra
									</button>
								</CartSummary>
							</>
						)}
					</section>
				</CartContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
