<script>
  import '@fontsource-variable/nunito-sans'
  import '$lib/styles/app.css'
  import '$lib/styles/theme.css'
  import { page } from '$app/stores'
  import Header from '$lib/Headers/Header.svelte'
  import HomeHero from '$lib/HomeHero.svelte'
  import Footer from '$lib/Footers/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
  import Notice from '$lib/Notice.svelte'
	import NewHero from '$lib/NewHero.svelte'
  // import Popover from '$lib/Popover.svelte'

  // export let data

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

<Notice />

<div class="wrapper">
  <Header {mobileThreshold} />

  {#if $page.route.id === '/'}
    <HomeHero image="/hero-1.jpg" />
  {/if}
  
  {#if $page.route.id === '/dev'}
    <NewHero image="/hero-1.jpg" />
  {/if}

  <main id="main-content" class="flow">
    <slot />
  </main>

  <Footer />
</div>

<BackToTop />

<!-- {#if !data.rfhPopup}
  <Popover delay="2000">
    <h2>My content</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nam dignissimos
      asperiores, neque eaque sequi pariatur ex blanditiis accusantium iusto eveniet dolor
      nihil molestias autem soluta dicta doloribus eius voluptates officia rerum placeat
      mollitia deleniti ab facilis? Quam mollitia exercitationem officia, perspiciatis
      nihil iste fugiat eum tenetur nemo debitis magni.
    </p>
  </Popover>
{/if} -->

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
