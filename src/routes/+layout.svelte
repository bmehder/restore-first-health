<script>
  import { page } from '$app/stores'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import Header from '$lib/Headers/Header.svelte'
  import Footer from '$lib/Footers/Footer.svelte'

  const mobileThreshold = 960
</script>

<div class="wrapper">
  <Header {mobileThreshold} />
  
  <main id="main-content" class="flow">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    width: var(--width);
    max-width: var(--max-width);
    padding-block-start: var(--double-size);
    margin-inline: auto;
    line-height: 1.5;
  }
</style>
