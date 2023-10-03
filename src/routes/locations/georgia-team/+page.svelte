<script>
  import Member from '$lib/Member.svelte'
  import teamMembers from './data'
</script>

<svelte:head>
  <title>Georgia Care Team - Restore First Health</title>
  <meta
    name="description"
    content="Meet the Georgia Team at Restore First Health."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">Georgia Care Team</h1>

  <p>
    Our team is here to guide you through any of these treatments and work with you to
    ensure your health and well being are being prioritized.
  </p>

  <p>You deserve better health, and we are here to help you get there!</p>

  <h2>Executive Team</h2>
  <ul class="flow">
    {#each teamMembers.executive as item}
      <Member {item} />
    {/each}
  </ul>

  <hr />

  <h2>Johns Creek, GA</h2>
  <ul class="flow">
    {#each teamMembers.johnsCreek as item}
      <Member {item} />
    {/each}
  </ul>

  <hr />

  <h2>Decatur, GA</h2>
  <ul class="flow">
    {#each teamMembers.decatur as item}
      <Member {item} />
    {/each}
  </ul>

  <hr />

  <h2>Marietta, GA</h2>
  <ul class="flow">
    {#each teamMembers.marietta as item}
      <Member {item} />
    {/each}
  </ul>

  <hr />

  <h2>Riverdale, GA</h2>
  <ul class="flow">
    {#each teamMembers.riverdale as item}
      <Member {item} />
    {/each}
  </ul>
</section>
