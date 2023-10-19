<script>
  export let item

  const { heading, src, alt, description } = item

  let isBlurred = true

  const handleClick = () => (isBlurred = !isBlurred)
</script>

<li class="flow">
  <h3>{heading}</h3>
  <!-- TODO: Wrap in a <button> -->
  <img
    class="square"
    class:isBlurred
    {src}
    {alt}
    on:click={handleClick}
    on:keydown
  />
  <p>{description}</p>
</li>

<style>
  img {
    filter: blur(0);
    transition: filter 600ms ease;
    cursor: pointer;
  }
  .isBlurred {
    filter: blur(var(--size));
  }
</style>