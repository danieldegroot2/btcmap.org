import axios from 'axios';
import { LNBITS_URL, LNBITS_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

// check the status of an invoice
export async function GET({ url }) {
	let hash = url.searchParams.get('hash');

	const headers = {
		'X-API-Key': `${LNBITS_API_KEY}`,
		'Content-type': 'application/json'
	};

	let status = await axios
		.get(`https://${LNBITS_URL}/api/v1/payments/${hash}`, { headers })
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			throw error(400, 'Could not check invoice status, please try again or contact BTC Map.');
			console.log(error);
		});

	return new Response(JSON.stringify(status));
}
