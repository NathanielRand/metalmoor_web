<script lang="ts">
	import { onMount } from 'svelte';

	// --- Component State ---
	let metal: 'gold' | 'silver' | 'platinum' = 'gold';
	let weight: number = 1;
	let unit: 'troy_ounces' | 'grams' | 'ounces' | 'pounds' | 'kilograms' = 'grams';
	let purity: string = '24k'; // This will change based on the metal
	let itemType: string = 'coin';

	let spotPrices = {
		gold: 4186.66, // Fallback data
		silver: 58.76, // Fallback data
		platinum: 1663.6, // Fallback data
		loading: true
	};

	// let spotPrices = {
	// 	goldBid: 2350.0,
	// 	goldAsk: 2350.0,
	// 	goldAvg: 2350.0,
	// 	silverBid: 2350.0,
	// 	silverAsk: 2350.0,
	// 	silverAvg: 2350.0,
	// 	platBid: 2350.0,
	// 	platAsk: 2350.0,
	// 	platAvg: 2350.0,
	// 	loading: true
	// };

	let calculatedValue: number = 0;

	// --- Data Fetching (metalpriceapi) ---
	// onMount(async () => {
	// 	// IMPORTANT: You need an API key from a service like https://metalpriceapi.com/
	// 	// Replace 'YOUR_API_KEY' with your actual key.
	// 	const API_KEY = 'YOUR_API_KEY';
	// 	const API_URL = `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=USD&currencies=XAU,XAG,XPT`;

	// 	try {
	// 		// Comment out or remove the fetch call if you don't have an API key yet
	// 		const response = await fetch(API_URL);
	// 		if (!response.ok) {
	// 			throw new Error('Network response was not ok');
	// 		}
	// 		const data = await response.json();

	// 		// Rates are per ounce, which we'll treat as troy ounce for spot prices
	// 		spotPrices.gold = 1 / data.rates.XAU;
	// 		spotPrices.silver = 1 / data.rates.XAG;
	// 		spotPrices.platinum = 1 / data.rates.XPT;
	// 		console.log('spotPrices: ', spotPrices);
	// 	} catch (error) {
	// 		console.error('Failed to fetch spot prices. Using fallback data.', error);
	// 		// The component will use the fallback data if the API call fails
	// 	} finally {
	// 		spotPrices.loading = false;
	// 	}
	// });

	// --- Data Fetching (freegoldprice) ---
	// onMount(async () => {
	// 	console.log('%c[CLIENT] Fetching /api/metal-prices...', 'color: orange; font-weight: bold;');

	// 	try {
	// 		const response = await fetch('/api/metal-prices').catch((err) => {
	// 			console.error('[CLIENT] Fetch threw BEFORE response:', err);
	// 			throw err;
	// 		});

	// 		console.log('[CLIENT] Response:', response);
	// 		console.log('[CLIENT] Status:', response.status, 'OK:', response.ok);

	// 		const raw = await response.text();
	// 		console.log('[CLIENT] RAW TEXT:', raw);

	// 		let data;
	// 		try {
	// 			data = JSON.parse(raw);
	// 			console.log('[CLIENT] PARSED JSON:', data.GSPPJ);
	// 		} catch (err) {
	// 			console.error('[CLIENT] JSON PARSE ERROR:', err);
	// 			throw err;
	// 		}

	// 		console.log('[CLIENT] Extracting bids...');

	// 		spotPrices.goldAsk = data?.GSPPJ?.Gold?.USD?.ask ?? 0;
	// 		spotPrices.goldBid = data?.GSPPJ?.Gold?.USD?.bid ?? 0;
	// 		spotPrices.silverBid = data?.GSPPJ?.Silver?.USD?.bid ?? 0;
	// 		spotPrices.platBid = data?.GSPPJ?.Platinum?.USD?.bid ?? 0;

	// 		console.log('[CLIENT] spotPrices:', spotPrices);
	// 	} catch (error) {
	// 		console.error('[CLIENT] FINAL CATCH ERROR:', error);
	// 	} finally {
	// 		spotPrices.loading = false;
	// 		console.log('[CLIENT] Loading complete');
	// 	}
	// });

	// --- Data Definitions ---
	const units = {
		troy_ounces: { name: 'Troy Ounces', toTroyOunce: 1 },
		grams: { name: 'Grams', toTroyOunce: 1 / 31.1035 },
		ounces: { name: 'Ounces (Avdp.)', toTroyOunce: 1 / 1.09714 },
		pounds: { name: 'Pounds (Avdp.)', toTroyOunce: 14.5833 },
		kilograms: { name: 'Kilograms', toTroyOunce: 32.1507 }
	};

	const purities = {
		gold: {
			'24k': { name: '24k (99.9%)', multiplier: 0.999 },
			'22k': { name: '22k (91.7%)', multiplier: 22 / 24 },
			'18k': { name: '18k (75.0%)', multiplier: 18 / 24 },
			'14k': { name: '14k (58.3%)', multiplier: 14 / 24 },
			'10k': { name: '10k (41.7%)', multiplier: 10 / 24 }
		},
		silver: {
			'999': { name: 'Fine (99.9%)', multiplier: 0.999 },
			'925': { name: 'Sterling (92.5%)', multiplier: 0.925 }
		},
		platinum: {
			'999': { name: 'Fine (99.9%)', multiplier: 0.999 },
			'950': { name: '950 (95.0%)', multiplier: 0.95 },
			'900': { name: '900 (90.0%)', multiplier: 0.9 }
		}
	};

	const itemTypes = ['Bar', 'Coin', 'Chains', 'Jewelry', 'Other'];

	// --- Reactive Calculations ---
	$: {
		const pricePerTroyOunce = spotPrices[metal] || 0;
		const weightInTroyOunces = (weight || 0) * (units[unit]?.toTroyOunce || 0);
		const purityMultiplier = purities[metal][purity]?.multiplier || 0;

		calculatedValue = weightInTroyOunces * purityMultiplier * pricePerTroyOunce;
	}

	// --- Event Handlers ---
	$: {
		// When metal changes, reset purity to the first available option
		if (metal) {
			purity = Object.keys(purities[metal])[0];
		}
	}
</script>

<div
	class="mx-auto m-6 w-full justify-center items-center gap-1.5 sm:gap-3 bg-white border border-gray-200 shadow-2xs rounded-3xl p-4 md:p-14 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
>
	<h2 class="text-3xl tracking-tight text-stone-900 dark:text-stone-100 mb-8">
		Precious Metal Value Calculator
	</h2>
	<div
		class="flex justify-center p-4 my-3 rounded-2xl gap-6 text-center bg-stone-500 dark:bg-stone-900 dark:text-amber-500 tracking-wider"
	>
		{#if spotPrices.loading}
			<span>Loading spot prices...</span>
		{:else}
			<span>Gold: $<b>{spotPrices.gold.toFixed(2)}</b></span>
			<span>Silver: $<b>{spotPrices.silver.toFixed(2)}</b></span>
			<span>Platinum: $<b>{spotPrices.platinum.toFixed(2)}</b></span>
		{/if}
	</div>

	<form on:submit|preventDefault>
		<div class="form-grid text-stone-900">
			<!-- Metal Selection -->
			<div class="form-group">
				<label for="metal">Metal</label>
				<select id="metal" bind:value={metal}>
					<option value="gold">Gold</option>
					<option value="silver">Silver</option>
					<option value="platinum">Platinum</option>
				</select>
			</div>

			<!-- Weight Input -->
			<div class="form-group">
				<label for="weight">Weight</label>
				<input id="weight" type="number" bind:value={weight} min="0" step="any" />
			</div>

			<!-- Unit Selection -->
			<div class="form-group">
				<label for="unit">Unit</label>
				<select id="unit" bind:value={unit}>
					{#each Object.entries(units) as [key, { name }]}
						<option value={key}>{name}</option>
					{/each}
				</select>
			</div>

			<!-- Purity Selection (Dynamic) -->
			<div class="form-group">
				<label for="purity">Purity</label>
				<select id="purity" bind:value={purity}>
					{#each Object.entries(purities[metal]) as [key, { name }]}
						<option value={key}>{name}</option>
					{/each}
				</select>
			</div>

			<!-- Item Type Selection -->
			<div class="form-group">
				<!-- <label for="itemType">Item Type</label>
				<select id="itemType" bind:value={itemType}>
					{#each itemTypes as type}
						<option value={type}>{type}</option>
					{/each}
				</select> -->
			</div>
		</div>
	</form>

	<div class="bg-stone-900 p-8 text-center mt-6 rounded-xl border border-stone-900">
		<h3 class="text-stone-100 dark:text-stone-100 text-lg">Estimated Spot Value</h3>
		<div class="text-amber-500 text-7xl font-black">
			${calculatedValue.toLocaleString('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}
		</div>
	</div>
</div>

<style>
	.spot-prices {
		display: flex;
		justify-content: space-around;
		background-color: #e1e4e8;
		padding: 0.75rem;
		border-radius: 6px;
		margin-bottom: 1.5rem;
		font-size: 0.9em;
		color: #586069;
	}

	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group:last-child {
		grid-column: 1 / -1; /* Make last item span full width if it's odd */
	}

	label {
		font-weight: 600;
		color: #586069;
		margin-bottom: 0.5rem;
	}

	input,
	select {
		padding: 0.75rem;
		border: 1px solid #d1d5da;
		border-radius: 6px;
		font-size: 1rem;
		background-color: #fff;
	}

	input:focus,
	select:focus {
		outline: none;
		border-color: #0366d6;
		box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
	}

	.result-container {
		text-align: center;
		margin-top: 2rem;
		background-color: #ffffff;
		padding: 1.5rem;
		border-radius: 6px;
		border: 1px solid #e1e4e8;
	}

	.final-value {
		font-size: 2.5rem;
		font-weight: bold;
		color: #0366d6;
		margin-top: 0.5rem;
	}

	@media (max-width: 500px) {
		.form-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
