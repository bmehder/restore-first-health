<script>
  import '@fontsource-variable/nunito-sans'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import { page } from '$app/stores'
  import Header from '$lib/Headers/Header.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
  import Notice from '$lib/Notice.svelte'
	import NewHero from '$lib/NewHero.svelte'
  import Modal from '$lib/Modal.svelte'
  import ViewTransition from '$lib/ViewTransition.svelte'

  export let data

  const mobileThreshold = 1180
</script>

<svelte:head>
  <script
    defer
    data-domain="restorefirsthealth.com"
    src="https://plausible.io/js/script.js"
  ></script>

  <meta
    name="google-site-verification"
    content="z9Ar6P1i0M4D3658ZhmtcgEa1Lb3qHKidFGHVfQe9NA"
  />
</svelte:head>

<ViewTransition />

<Notice />

<div class="wrapper">
  <Header {mobileThreshold} />
  
  {#if $page.route.id === '/'}
    <NewHero image="/hero-1.jpg" />
  {/if}

  <main id="main-content" class="flow">
    <slot />
  </main>

  <Footer />
</div>

<BackToTop />

{#if !data.rfhModal}
  <Modal delay="2000">
    <h2>Restore First Health Now Seeing Patients in Colorado and Kansas!</h2>
    <p class="h3">
      Formerly Restore Wound and Restore Medical Group NOW Join Restore First Health: Advanced Care for Chronic Wounds.
    </p>
  </Modal>
{/if}

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
