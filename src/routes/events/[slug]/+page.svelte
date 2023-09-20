<script>
  export let data

  // const date = new Date(data.post[0].date).toLocaleDateString('en-US', {
  //   dateStyle: 'full',
  // })
</script>

<!-- <details>
  <pre>{JSON.stringify(data.event, null, 2)}</pre>
</details> -->

<section>
  <article class="flex swap">
    <img
      class="square"
      src={data.event[0]._embedded['wp:featuredmedia'][0].source_url}
      alt={data.event[0].title.rendered}
    />
    <div class="flow">
      <h1>{@html data.event[0].title.rendered}</h1>
      <div class="flow">{@html data.event[0].content.rendered}</div>
    </div>
  </article>
</section>

<!-- <style>
  article div :global(> * + *) {
    margin-block-start: var(--size);
  }
</style> -->
