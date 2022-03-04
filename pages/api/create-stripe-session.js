const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {


    try {
      // create checkout sessions from body params
      const { item } = req.body;
      const redirectURL = `http://localhost:3000/`;
      const transformedItem = {
        price_data: {
          currency: 'inr', // use 'usd' if you're outside India
          product_data: {
            images: item.images,
            name: item.name,
          },
          unit_amount: item.price,
        },
        description: item.description,
        quantity: item.quantity,
      };

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '?status=success',
        cancel_url: redirectURL + '?status=cancel',
        metadata: {
          images: item.image,
        },
      });

      res.json({ id: session.id })
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
