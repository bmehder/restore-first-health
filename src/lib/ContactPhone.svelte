<script>
	import locations from '$lib/locations'
	import ContactLocations from '$lib/ContactLocations.svelte'
</script>

<div class="flow">
	<h2>Call Us</h2>

	<details class="flow">
		<summary>Pennsylvania</summary>
		{#each locations.pennsylvania as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>

	<details class="flow">
		<summary>Georgia</summary>
		{#each locations.georgia as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>

	<details class="flow">
		<summary>New Jersey</summary>
		{#each locations.newJersey as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>

	<details class="flow">
		<summary>Kansas</summary>
		{#each locations.kansas as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>

	<details class="flow">
		<summary>Texas</summary>
		{#each locations.texas as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>

	<details class="flow">
		<summary>Florida</summary>
		{#each locations.florida as { name, phoneLink, phone, fax }}
			<ContactLocations {name} {phoneLink} {phone} {fax} />
		{/each}
	</details>
</div>

<style>
	details[open] summary {
		color: var(--accent-light);
	}

	details summary::marker {
		/* Plus */
		content: '\002b';
	}

	details[open] summary::marker {
		/* Minus */
		content: '\2212';
	}
</style>
