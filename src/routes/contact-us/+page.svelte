<script>
	import FormSparkAsync from '$lib/FormSparkAsync.svelte'
	import locations from '$lib/locations'
	import ContactLocations from '$lib/ContactLocations.svelte'

	const BOTPOISON_KEY = 'pk_a3136ac2-f7c3-4fee-8735-5285801ca731'
</script>

<svelte:head>
	<title>Contact Us - Restore First Health</title>
	<meta
		name="description"
		content="Contact Restore First Health to schedule a consultation or to ask any questions."
	/>
</svelte:head>

<h1 class="title">Contact Us</h1>

<div class="flex inner">
	<div style="flex: 2" class="flow">
		<h2>Let us take it from here.</h2>
		<FormSparkAsync botpoisonKey={BOTPOISON_KEY} />
	</div>
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

	@media (min-width: 52em) {
		.inner {
			gap: 6rem;
		}
	}
</style>
