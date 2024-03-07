<script>
  import Member from '$lib/Member.svelte'
  import teamMembers from './data'
</script>

<svelte:head>
  <title>Pennsylvania Team - Restore First Health</title>
  <meta
    name="description"
    content="Meet the Pennsylvania Care Team at Restore First Health."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">Pennsylvania Care Team</h1>

  <p>
    Our team is here to guide you through any of these treatments and work with you to
    ensure your health and well being are being prioritized.
  </p>

  <p>You deserve better health, and we are here to help you get there!</p>

  <h2>Plymouth Meeting, PA</h2>
  <ul class="flow">
    {#each teamMembers.plymouthMeeting as item}
      <Member {item} />
    {/each}
  </ul>
</section>