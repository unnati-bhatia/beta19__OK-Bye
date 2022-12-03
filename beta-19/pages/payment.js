import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const HomePage = () => {
	const router = useRouter();
	const { success, canceled } = router.query;

	useEffect(() => {
		if (success !== undefined || canceled !== undefined) {
			if (success) {
				console.log(
					'Order placed! You will receive an email confirmation.'
				);
			}

			if (canceled) {
				console.log(
					'Order canceled -- continue to shop around and checkout when you’re ready.'
				);
			}
		}
	}, [success, canceled]);

	return (
		<form action='/api/checkout_sessions' method='POST'>
			<section>
				<div>
					<Image
						className='image'
						src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Furl%2F&psig=AOvVaw3MysLtqGEVd6DVy5eVdnMB&ust=1670153229987000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjItuGr3fsCFQAAAAAdAAAAABAZ'
						alt='Talaash'
						width={150}
						height={150}
					/>
					<div className='description'>
						<h3 className='heading'>Talaash</h3>
						<h5 className='price'>Rs.1500</h5>
					</div>
				</div>
				<button type='submit' role='link'>
					Checkout
				</button>
			</section>
			<style jsx>
				{`
					.description {
						float: right;
						margin-left: 10px;
					}
					.image {
						float: left;
					}
					.heading {
						font-size: 28px;
						font-weight: 200;
					}
					.price {
						font-size: 18px;
						font-weight: bold;
					}
					section {
						background: #ffffff;
						display: flex;
						flex-direction: column;
						width: 450px;
						height: 112px;
						border-radius: 6px;
						justify-content: space-between;
					}
					button {
						height: 45px;
						padding: 10px;
						background: #556cd6;
						border-radius: 4px;
						color: white;
						border: 0;
						font-size: 18px;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.2s ease;
						box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
					}
					button:hover {
						opacity: 0.8;
					}
				`}
			</style>
		</form>
	);
};

export default HomePage;