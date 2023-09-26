<script>
  export let name
  export let address1
  export let address2
  export let city
  export let mapLink
  export let phoneLink
  export let phone
  export let teamURL
</script>

<div class="half-flow bg-light">
  <h3>{name}</h3>
  <p>
    {address1}<br />
    {address2}<br />
    {city}<br />
    <a href="{mapLink}"
      >View Map</a
    ><br />
    <a href="{phoneLink}">{phone}</a>
  </p>
  <a href="{teamURL}" class="button">Meet the Team</a>
</div>

<style>
  div {
    padding: var(--size);
  }
</style>