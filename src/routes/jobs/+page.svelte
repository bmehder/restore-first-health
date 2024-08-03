<script>
	const init = node => {
		const config = { attributes: true, childList: true, subtree: true }

		const callback = () => {
			node.height = node.contentWindow.document.body.scrollHeight + 100
		}

		const observer = new MutationObserver(callback)

		setTimeout(() => observer.observe(node.contentWindow.document, config), 100)
	}
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

	<iframe use:init src="/hrjazz/index.html" frameborder="0" title="jobs"></iframe>

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

<style>
	iframe {
		min-height: 100dvh;
	}
</style>
