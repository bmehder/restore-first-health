<script>
  export let data

  const date = new Date(data.post[0].date).toLocaleDateString('en-US', {
    dateStyle: 'full',
  })
</script>
<!-- 
<details>
  <pre>{JSON.stringify(data.post, null, 2)}</pre>
</details> -->

<section>
  <article class="flow">
    <h1>{@html data.post[0].title.rendered}</h1>
    <p>Published on: {date}</p>
    <img
      class="square"
      src={data.post[0]._embedded['wp:featuredmedia'][0].source_url}
      alt=""
    />
    <div>{@html data.post[0].content.rendered}</div>
  </article>
</section>

<style>
  article {
    max-width: 42em;
  }

  article div :global(> * + *) {
    margin-block-start: var(--size);
  }

  article div :global(figure) {
    display: none;
  }
</style>
