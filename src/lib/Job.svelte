<script>
	export let position = ''
	export let city = ''
	export let state = ''
	export let salary = ''
	export let href = ''
</script>

{#if position}
	<div class="outer half-flow">
		<h3>{position}</h3>
		<p>{city}, {state}</p>
		<p>{salary}</p>
		<a class="button" {href} target="_blank">Apply Now</a>
	</div>
{:else}
	<span></span>
{/if}

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
