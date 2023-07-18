import axios from 'axios';

const URL = 'https://flipkart-clone-rti5.onrender.com';

export const authenticateSignup = async (data) => {
    try{
        return await axios.post(`${URL}/signup` , data);
    } catch (error) {
        console.log("Error while calling signup api", error);
    }
}

export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login` , data);
    } catch (error) {
        console.log("Error while calling login api", error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api' , error);
    }
}

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export async function payUsingRazorPay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://flipkart-clone-rti5.onrender.com/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)
		const options = {
			key: 'rzp_test_Icsk4KHPauWUjw',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Payment',
			description: 'Thank you for shopping with us',
			image: 'https://flipkart-clone-rti5.onrender.com/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: 'Swatantra',
				email: 'abc@xyz.com',
				phone_number: '9999999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
}