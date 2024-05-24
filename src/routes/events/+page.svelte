<script>
  export let data

  console.log(data.events)

  const getStartDate = x =>
    new Date(data.events[x]._bd_events_datetime).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })

  const getEndDate = x =>
    new Date(data.events[x]._bd_events_datetime_end).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })

  const today = new Date()

  const sortDescByDate = (a, b) =>
    new Date(b._bd_events_datetime) - new Date(a._bd_events_datetime)

  const upcomingEvents = [...data.events]
    .sort(sortDescByDate)
    .filter(x => new Date(x._bd_events_datetime_end) >= today)

  const pastEvents = [...data.events]
    .sort(sortDescByDate)
    .filter(x => new Date(x._bd_events_datetime_end || x._bd_events_datetime) < today)

  $: if (pastEvents.length > 6) pastEvents.length = 6
</script>

<svelte:head>
  <title>Events - Restore First Health</title>
  <meta
    name="description"
    content="Find information about events hosted by Restore First Health."
  />
</svelte:head>

<h1 class="title">Events</h1>

<section class="flow">
  <h2>Upcoming Events</h2>

  {#if upcomingEvents.length > 0}
    <div class="auto-grid">
      {#each upcomingEvents as event, idx}
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
                <time>{getStartDate(idx)}</time><br />
                {#if event._bd_events_datetime_end}
                  <small>to</small><br />
                  <time>{getEndDate(idx)}</time>
                {/if}
              </a>
            </p>
            <div>{@html event.excerpt.rendered}</div>
          </div>
          <a href="/events/{event.slug}" class="button">Read More</a>
        </article>
      {/each}
    </div>
  {:else}
    <h3>No upcommimg events</h3>
  {/if}
</section>

<!-- <hr /> -->

<!-- <section class="flow">
  <h2>Past Events</h2>

  {#if pastEvents.length > 0}
    <div class="auto-grid">
      {#each pastEvents as event, idx}
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
                <time>{getStartDate(idx)}</time><br />
                {#if event._bd_events_datetime_end}
                  <small>to</small><br />
                  <time>{getEndDate(idx)}</time>
                {/if}
              </a>
            </p>
            <div>{@html event.excerpt.rendered}</div>
          </div>
          <a href="/events/{event.slug}" class="button">Read More</a>
        </article>
      {/each}
    </div>
  {:else}
    <h3>No past events</h3>
  {/if}
</section> -->

<style>
  section {
    padding-block-end: var(--double-size);
  }
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
