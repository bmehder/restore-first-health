<script>
	import data from './data.js'
	import ModalCard from '$lib/ModalCard.svelte'
</script>

<svelte:head>
  <title>Kansas Team - Restore First Health</title>
  <meta
  name="description"
  content="Meet the Kansas Care Team at Restore First Health."
  />
</svelte:head>

<h1 class="title">Kansas Team</h1>

<section>
  <div class="auto-grid team">
    {#each data as { name, description, job, src }}
      <ModalCard {name} {job} {src} {description} />
    {/each}
  </div>
</section>
