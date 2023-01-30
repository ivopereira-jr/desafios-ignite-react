import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import { useCart } from '../../hooks/useCart';

import {
	ImageContainer,
	ProductContainer,
	ProductDetails
} from '../../styles/pages/product';

type ProductType = {
	id: string;
	name: string;
	imageUrl: string;
	price: string;
	numberPrice: number;
	description: string;
	defaultPriceId: string;
};

interface ProductProps {
	product: ProductType;
}

export default function Product({ product }: ProductProps) {
	const { addProductToCart, checkIfProductIsInTheCart } = useCart();

	async function handleAddProductToCart(product: ProductType) {
		addProductToCart(product);
	}

	return (
		<>
			<Head>
				<title>{product.name} | Ignite Shop</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image src={product.imageUrl} width={520} height={480} alt="" />
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>

					<p>{product.description}</p>

					<button
						disabled={checkIfProductIsInTheCart(product.id)}
						onClick={() => handleAddProductToCart(product)}
					>
						Colocar na sacola
					</button>
				</ProductDetails>
			</ProductContainer>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
	params
}) => {
	const productId = params.id;

	const product = await stripe.products.retrieve(productId, {
		expand: ['default_price']
	});
	const price = product.default_price as Stripe.Price;

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				price: new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(price.unit_amount / 100),
				numberPrice: price.unit_amount / 100,
				description: product.description,
				defaultPriceId: price.id
			}
		},
		revalidate: 60 * 60 * 1 // 1 hora
	};
};
