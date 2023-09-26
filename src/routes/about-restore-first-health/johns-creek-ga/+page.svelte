<script>
  import teamMembers from './data'
  import Member from '../Member.svelte'
</script>

<svelte:head>
  <title>Johns Creek, GA Team - Restore First Health</title>
  <meta
    name="description"
    content="Meet the Johns Creek, GA team at Restore First Health. We are here to guide you through any of these treatments and work with you to ensure your health and well being are being prioritized."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">Johns Creek, GA Care Team</h1>

  <p>
    Our team is here to guide you through any of these treatments and work with you to
    ensure your health and well being are being prioritized.
  </p>

  <p>You deserve better health, and we are here to help you get there!</p>

  <ul class="flow">
    {#each teamMembers as item}
      <Member {item} />
    {/each}
  </ul>
</section>
