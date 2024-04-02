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

	<h2>Florida</h2>
	<div class="auto-grid florida">
		{#each data.jobs.florida as { position, salary, city, state, href }}
			<Job {position} {salary} {city} {state} {href} />
		{/each}
	</div>

	<h2>Georgia</h2>
	<div class="auto-grid georgia">
		{#each data.jobs.georgia as { position, salary, city, state, href }}
			<Job {position} {salary} {city} {state} {href} />
		{/each}
	</div>

	<h2>New Jersey</h2>
	<div class="auto-grid new-jersey">
		{#each data.jobs.newJersey as { position, salary, city, state, href }}
			<Job {position} {salary} {city} {state} {href} />
		{/each}
	</div>
	<h2>Pennsylvania</h2>
	<div class="auto-grid pennsylvania">
		{#each data.jobs.pennsylvania as { position, salary, city, state, href }}
			<Job {position} {salary} {city} {state} {href} />
		{/each}
	</div>
</section>