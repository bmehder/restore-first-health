<script>
  export let name
  export let phoneLink
  export let phone
  export let fax
</script>

<div class="half-flow">
  <h3>{name}</h3>
  {#if phone}
    <p>Phone: <a href="{phoneLink}">{phone}</a></p>
    <p>Fax: {fax}</p>
  {/if}
</div>

<style>
  div {
    padding-bottom: var(--half-size);
    border-bottom: 1px solid var(--text-color);
  }
</style>