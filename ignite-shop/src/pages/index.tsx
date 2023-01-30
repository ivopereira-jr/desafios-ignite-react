import { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useKeenSlider } from 'keen-slider/react';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { useCart } from '../hooks/useCart';
import { Product as ProductProps } from '../contexts/CartContext';

import { CartButton } from '../components/CartButton';

import { HomeContainer, Product } from '../styles/pages/home';
import 'keen-slider/keen-slider.min.css';

interface HomeProps {
	products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48
		}
	});
	const { addProductToCart, checkIfProductIsInTheCart } = useCart();

	function handleAddProductToCart(
		event: MouseEvent<HTMLElement>,
		product: ProductProps
	) {
		event.preventDefault();
		addProductToCart(product);
	}

	return (
		<>
			<Head>
				<title>Ignite Shop</title>
			</Head>

			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map(product => {
					return (
						<Link
							key={product.id}
							href={`/product/${product.id}`}
							prefetch={false}
						>
							<Product className="keen-slider__slide">
								<Image src={product.imageUrl} width={520} height={480} alt="" />

								<footer>
									<div>
										<strong>{product.name}</strong>
										<span>{product.price}</span>
									</div>

									<CartButton
										color="green"
										size="large"
										disabled={checkIfProductIsInTheCart(product.id)}
										onClick={event => handleAddProductToCart(event, product)}
									/>
								</footer>
							</Product>
						</Link>
					);
				})}
			</HomeContainer>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price']
	});

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			}).format(price.unit_amount / 100),
			numberPrice: price.unit_amount / 100,
			defaultPriceId: price.id
		};
	});

	return {
		props: { products },
		revalidate: 60 * 60 * 2 // 2 horas
	};
};
