<script lang="ts">
	import img_nose from '$lib/assets/custom/nose_ring_1.png';
	import img_ear from '$lib/assets/custom/ear_ring.png';
	import img_hand from '$lib/assets/custom/rings.webp';
	import img_wrist from '$lib/assets/custom/bracelet.png';
	import img_neck from '$lib/assets/custom/chains.png';
	import img_clasp from '$lib/assets/custom/clasp.png';
	import img_pendant from '$lib/assets/custom/pendant.png';
</script>

<section class="px-4 md:px-12 py-8 md:py-16">
	<h1 class="text-7xl font-black text-black dark:text-white mb-1">Custom Craft</h1>
	<h4 class="text-3xl font-thin text-black dark:text-white mb-6">
		Create custom jewelry using our simple stepper to craft the exact piece you desire.
	</h4>
	<hr class="border-neutral-500/60 pt-6" />
	<h3 class="text-5xl font-black text-black dark:text-white mb-4">Style</h3>
	<p class="text-2xl font-normal my-6 text-black dark:text-white">
		Begin the customizing process by selecting a jewelry style below.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-3 md:gap-6">
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<a href="/custom/nose">
					<img class="w-full h-auto rounded-xl" src={img_nose} alt="Card" />
					<div class="absolute bottom-0 start-0 end-0">
						<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
							<h3 class="text-5xl text-black dark:text-white font-black">Nose</h3>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-full h-auto rounded-xl" src={img_ear} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Ear</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-full h-auto rounded-xl" src={img_hand} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Hand</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-full h-auto rounded-xl" src={img_wrist} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Wrist</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-auto h-[293px] rounded-xl" src={img_neck} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Neck</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-full h-auto rounded-xl" src={img_clasp} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Clasp</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<div
				class="relative bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-950/70 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<img class="w-full h-auto rounded-xl" src={img_pendant} alt="Card" />
				<div class="absolute bottom-0 start-0 end-0">
					<div class="px-4 pb-3 pt-2 bg-neutral-50/10">
						<h3 class="text-5xl text-black dark:text-white font-black">Pendant</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
