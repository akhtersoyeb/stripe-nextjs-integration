import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

export default function Home() {

  const [item, setItem] = useState({
    name: 'Nextjs Ecommerce Template',
    description: 'Latest and greatest template of all time',
    images: [
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    ],
    quantity: 1,
    price: 999, // price in paise/cents
  })

  const createCheckOutSession = async () => {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post('/api/create-stripe-session', {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  const router = useRouter();
  const { status } = router.query;

  return (
    <div>
      <Head>
        <title>Digital Shop</title>
        <meta name="description" content="Digital E-Commerece shop template made by Sk Soyeb Akhter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-5 container mx-auto w-80">
        {status && status === 'success' && (
          <Alert message="Payment successfully completed." type="success" closable showIcon />
        )}
        {status && status === 'cancel' && (
          <Alert message="Success Tips" type="error" closable showIcon />
        )}
      </div>

      <main className="container mx-auto my-24 w-80">
        <div className='shadow-lg border rounded p-2 '>
          <Image src={item.images[0]} width={300} height={150} alt={item.name} />
          <h2 className='text-2xl'>$ {item.price/100}</h2>
          <h3 className='text-xl'>{item.name}</h3>
          <p className='text-gray-500'>{item.description}</p>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2'
            onClick={createCheckOutSession}
          >
            Buy
          </button>
        </div>
    </main>
    </div>
  )
}
