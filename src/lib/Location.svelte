<script>
	export let name
	export let address1
	export let address2
	export let city
	export let mapLink
	export let phoneLink
	export let phone
	export let fax
	export let isComingSoon
</script>

<div class="half-flow bg-light">
	<h3>{name}</h3>
	<p>
		{address1}<br />
		{address2}<br />
		{city}<br />
		{#if fax}
			Fax: {fax}<br />
		{/if}
		<a href={mapLink}>View Map</a>
	</p>
	{#if phoneLink}
		<a class="button" href={phoneLink}>{phone}</a>
	{/if}
	{#if isComingSoon}
		<p class="coming-soon">Coming Soon!</p>
	{/if}
</div>

<style>
	div {
		padding: var(--size);
	}

	.button {
		padding-inline: var(--size);
		text-align: center;
	}

	.coming-soon {
		color: var(--highlight);
		text-align: center;
		font-weight: bold;
		font-style: italic;
	}
</style>
