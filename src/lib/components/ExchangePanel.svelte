<script lang="ts">
	// let { data } = $props();
</script>

<div
	class="w-fit mx-auto m-6 flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-3 bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
>
	<div>
		<div
			class="flex-none gap-x-1.5 py-2 px-3 rounded-full text-2xl font-thin bg-stone-100 text-red-400 dark:bg-stone-800/50 dark:text-red-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="inline-flex size-6"
				><line x1="12" x2="12" y1="2" y2="22" /><path
					d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
				/></svg
			>
			4,213.94
		</div>
		<button
			type="button"
			class="py-2 mt-2 px-2 w-full rounded-3xl border border-transparent hover:border-stone-950 hover:shadow hover:shadow-red-200 bg-stone-800 text-red-400 hover:bg-stone-200 focus:outline-hidden focus:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none dark:text-red-400 dark:hover:bg-stone-800/50 dark:focus:bg-stone-800/50"
		>
			<span class="mx-auto tracking-widest font-black text-2xl uppercase">Sell</span>
		</button>
	</div>
	<div>
		<span
			class="inline-flex items-center gap-x-1.5 py-1.5 px-6 rounded-full text-5xl font-thin bg-stone-100 text-amber-400 dark:bg-stone-800/50 dark:text-amber-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="inline-flex mr-2 size-10"
				><line x1="12" x2="12" y1="2" y2="22" /><path
					d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
				/></svg
			>
			4,213.94
		</span>
		<p class="text-center mt-2 uppercase tracking-widest">Spot Price</p>
		<p class="text-center mt-2 text-xs italic">Updated 12:00:30 DD/MM</p>
		<button class="text-center mx-auto flex mt-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-5 inline-flex mr-1"
				><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path
					d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
				/><path d="M8 16H3v5" /></svg
			>
			REFRESH
		</button>
	</div>
	<div>
		<div
			class="flex-none gap-x-1.5 py-2 px-3 rounded-full text-2xl font-thin bg-stone-100 text-green-400 dark:bg-stone-800/50 dark:text-green-400"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="inline-flex size-6"
				><line x1="12" x2="12" y1="2" y2="22" /><path
					d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
				/></svg
			>
			4,213.94
		</div>
		<button
			type="button"
			class="py-2 mt-2 px-2 w-full rounded-3xl border border-transparent hover:border-stone-950 hover:shadow hover:shadow-red-200 bg-stone-800 text-green-400 hover:bg-stone-200 focus:outline-hidden focus:bg-stone-200 disabled:opacity-50 disabled:pointer-events-none dark:text-green-400 dark:hover:bg-stone-800/50 dark:focus:bg-stone-800/50"
		>
			<span class="mx-auto tracking-widest font-black text-2xl uppercase">Buy</span>
		</button>
	</div>
</div>
