import express from 'express';
import shortid from 'shortid';
import Razorpay from 'razorpay';
import path from 'path';

import { userSignup, userLogin} from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
const router = express.Router();

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET
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
router.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'))
})
export default router;