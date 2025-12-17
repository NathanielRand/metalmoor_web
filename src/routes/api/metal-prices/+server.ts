export async function GET() {
	const API_KEY = 'DjkIBjMhjTP7TUySBeFCos0CH0xaDNSkMXjzrI2U1bZZtNJv1FyOyr4jqJUL';
	const API_URL = `https://freegoldprice.org/api/v2?key=${API_KEY}&action=GSPPJ`;

	console.log('[SERVER] Incoming request to /api/metal-prices');
	console.log('[SERVER] Target URL:', API_URL);

	try {
		console.log('[SERVER] Attempting fetch to freegoldprice...');
		const r = await fetch(API_URL).catch((err) => {
			console.error('[SERVER] Fetch threw BEFORE response:', err);
			throw err;
		});

		console.log('[SERVER] Response status:', r.status);
		console.log('[SERVER] Response ok:', r.ok);

		let raw;
		try {
			raw = await r.text();
			console.log('[SERVER] RAW TEXT:', raw);
		} catch (err) {
			console.error('[SERVER] Failed reading raw text:', err);
			throw err;
		}

		let data;
		try {
			data = JSON.parse(raw);
			console.log('[SERVER] PARSED JSON:', data);
		} catch (err) {
			console.error('[SERVER] JSON PARSE ERROR:', err);
			throw err;
		}

		return new Response(JSON.stringify(data), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('[SERVER] FINAL CATCH ERROR:', err);
		return new Response(JSON.stringify({ error: true, message: err.message }), { status: 500 });
	}
}
