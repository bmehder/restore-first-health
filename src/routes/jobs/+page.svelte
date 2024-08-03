<script>
	import { onMount } from 'svelte'
	// import Job from '$lib/Job.svelte'

	// export let data

	let iframe

	onMount(() => {
		setTimeout(() => {
			iframe.height = iframe.contentWindow.document.body.scrollHeight + 100
		}, 2000)
	})
</script>

<svelte:head>
	<title>Job Opportunities - Restore First Health</title>
	<meta
		name="description"
		content="Learn about job opportunities in wound care at Restore First Health in Florida, Georgia, New Jersey, and Pennsylvania."
	/>
	<script src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent"></script>
</svelte:head>

<section class="flow">
	<h1 class="title">Job Opportunities</h1>

	<iframe bind:this={iframe} src="/hrjazz/index.html" frameborder="0" title="jobs"
	></iframe>

	<!-- {#each data.jobsByRegions as items, idx}
		{#if items.length}
			<h2>{data.regions[idx].name}</h2>
			<div class="items">
				{#each items as item}
					<Job {item} />
				{/each}
			</div>
		{/if}
	{/each} -->
</section>
