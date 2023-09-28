<script>
  import locations from '$lib/locations'
  import Location from '$lib/ContactLocation.svelte'
</script>

<svelte:head>
  <title>Contact Us - Restore First Health</title>
  <meta
    name="description"
    content="Contact Restore First Health to schedule a consultation or to ask any questions."
  />
</svelte:head>

<h1 class="title">Contact Us</h1>

<p>Call us with any questions or to schedule a consultation.</p>

<div class="flow">
  <section class="flow">
    <div class="inner flow">
      <h2>Georgia Locations</h2>
      <div class="auto-grid">
        {#each locations.georgia as { name, address1, address2, city, mapLink, phoneLink, phone, teamURL }}
          <Location
            {name}
            {address1}
            {address2}
            {city}
            {mapLink}
            {phoneLink}
            {phone}
            {teamURL}
          />
        {/each}
      </div>
    </div>
  </section>

  <section class="flow jersey">
    <h2>New Jersey Locations</h2>
    <div class="auto-grid">
      {#each locations.newJersey as { name, address1, address2, city, mapLink, phoneLink, phone, teamURL }}
        <Location
          {name}
          {address1}
          {address2}
          {city}
          {mapLink}
          {phoneLink}
          {phone}
          {teamURL}
        />
      {/each}
    </div>
  </section>
</div>

<style>
  @media (min-width: 52em) {
    .jersey {
      max-width: 17.5em;
    }
  }
</style>