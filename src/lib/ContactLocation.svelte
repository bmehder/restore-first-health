<script>
  export let name
  export let address1
  export let address2
  export let city
  export let mapLink
  export let phoneLink
  export let phone
</script>

<div class="half-flow bg-light locations">
  <h3>{name}</h3>
  <p>
    {address1}<br />
    {address2}<br />
    {city}<br />
    <a href="{mapLink}"
      >View Map</a
    >
  </p>
  <a class="button" href="{phoneLink}">{phone}</a>
</div>

<style>
  .locations {
    padding: var(--size);
  }

  .locations .button {
    display: block;
  }
</style>
