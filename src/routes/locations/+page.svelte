<script>
	import locations from '$lib/locations'
	import Location from '$lib/Location.svelte'
	import ModalCard from '$lib/ModalCard.svelte'
	import georgiaTeam from './georgiaTeam.js'
	import newJerseyTeam from './newJerseyTeam.js'
	import pennsylvaniaTeam from './pennsylvaniaTeam.js'
	import kansasTeam from './kansasTeam.js'
	import coloradoTeam from './coloradoTeam.js'
</script>

<svelte:head>
	<title>Locations - Restore First Health</title>
	<meta
		name="description"
		content="Get information about Restore First Health Locations in Georgia, New Jersey and Pennsylvania."
	/>
</svelte:head>

<section class="flow">
	<h1 class="title">Locations</h1>

	<h2>A Specialized Medical Practice Focused on Chronic Wounds</h2>

	<p>
		Welcome to Restore First Health, a specialized medical practice focused on in-home,
		<a href="/">advanced wound care</a>. Our therapy protocols for each of patient
		utilizes a holistic approach to healing – focused on improving health through advanced
		practices in wound care.
	</p>
</section>

<div>
	<section class="flow georgia sep" id="georgia">
		<div class="inner flow">
			<h2>Georgia</h2>
			<h3>Georgia Locations</h3>
			<div class="auto-grid locations">
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
			<h3>Georgia Team</h3>
			<div class="auto-grid team">
				{#each georgiaTeam as { name, description, job, src }}
					<ModalCard {name} {job} {src} {description} />
				{/each}
			</div>
		</div>
	</section>

	<section class="flow sep jersey" id="jersey">
		<div class="inner flow">
			<h2>New Jersey</h2>
			<h3>New Jersey Locations</h3>
			<!-- <div class="half-flow italic">
				<h3>We've moved in New Jersey!</h3>
				<p>Our Cranbury office is now located in East Windsor, NJ!</p>
			</div> -->
			<div class="auto-grid locations">
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
			<h3>New Jersey Team</h3>
			<div class="auto-grid team">
				{#each newJerseyTeam as { name, description, job, src }}
					<ModalCard {name} {job} {src} {description} />
				{/each}
			</div>
		</div>
	</section>

	<section class="flow sep pennsylvania" id="pennsylvania">
		<div class="inner flow">
			<h2>Pennsylvania</h2>
			<h3>Pennsylvania Locations</h3>
			<div class="auto-grid locations">
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
			<h3>Pennsylvania Team</h3>
			<div class="auto-grid team">
				{#each pennsylvaniaTeam as { name, description, job, src }}
					<ModalCard {name} {job} {src} {description} />
				{/each}
			</div>
		</div>
	</section>

	<section class="flow sep kansas" id="kansas">
		<div class="inner flow">
			<h2>Kansas</h2>
			<h3>Kansas Locations</h3>
			<div class="auto-grid locations">
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
			<h3>Kansas Team</h3>
			<div class="auto-grid team">
				{#each kansasTeam as { name, description, job, src }}
					<ModalCard {name} {job} {src} {description} />
				{/each}
			</div>
		</div>
	</section>

	<section class="flow colorado" id="colorado">
		<div class="inner flow">
			<h2>Colorado</h2>
			<h3>Colorado Locations</h3>
			<div class="auto-grid locations">
				{#each locations.colorado as { name, address1, address2, city, mapLink, phoneLink, phone, fax }}
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
			<h3>Colorado Team</h3>
			<div class="auto-grid team">
				{#each coloradoTeam as { name, description, job, src }}
					<ModalCard {name} {job} {src} {description} />
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	@media (min-width: 42rem) {
		.locations {
			--max: 16rem;
		}

		.team {
			--max: 16rem;
		}
	}
</style>
