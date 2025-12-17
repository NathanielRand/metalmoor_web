<script lang="ts">
	import category_ore from '$lib/assets/categories/ore.webp';
	import category_pellets from '$lib/assets/categories/pellets.webp';
	import category_bars from '$lib/assets/categories/bars.webp';
	import category_coins from '$lib/assets/categories/coins.webp';
	import category_jewelry from '$lib/assets/categories/jewelry.webp';
	import category_custom from '$lib/assets/categories/custom.webp';
</script>

<div
	class="grid border border-gray-200 rounded-t-xl shadow-2xs divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600"
>
	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					src={category_custom}
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					alt="custom"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Custom</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Bring your design and we’ll turn it into a handcrafted piece of precious metal art.
				</p>
			</div>
		</a>
	</div>

	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					src={category_jewelry}
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					alt="coins"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Jewelry</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Chains, rings, pendants, and statement pieces crafted from real precious metal.
				</p>
			</div>
		</a>
	</div>

	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					src={category_bars}
					alt="pellets"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Bars</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Solid investment grade metal in clean rectangular form. Easy to store, trade, & trusted
					worldwide
				</p>
			</div>
		</a>
	</div>
</div>
<div
	class="grid border border-gray-200 rounded-b-xl shadow-2xs divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600"
>
	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					src={category_coins}
					alt="bars"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Coins</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Recognizable, collectible, and instantly liquid. Whether bullion or vintage, coins bridge
					the gap.
				</p>
			</div>
		</a>
	</div>

	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					src={category_pellets}
					alt="ore"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Pellets</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Small uniform spheres ideal for melting, casting, and precision work.
				</p>
			</div>
		</a>
	</div>

	<div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
		<a
			class="flex flex-col group bg-white shadow-2xs overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:shadow-neutral-700/70"
			href="#"
		>
			<div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
				<img
					class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
					src={category_ore}
					alt="Card"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="text-6xl font-black text-gray-800 dark:text-white">Ore</h3>
				<p class="mt-1 text-gray-500 dark:text-neutral-400">
					Raw, unrefined material straight from the earth for buyers who like their metal wild.
				</p>
			</div>
		</a>
	</div>
</div>
