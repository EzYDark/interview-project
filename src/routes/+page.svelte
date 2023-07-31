<script type="ts">
	import Navbar from './../lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SidebarFooter from '$lib/components/SidebarFooter.svelte';
	import Table from '$lib/components/Table.svelte';
	import { Heading, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<div class="flex flex-col w-screen bg-yellow-500/0 h-screen">
	<div class="bg-green-500/0">
		<Navbar />
	</div>
	<div class="bg-blue-500/0 h-full flex flex-row">
		<div class="bg-orange-500/0 w-64 h-full flex flex-col">
			<div class="bg-black/0 h-1/2">
				<Sidebar />
			</div>
			<div class="bg-green-500/0 h-1/2 flex flex-col">
				<div class="bg-yellow-500/0 h-5/6 border-r border-gray-200" />
				<div class="bg-blue-500/0 h-1/6">
					<SidebarFooter />
				</div>
			</div>
		</div>
		<div class="bg-red-500/0 w-full h-full flex flex-col">
			<div class="bg-yellow-500/0 h-20 w-full pt-5 pl-5">
				<Breadcrumb aria-label="Default breadcrumb example">
					<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
					<BreadcrumbItem href="/">Projects</BreadcrumbItem>
					<BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div class="bg-blue-500/0 h-full w-full flex flex-col">
				<div class="bg-green-500/0">
					<Heading tag="h2" class="mb-5 ml-5 w-fit" customSize="text-4xl font-bold"
						>All Products</Heading
					>
				</div>
				<div class="bg-cyan-500/0 h-full">
					<Table />
				</div>
			</div>
		</div>
	</div>
</div>
