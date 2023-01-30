import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import {
	ImagesContainer,
	ImageContainer,
	SuccessContainer
} from '../styles/pages/success';

interface SuccessProps {
	custumerName: string;
	productsImages: string[];
}

export default function Success({
	custumerName,
	productsImages
}: SuccessProps) {
	return (
		<>
			<Head>
				<title>Compra efetuada | Ignite Shop</title>
				<meta name="robots" content="noindex" />{' '}
			</Head>

			<SuccessContainer>
				<ImagesContainer>
					{productsImages.map((image, index) => (
						<ImageContainer key={`${image}-${index}`}>
							<Image src={image} width={120} height={110} alt="" />
						</ImageContainer>
					))}
				</ImagesContainer>

				<h2>Compra efetuada!</h2>

				<p>
					Uhuul <strong>{custumerName}</strong>, sua compra de{' '}
					<strong>{productsImages.length} camisetas</strong> já está a caminho
					da sua casa.
				</p>

				<Link href="/">Voltar ao catálogo</Link>
			</SuccessContainer>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (!query.session_id) {
		return {
			redirect: { destination: '/', permanent: false }
		};
	}

	const sessionId = String(query.session_id);

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items', 'line_items.data.price.product']
	});

	const custumerName = session.customer_details.name;
	const productsImages = session.line_items?.data.map(item => {
		const product = item.price?.product as Stripe.Product;
		return product.images[0];
	});

	return {
		props: {
			custumerName,
			productsImages
		}
	};
};
