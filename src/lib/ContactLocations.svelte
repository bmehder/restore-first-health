<script>
	export let name
	export let phoneLink
	export let phone
	export let fax
</script>

<div>
	<h3><strong>{name}</strong></h3>
	{#if phone}
		<p>Phone: <a href={phoneLink}>{phone}</a></p>
		<p>Fax: {fax}</p>
	{/if}
</div>

<style>
	div {
		padding-bottom: var(--half-size);
	}

	div > * + * {
		margin-top: calc(var(--half-size) / 2);
	}

	h3 {
		padding-bottom: 16px;
	}

	h3,
	p {
		font-size: 1.125rem;
	}

	a {
		color: initial;
	}
</style>
