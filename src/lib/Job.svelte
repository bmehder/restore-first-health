<script>
	export let item
</script>

<div class="outer half-flow">
	<h3>{@html item.title.rendered}</h3>
	<p>{item.meta._bd_jobs_city}, {item.meta._bd_jobs_state_abbrev}</p>
	<p>{item.meta._bd_jobs_salary}</p>
	<a class="button" href={item.meta._bd_jobs_href} target="_blank">Apply Now</a>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--size);
		border: 1px solid lightgray;
	}

	h3 {
		color: var(--text-color);
		font-weight: bold;
		font-size: var(--font-size);
	}

	.button {
		margin-block-start: var(--size);
	}
</style>
