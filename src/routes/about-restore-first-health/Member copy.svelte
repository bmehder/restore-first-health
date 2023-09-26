<script>
  export let item

  const { src, name, job, description } = item
</script>

<li>
  {#if src}
    <img {src} alt={name} />
  {:else}
    &nbsp;
  {/if}
  <div class="flow">
    <h2 class="balance">{name}</h2>
    <h3>{job}</h3>
    <p class="flow">
      {@html description}
    </p>
  </div>
</li>

<style>
  li {
    background-color: var(--secondary);
  }

  div {
    padding: var(--size);
    padding-block-start: var(--size);
  }

  h3 {
    margin-block-start: calc(var(--half-size) / 2);
    color: var(--text-color);
  }

  img {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 48em) {
    li {
      display: grid;
      grid-template-columns: 16em 1fr;
      gap: var(--double-size);
      padding: var(--double-size);
      padding-inline-end: var(--double-size);
    }

    div {
      padding: unset;
      padding-block-start: var(--half-size);
    }

    img {
      padding: calc(var(--half-size) / 2);
      background-color: white;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.24);
      aspect-ratio: unset;
      object-position: top;
    }
  }
</style>
