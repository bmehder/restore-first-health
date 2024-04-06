<script>
	import Job from '$lib/Job.svelte'

	export let data
</script>

<svelte:head>
	<title>Job Opportunities - Restore First Health</title>
	<meta
		name="description"
		content="Learn about job opportunities in wound care at Restore First Health in Florida, Georgia, New Jersey, and Pennsylvania."
	/>
</svelte:head>

<section class="flow">
	<h1 class="title">Job Opportunities</h1>

	{#each data.jobsByRegions as items, idx}
		{#if data.jobsByRegions[idx].length}
			<h2>{data.regions[idx].name}</h2>
			<div class="items">
				{#each items as item}
					<Job {item} />
				{/each}
			</div>
		{/if}
	{/each}
</section>
