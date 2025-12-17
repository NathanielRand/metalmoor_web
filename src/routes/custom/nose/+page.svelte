<script lang="ts">
	import img_nose from '$lib/assets/custom/nose_ring_1.png';
	import img_ear from '$lib/assets/custom/ear_ring.png';
	import img_hand from '$lib/assets/custom/rings.webp';
	import img_wrist from '$lib/assets/custom/bracelet.png';
	import img_neck from '$lib/assets/custom/chains.png';
	import img_clasp from '$lib/assets/custom/clasp.png';
	import img_pendant from '$lib/assets/custom/pendant.png';
</script>

<section class="px-4 md:px-8 py-8 md:py-16">
	<h1 class="text-7xl font-black text-black dark:text-white mb-1">Custom Build</h1>
	<h4 class="text-3xl font-thin text-black dark:text-white mb-6">
		Create custom jewelry using our simple stepper to craft the exact piece you desire.
	</h4>
	<hr class="border-neutral-500/60 pt-6" />
	<!-- Custom Nose Jewelry Builder using TailwindCSS + Preline -->
	<!-- Assumes Tailwind + Preline JS already loaded globally -->

	<section
		class="max-w-5xl mx-auto p-6 space-y-10 text-black dark:text-white bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
	>
		<header class="space-y-2">
			<h1 class="text-3xl font-bold">Build Your Custom Nose Jewelry</h1>
			<p class="text-sm text-gray-500">Handcrafted. Precision fit. Zero guesswork.</p>
		</header>

		<!-- Step 1: Placement -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">1. Placement</h2>
			<select
				class="hs-select block w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				data-hs-select
			>
				<option>Nostril Left</option>
				<option>Nostril Right</option>
				<option>Septum</option>
				<option>High Nostril</option>
				<option>Bridge</option>
				<option>Non Pierced</option>
			</select>
		</div>

		<!-- Step 2: Pierced -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">2. Piercing Type</h2>
			<div class="flex gap-4 rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900">
				<label class="hs-radio flex items-center gap-2">
					<input type="radio" name="pierced" checked />
					<span>Pierced</span>
				</label>
				<label class="hs-radio flex items-center gap-2">
					<input type="radio" name="pierced" />
					<span>Non Pierced</span>
				</label>
			</div>
		</div>

		<!-- Step 3: Style -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">3. Style</h2>
			<select
				multiple
				class="hs-select block w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				data-hs-select
			>
				<option>Hoop</option>
				<option>Clicker</option>
				<option>Stud</option>
				<option>L Shape</option>
				<option>Screw</option>
				<option>Flat Back</option>
				<option>Segment Ring</option>
				<option>Clip On</option>
				<option>Chain</option>
				<option>Handcrafted</option>
			</select>
		</div>

		<!-- Step 4: Material -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">4. Material</h2>
			<select
				class="hs-select block w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				data-hs-select
			>
				<optgroup label="Gold">
					<option>10k Yellow Gold</option>
					<option>14k Yellow Gold</option>
					<option>18k Yellow Gold</option>
					<option>14k White Gold</option>
					<option>14k Rose Gold</option>
				</optgroup>
				<optgroup label="Silver">
					<option>Sterling Silver</option>
					<option>Argentium Silver</option>
				</optgroup>
				<optgroup label="Platinum">
					<option>Platinum 950</option>
				</optgroup>
			</select>
		</div>

		<!-- Step 5: Gauge -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">5. Thickness Gauge</h2>
			<select
				class="hs-select block w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				data-hs-select
			>
				<option>24 Gauge (.5mm)</option>
				<option>22 Gauge (.6mm)</option>
				<option>20 Gauge (.8mm)</option>
				<option>18 Gauge (1mm)</option>
				<option>16 Gauge (1.2mm)</option>
				<option>14 Gauge (1.6mm)</option>
			</select>
		</div>

		<!-- Step 6: Diameter -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">6. Diameter or Length</h2>
			<input
				type="number"
				placeholder="Enter mm"
				class="w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
			/>
		</div>

		<!-- Step 7: Stones -->
		<div class="space-y-4">
			<h2 class="text-xl font-semibold">7. Stones</h2>
			<label class="hs-switch flex items-center gap-3">
				<input
					type="checkbox"
					class="rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				/>
				<span>Include Stones</span>
			</label>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<select
					class="hs-select rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
					data-hs-select
				>
					<option>Diamond</option>
					<option>Moissanite</option>
					<option>Sapphire</option>
					<option>Ruby</option>
					<option>Emerald</option>
					<option>Opal Synthetic</option>
					<option>Freshwater Pearl</option>
					<option>Akoya Pearl</option>
				</select>
				<input
					type="text"
					placeholder="Stone size mm"
					class="rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				/>
				<select
					class="hs-select rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
					data-hs-select
				>
					<option>Natural</option>
					<option>Lab Grown</option>
				</select>
			</div>
		</div>

		<!-- Step 8: Finish -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">8. Finish</h2>
			<select
				class="hs-select block w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				data-hs-select
			>
				<option>High Polish</option>
				<option>Matte</option>
				<option>Brushed</option>
				<option>Hammered</option>
				<option>Engraved</option>
			</select>
		</div>

		<!-- Step 9: Reference Image -->
		<div class="space-y-3">
			<h2 class="text-xl font-semibold">9. Reference Image</h2>
			<input
				type="file"
				class="block w-full text-sm file:rounded-xl file:border-0 file:bg-black file:text-white file:px-4 file:py-2 rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
			/>
		</div>

		<!-- Step 10: Confirmation -->
		<div class="space-y-2">
			<label
				class="hs-checkbox flex items-start gap-2 rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
			>
				<input type="checkbox" />
				<span class="text-sm">I understand this is custom handcrafted jewelry and final sale</span>
			</label>
		</div>

		<!-- Submit -->
		<div class="pt-6">
			<button
				class="w-full rounded-2xl bg-yellow-500 text-white py-3 font-black tracking-wider text-2xl hover:opacity-90"
				>Preview Custom Piece</button
			>
		</div>
	</section>
</section>
