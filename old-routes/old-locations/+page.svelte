<script>
	import locations from '$lib/locations'
	import Location from '$lib/Location.svelte'
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

<div class="columns-wrap">
  <aside class="flow">
    <h3>Locations by State:</h3>
    <ul class="list">
      <li><a href="#georgia">Georgia</a></li>
      <li><a href="#jersey">New Jersey</a></li>
      <li><a href="#pennsylvania">Pennsylvania</a></li>
    </ul>
  </aside>

	<div>
    <section class="flow" id="georgia">
      <div class="inner flow">
        <h2>Georgia Locations</h2>
        <div class="auto-grid">
          {#each locations.georgia as { name, address1, address2, city, mapLink, phoneLink, phone }}
            <Location {name} {address1} {address2} {city} {mapLink} {phoneLink} {phone} />
          {/each}
        </div>
        <p class="h3">
          <a href="/locations/georgia-team/">Meet the Georgia Team &raquo;</a>
        </p>
      </div>
    </section>
    <section class="flow jersey" id="jersey">
      <div class="inner flow">
        <h2>New Jersey Locations</h2>
        <div class="half-flow italic">
          <h3>We've moved in New Jersey!</h3>
          <p>Our Cranbury office is now located in East Windsor, NJ!</p>
        </div>
        <div class="auto-grid">
          {#each locations.newJersey as { name, address1, address2, city, mapLink, phoneLink, phone }}
            <Location {name} {address1} {address2} {city} {mapLink} {phoneLink} {phone} />
          {/each}
        </div>
        <p class="h3">
          <a href="/locations/new-jersey-team/">Meet the New Jersey Team &raquo;</a>
        </p>
      </div>
    </section>
    <section class="flow pennsylvania" id="pennsylvania">
      <div class="inner flow">
        <h2>Pennsylvania Locations</h2>
        <div class="auto-grid">
          {#each locations.pennsylvania as { name, address1, address2, city, mapLink, phoneLink, phone }}
            <Location {name} {address1} {address2} {city} {mapLink} {phoneLink} {phone} />
          {/each}
        </div>
        <p class="h3">
          <a href="/locations/pennsylvania-team/">Meet the Pennsylvania Team &raquo;</a>
        </p>
      </div>
    </section>
  </div>
</div>

<style>
	/* @media (min-width: 52em) {
		.jersey {
			max-width: 38em;
		}
	} */

	@media (min-width: 48em) {
		.pennsylvania {
			max-width: 17.5em;
		}
	}

  aside {
    padding: var(--size);
    border: 1px solid var(--accent-light);
  }
	
  @media (min-width: 48em) {
    .columns-wrap {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: var(--double-size);
		}

    aside {
      margin-block-end: var(--double-size);
    }
	}
</style>
