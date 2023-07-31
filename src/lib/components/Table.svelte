<script lang="ts">
	import data from '$lib/data.json';
	import { onMount, onDestroy } from 'svelte';
	import { Button } from 'flowbite-svelte';
	import AngleLeftIcon from './AngleLeftIcon.svelte';
	import AngleRightIcon from './AngleRightIcon.svelte';

	interface IData {
		id: number | null;
		first_name: string | null;
		last_name: string | null;
		email: string | null;
		gender: string | null;
		address: string | null;
		money: string | null;
		added_at: string | null;
		last_modified: string | null;
	}

	let jsonData: IData[] = data;
	let search = '';
	let currentPage = 1;
	const itemsPerPage = 10;

	let itemsToShow: number = 10;

	// const updateItemsToShow = () => {
	// 	if (window.innerWidth < 600) {
	// 		itemsToShow = 5;
	// 	} else if (window.innerWidth < 900) {
	// 		itemsToShow = 10;
	// 	} else {
	// 		itemsToShow = 15;
	// 	}
	// };

	// onMount(async () => {
	// 	jsonData = data;
	// 	window.addEventListener('resize', updateItemsToShow);
	// 	updateItemsToShow(); // initial update
	// });

	// onDestroy(async () => {
	// 	window.removeEventListener('resize', updateItemsToShow);
	// });

	$: filteredData = jsonData.filter(
		(item) =>
			(item.first_name && item.first_name.includes(search)) ||
			(item.last_name && item.last_name.includes(search)) ||
			(item.email && item.email.includes(search)) ||
			(item.gender && item.gender.includes(search)) ||
			(item.address && item.address.includes(search)) ||
			(item.money && item.money.includes(search))
	);

	$: paginatedData = filteredData.slice(0, itemsToShow);
	$: totalItems = filteredData.length;
	$: totalPages = Math.ceil(totalItems / itemsPerPage);
</script>

<div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
	<div
		class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
	>
		<div class="w-full md:w-1/2">
			<form class="flex items-center">
				<label for="simple-search" class="sr-only">Search</label>
				<div class="relative w-full">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<input
						bind:value={search}
						type="text"
						id="simple-search"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Search"
					/>
				</div>
			</form>
		</div>
		<div
			class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
		>
			<button
				type="button"
				class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
			>
				<svg
					class="h-3.5 w-3.5 mr-2"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
					/>
				</svg>
				Add user
			</button>
		</div>
	</div>
	<div class="overflow-x-auto">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" class="px-4 py-3">Name</th>
					<th scope="col" class="px-4 py-3">E-Mail</th>
					<th scope="col" class="px-4 py-3">Gender</th>
					<th scope="col" class="px-4 py-3">Address</th>
					<th scope="col" class="px-4 py-3">Money</th>
					<th scope="col" class="px-4 py-3">Added At</th>
					<th scope="col" class="px-4 py-3">Last Modified</th>
				</tr>
			</thead>
			<tbody class="">
				{#each paginatedData as item, index (index)}
					<tr class="border-b dark:border-gray-700">
						<th
							scope="row"
							class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>{item.first_name} {item.last_name}</th
						>
						<td class="px-4 py-3">{item.email}</td>
						<td class="px-4 py-3">{item.gender}</td>
						<td class="px-4 py-3">{item.address}</td>
						<td class="px-4 py-3">{item.money}</td>
						<td class="px-4 py-3"
							>{item.added_at ? new Date(parseInt(item.added_at)).toLocaleDateString() : 'N/A'}</td
						>
						<td class="px-4 py-3"
							>{item.last_modified
								? new Date(parseInt(item.last_modified)).toLocaleDateString()
								: 'N/A'}</td
						>
						<td class="px-4 py-3 flex items-center justify-end">
							<!-- Your dropdown menu code here -->
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<nav
		class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
		aria-label="Table navigation"
	>
		<span class="text-sm font-normal text-gray-500 dark:text-gray-400">
			Showing
			<span class="font-semibold text-gray-900 dark:text-white"
				>{(currentPage - 1) * itemsPerPage + 1}-{Math.min(
					currentPage * itemsPerPage,
					totalItems
				)}</span
			>
			of
			<span class="font-semibold text-gray-900 dark:text-white">{totalItems}</span>
		</span>
		<ul class="inline-flex items-stretch -space-x-px">
			<li class="mr-4">
				<Button color="blue"><AngleLeftIcon class="w-3 h-3 mr-2" />Previous</Button>
			</li>
			<li>
				<Button color="blue">Next<AngleRightIcon class="w-3 h-3 ml-2" /></Button>
			</li>
		</ul>
	</nav>
</div>
