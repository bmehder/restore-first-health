<script>
  import { page } from '$app/stores'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import Header from '$lib/Headers/Header.svelte'
  import HomeHero from './HomeHero.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'

  const mobileThreshold = 960
</script>

<div class="wrapper">
  <Header {mobileThreshold} />

  {#if $page.route.id === '/'}
    <HomeHero image="/hero.jpg" />
  {/if}
  
  <main id="main-content" class="flow">
    <slot />
  </main>
  
  <Footer />
</div>

<BackToTop />

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
