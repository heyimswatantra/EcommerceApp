import express from 'express';
import shortid from 'shortid';
import Razorpay from 'razorpay';

import { userSignup, userLogin} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
const router = express.Router();

const razorpay = new Razorpay({
	key_id: 'rzp_test_Icsk4KHPauWUjw',
	key_secret: 'mZUVvlR84pQiw3z8KjQr9jox'
})

router.post('/signup', userSignup);
router.post('/login',  userLogin);

router.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}
	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

router.get('/products', getProducts);
router.get('/product/:id', getProductById)

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paytmResponse);
export default router;