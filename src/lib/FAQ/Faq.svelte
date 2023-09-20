<script>
  import Item from './Item.svelte'

  export let title
  export let data
  export let dark = '#222'
  export let light = '#eee'

  let selectedItem
</script>

<div class="faq">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <section>
    {#each data as item, index}
      <Item {item} bind:selectedItem {index} --dark={dark} --light={light} />
    {/each}
  </section>
</div>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
</style>
