<script>
  export let data

  const startDate = new Date(data.event[0]._bd_events_datetime).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }
  )

  const endDate = new Date(data.event[0]._bd_events_datetime_end).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }
  )
</script>

<svelte:head>
  {#if data?.event[0]?.yoast_head_json}
    <title>{data.event[0].title.rendered} - Restore First Health</title>
    <meta name="description" content="{data.event[0].yoast_head_json.description}"/>
  {/if}
</svelte:head>

<h1 class="title">
  {@html data.event[0].title.rendered}
</h1>

<section>
  <article class="flex">
    {#if data.event[0]._embedded?.['wp:featuredmedia']?.[0].source_url}
    <img
      style="flex: 1"
      class="square"
      src={data.event[0]._embedded?.['wp:featuredmedia']?.[0].source_url}
      alt={data.event[0].title.rendered}
    />
    {/if}
    <div class="flow" style="flex: 2">
      <p class="h3">
        <time>{startDate}</time>
        {#if data.event[0]._bd_events_datetime_end}
          – <time>{endDate}</time>
        {/if}
      </p>
      <div>
        {#if data.event[0]._bd_events_located_at}
          <strong>{data.event[0]._bd_events_located_at}</strong><br />
        {/if}
        {data.event[0]._bd_events_address}<br />
        {#if data.event[0]._bd_events_address_2}
          {data.event[0]._bd_events_address_2}<br />
        {/if}
        {data.event[0]._bd_events_city}, {data.event[0]._bd_events_state}
        {data.event[0]._bd_events_zip}<br />
      </div>
      <div class="flow">{@html data.event[0].content.rendered}</div>
    </div>
  </article>
</section>
