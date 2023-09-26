<script>
  export let data
</script>

<svelte:head>
  <title>Policies and Disclosures - Restore First Health</title>
  <meta
    name="description"
    content="Find information about Policies and Disclosures for the Restore First Health website."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">Policies and Disclosures</h1>

  <div class="flow">{@html data.page[0].content.rendered}</div>
</section>

<style>
  section div :global(div),
  section div :global(p) {
    margin-block-start: var(--size);
  }
  
  section div :global(li) {
    margin-block-start: var(--size);
    margin-inline-start: calc(var(--size) * 1.5);
    list-style: initial;
  }
</style>