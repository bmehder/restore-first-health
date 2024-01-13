<script>
  import Member from '$lib/Member.svelte'
  import teamMembers from './data'
</script>

<svelte:head>
  <title>New Jersey Care Team - Restore First Health</title>
  <meta
    name="description"
    content="Meet the New Jersey Care Team at Restore First Health."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">New Jersey Care Team</h1>

  <p>
    Our team is here to guide you through any of these treatments and work with you to
    ensure your health and well being are being prioritized.
  </p>

  <p>You deserve better health, and we are here to help you get there!</p>

  <h2>East Windsor, NJ</h2>
  <ul class="flow">
    {#each teamMembers.eastWindsor as item}
      <Member {item} />
    {/each}
  </ul>
</section>