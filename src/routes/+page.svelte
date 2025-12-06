<script lang="ts">
	import ExchangePanel from '$lib/components/ExchangePanel.svelte';
	import ValueCalculator from '$lib/components/ValueCalculator.svelte';
</script>

<!-- Hero -->
<div class="p-2 md:p-4">
	<div class="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
		<!-- Announcement Banner -->
		<div class="flex justify-center">
			<a
				class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
				href="#"
			>
				Exclusive shipping deal for verified free members
				<span
					class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400"
				>
					<svg
						class="shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
					>
				</span>
			</a>
		</div>
		<!-- End Announcement Banner -->

		<!-- Title -->
		<div class="mt-5 max-w-2xl text-center mx-auto">
			<h1
				class="block font-bold text-gray-800 text-5xl md:text-6xl lg:text-7xl dark:text-neutral-200"
			>
				Real <span class="bg-clip-text bg-linear-to-tl from-stone-400 to-amber-400 text-transparent"
					>metal</span
				>
				prices. Real <u class="underline-offset-8">fast</u>.
			</h1>
		</div>
		<!-- End Title -->

		<div class="mt-5 max-w-3xl text-center mx-auto">
			<p class="text-lg text-gray-600 dark:text-neutral-400">
				MetalMoor gives you live spot data and instant buy and sell prices without the nonsense
				spreads and mystery fees. Just raw numbers and clear actions.
			</p>
		</div>

		<div class="my-8 flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-3">
			<div class="flex flex-wrap gap-1 sm:gap-3">
				<span class="text-sm text-gray-600 dark:text-neutral-400">Package Manager:</span>
				<span class="text-sm font-bold text-gray-900 dark:text-white">npm</span>
			</div>
			<svg
				class="hidden sm:block size-5 text-gray-300 dark:text-neutral-600"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round" />
			</svg>
			<a
				class="inline-flex items-center gap-x-1 text-sm text-amber-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-amber-500"
				href="../docs/index.html"
			>
				Installation Guide
				<svg
					class="shrink-0 size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
				>
			</a>
		</div>
		<ExchangePanel />
		<ValueCalculator />
	</div>
</div>
<!-- End Hero -->
