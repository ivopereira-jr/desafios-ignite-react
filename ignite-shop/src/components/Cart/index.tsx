import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Image from 'next/image';
import { useCart } from '../../hooks/useCart';

import { CartButton } from '../CartButton';

import {
	CardProduct,
	CardProductContent,
	CardProductImage,
	CartButtonClose,
	CartContent,
	CartSummary,
	CartSummaryContent
} from './styles';

export function Cart() {
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
							<p>Seu sacola está vazia</p>
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

									<button>Finalizar compra</button>
								</CartSummary>
							</>
						)}
					</section>
				</CartContent>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
