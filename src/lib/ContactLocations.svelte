<script>
  export let name
  export let phoneLink
  export let phone
</script>

<div class="half-flow">
  <h3>{name}</h3>
  {#if phone}
    <p><a href="{phoneLink}">{phone}</a></p>
  {/if}
</div>

<style>
  div {
    padding-bottom: var(--half-size);
    border-bottom: 1px solid var(--text-color);
  }
</style>