<script>
  export let item

  const { src, name, job, description } = item
</script>

<li>
  <div>
    <div class="flow">
    <h2 class="balance">{name}</h2>
    <h3>{job}</h3>
    {#if src}
      <img class="float-right square" {src} alt={name} />
    {:else}
      &nbsp;
    {/if}
      {@html description}
    </div>
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

  div div {
    display: flow-root;
  }

  h3 {
    margin-block-start: calc(var(--half-size) / 2);
    color: var(--text-color);
  }

  img {
    /* max-width: 16em; */
    object-position: top;
  }

  @media (min-width: 48em) {
    li {
      padding: var(--double-size);
      padding-inline-end: var(--double-size);
    }

    div {
      padding: unset;
    }

    img {
      padding: calc(var(--half-size) / 2);
      background-color: white;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.24);
      /* aspect-ratio: unset;
      object-position: top; */
    }
  }
</style>
