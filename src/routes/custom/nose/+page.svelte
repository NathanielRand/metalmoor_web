<script lang="ts">
</script>

<div
	class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex"
>
	<button
		id="hs-dropdown-example"
		type="button"
		class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
		aria-haspopup="menu"
		aria-expanded="false"
		aria-label="Dropdown"
	>
		Actions
		<svg
			class="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m6 9 6 6 6-6"></path>
		</svg>
	</button>

	<div
		class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="hs-dropdown-example"
	>
		<a
			class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
			href="#"
		>
			Newsletter
		</a>
		<a
			class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
			href="#"
		>
			Purchases
		</a>
		<a
			class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
			href="#"
		>
			Downloads
		</a>
		<a
			class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
			href="#"
		>
			Team Account
		</a>
	</div>
</div>

<section class="px-4 md:px-12 py-8 md:py-16">
	<h1 class="text-7xl font-black text-black dark:text-white mb-1">Custom Nose Jewelry</h1>
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
			<h1 class="text-3xl font-bold mt-3">Select the details of your custom piece</h1>
			<p class="text-xl text-gray-400">Handcrafted. Precision fit. Zero guesswork.</p>
		</header>
		<hr class="border-gray-500/50" />
		<h2 class="text-4xl font-black">Style</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Placement -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Placement</h2>
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

			<!-- Pierced -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Piercing Type</h2>
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
			<!-- Style -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Style</h2>
				<select
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

			<!-- Gauge -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Thickness Gauge</h2>
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
		</div>
		<hr class="border-gray-500/50" />
		<h2 class="text-4xl font-black">Material</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Material -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Material</h2>
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

			<!-- Diameter -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Diameter or Length</h2>
				<input
					type="number"
					placeholder="Enter mm"
					class="w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				/>
			</div>
		</div>
		<hr class="border-gray-500/50" />
		<h2 class="text-4xl font-black">Stones</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Stones -->
			<div class="space-y-4 col-span-2">
				<h2 class="text-xl font-semibold">Specifications</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div
						class="flex gap-4 rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
					>
						<label class="hs-switch flex items-center gap-3">
							<input
								type="checkbox"
								class="rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
							/>
							<span>Include Stones</span>
						</label>
					</div>
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
		</div>
		<hr class="border-gray-500/50" />
		<h2 class="text-4xl font-black">Finalize</h2>
		<div class="grid md:grid-cols-2 gap-6">
			<!-- Finish -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Finish</h2>
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

			<!-- Reference Image -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold">Reference Image</h2>
				<input
					type="file"
					class="block w-full text-sm file:rounded-xl file:border-0 file:bg-black file:text-white file:px-4 file:py-2 rounded-2xl border-gray-300 px-3 py-2 bg-gray-100 dark:bg-gray-900"
				/>
			</div>

			<!-- Confirmation -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold mb-3">Confirmation</h2>
				<label
					class="hs-checkbox flex items-start gap-2 rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				>
					<input type="checkbox" />
					<span class="text-sm"
						>I understand this is custom handcrafted jewelry and final sale. We do not offer
						refunds.</span
					>
				</label>
			</div>

			<!-- Contact Information -->
			<div class="space-y-3">
				<h2 class="text-xl font-semibold mb-3">Contact</h2>
				<input
					type="text"
					name="email"
					placeholder="email@example.com"
					class="w-full rounded-2xl border-gray-300 px-6 py-4 bg-gray-100 dark:bg-gray-900"
				/>
			</div>
		</div>
		<!-- Submit -->
		<div class="space-y-3">
			<button
				class="w-full rounded-2xl bg-yellow-500 text-white py-5 font-black tracking-wider text-2xl hover:opacity-90"
				>Submit Custom Request</button
			>
		</div>
	</section>
</section>
