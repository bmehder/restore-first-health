<script>
  export let data
</script>

<h1 class="title">Blog</h1>

<details>
  <summary>JSON Response</summary>
  <pre>
    {JSON.stringify(data.posts, null, 2)}
  </pre>
</details>

<section>
  <div class="auto-grid">
    {#each data.posts as post}
      <article class="flow">
        {#if post._embedded['wp:featuredmedia']?.[0]}
          <a href="/blog/{post.slug}">
            <img
              class="square"
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
            />
          </a>
        {/if}
        <div class="flow">
          <h2><a href="/blog/{post.slug}">{@html post.title.rendered}</a></h2>
          <div>{@html post.excerpt.rendered}</div>
        </div>
        <a href="/blog/{post.slug}" class="button">Read More</a>
      </article>
    {/each}
  </div>
</section>

<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: var(--double-size);
    border: 1px solid #ddd;
    box-shadow: var(--shadow);
  }

  h2 a {
    color: var(--accent-light);
  }

  article > div {
    padding-block-start: var(--size);
    padding-inline: var(--double-size);
    margin-block-end: auto;
  }

  article div div :global(> * + *) {
    margin-block-start: var(--size);
  }

  .button {
    margin-inline: var(--double-size);
  }

  @media (min-width: 48em) {
    .auto-grid {
      --min: 20em;
    }
  }
</style>
