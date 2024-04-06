<script>
  export let data

  const date = new Date(data.post[0].date).toLocaleDateString('en-US', {
    dateStyle: 'full',
  })
</script>

<svelte:head>
  <title>{data?.post[0].yoast_head_json.og_title}</title>
  <meta name="description" content="{data?.post[0].yoast_head_json.og_description}"/>
</svelte:head>

<section>
  <article class="flow">
    <h1 class="title">{@html data.post[0].title.rendered}</h1>
    <p>{date}</p>
    {#if data.post[0]._embedded['wp:featuredmedia']?.[0]}
    <img
      class="wide"
      src={data.post[0]._embedded['wp:featuredmedia'][0].source_url}
      alt="{data.post[0].title.rendered}"
    />
    {/if}
    <div>{@html data.post[0].content.rendered}</div>
  </article>
</section>

<style>
  article {
    max-width: 42em;
  }

  article .wide {
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  article div :global(> * + *) {
    margin-block-start: var(--size);
  }

  article div :global(figure) {
    display: none;
  }
  
  article div :global(ul) {
    list-style: initial;
    padding-inline-start: calc(var(--size) * 1.5);
  }
/*   
  article div :global(li) {
    padding-block: calc(var(--half-size) / 2);
  } */
  
  article div :global(.pull-quote) {
    padding: calc(var(--size) * 1.5);
    background-color: var(--secondary);
    font-style: italic;
    font-size: larger;
    border-radius: 2px;
    /* box-shadow: var(--shadow); */
    color: var(--accent);
  }
</style>
