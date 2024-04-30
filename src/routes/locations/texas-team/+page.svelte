<script>
	// import data from './data.js'
	import ModalCard from '$lib/ModalCard.svelte'

  export let data
</script>

<svelte:head>
  <title>Texas Team - Restore First Health</title>
  <meta
    name="description"
    content="Meet the Texas Care Team at Restore First Health."
  />
</svelte:head>

<h1 class="title">Texas Team</h1>

<section>
  <div class="items">
    {#each data.teamMembers as item}
      <ModalCard {item} />
    {/each}
  </div>
</section>
