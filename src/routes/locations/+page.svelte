<script>
	import locations from '$lib/locations'
	import Location from '$lib/Location.svelte'
</script>

<svelte:head>
	<title>Locations - Restore First Health</title>
	<meta
		name="description"
		content="Get information about Restore First Health Locations in Georgia, New Jersey, Pennsylvania, Kansas and Texas."
	/>
</svelte:head>

<section class="flow">
	<h1 class="title">Locations</h1>

	<h2>A Specialized Medical Practice Focused on Chronic Wounds</h2>

	<p>
		Welcome to Restore First Health, a specialized medical practice focused on
		in-home,
		<a href="/">advanced wound care</a>. Our therapy protocols for each of patient
		utilizes a holistic approach to healing – focused on improving health through
		advanced practices in wound care.
	</p>
</section>

<div>
	<section class="flow sep">
		<div class="inner flow">
			<h2>Georgia Locations</h2>
			<div class="items">
				{#each locations.georgia as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/georgia-team/">Meet the Georgia Team &raquo;</a>
			</p>
		</div>
	</section>

	<section class="flow sep">
		<div class="inner flow">
			<h2>New Jersey Locations</h2>
			<div class="items">
				{#each locations.newJersey as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/new-jersey-team/">Meet the New Jersey Team &raquo;</a>
			</p>
		</div>
	</section>

	<section class="flow sep">
		<div class="inner flow">
			<h2>Pennsylvania Locations</h2>
			<div class="items">
				{#each locations.pennsylvania as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/pennsylvania-team/">Meet the Pennsylvania Team &raquo;</a
				>
			</p>
		</div>
	</section>

	<section class="flow sep">
		<div class="inner flow">
			<h2>Kansas Locations</h2>
			<div class="items">
				{#each locations.kansas as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/kansas-team/">Meet the Kansas Team &raquo;</a>
			</p>
		</div>
	</section>

	<section class="flow sep">
		<div class="inner flow">
			<h2>Texas Locations</h2>
			<div class="items">
				{#each locations.texas as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/texas-team/">Meet the Texas Team &raquo;</a>
			</p>
		</div>
	</section>

	<section class="flow sep florida">
		<div class="inner flow">
			<div>
				<h2>Florida Locations</h2>
			</div>
			<div class="items">
				{#each locations.florida as { name, address1, address2, city, mapLink, phoneLink, phone, fax, isComingSoon }}
					<Location
						{name}
						{address1}
						{address2}
						{city}
						{mapLink}
						{phoneLink}
						{phone}
						{fax}
						{isComingSoon}
					/>
				{/each}
			</div>
			<p class="h3">
				<a href="/locations/florida-team/">Meet the Florida Team &raquo;</a>
			</p>
		</div>
	</section>
</div>
