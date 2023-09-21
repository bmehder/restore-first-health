<script>
  export let data
</script>

<details>
  <pre>{JSON.stringify(data.event, null, 2)}</pre>
</details>

<section>
  <article class="flex">
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
