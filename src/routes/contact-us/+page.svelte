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
    <h2>Want to learn more about Restore First Health? Connect with Us!</h2>
    <FormSparkAsync botpoisonKey={BOTPOISON_KEY} />
  </div>
  <div class="flow">
    <h2>Call Us</h2>
     {#each locations.pennsylvania as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}

    {#each locations.georgia as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}
    
    {#each locations.newJersey as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}
    
    {#each locations.kansas as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}
    
    {#each locations.colorado as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}
    
    {#each locations.texas as { name, phoneLink, phone }}
      <ContactLocations
        {name}
        {phoneLink}
        {phone}
      />
    {/each}
  </div>
</div>

<style>
  @media (min-width: 48em) {
    .inner {
      gap: 6rem;
    }
  }
</style>
