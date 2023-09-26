<script>
  export let data

  const startDate = x =>
    new Date(data.events[x]._bd_events_datetime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })

  const sortDescByDate = (a, b) =>
    new Date(b._bd_events_datetime) - new Date(a._bd_events_datetime)

  const events = data.events.sort(sortDescByDate)
</script>

<svelte:head>
  <title>Events - Restore First Health</title>
  <meta
    name="description"
    content="Find information about events hosted by Restore First Health."
  />
</svelte:head>

<section class="flow">
  <h1 class="title">Events</h1>

  <div class="auto-grid">
    {#each events as event, idx}
      <article class="flow">
        {#if event._embedded?.['wp:featuredmedia']?.[0]}
          <a href="/events/{event.slug}">
            <img
              class="square"
              src={event._embedded?.['wp:featuredmedia']?.[0].source_url}
              alt={event.title.rendered}
            />
          </a>
        {/if}
        <div class="flow">
          <h2><a href="/events/{event.slug}">{@html event.title.rendered}</a></h2>
          <p>
            <a class="date" href="/events/{event.slug}">
              <time>{startDate(idx)}</time><br />
            </a>
          </p>
          <div>{@html event.excerpt.rendered}</div>
        </div>
        <a href="/events/{event.slug}" class="button">Read More</a>
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

  .date {
    color: var(--text-color);
    font-size: var(--size);
    font-weight: bold;
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
