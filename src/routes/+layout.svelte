<script>
	import '@fontsource-variable/nunito-sans'
	import '$lib/styles/app.css'
	import '$lib/styles/theme.css'
	import { page } from '$app/stores'
	import Analytics from '$lib/Analytics.svelte'
	import Header from '$lib/Headers/Header.svelte'
	import Footer from '$lib/Footers/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'
	// import Notice from '$lib/Notice.svelte'
	import HomeHero from '$lib/HomeHero.svelte'
	import LandingHero from '$lib/LandingHero.svelte'
	import ProvidersHero from '$lib/ProvidersHero.svelte'
	// import Modal from '$lib/Modal.svelte'
	import ViewTransition from '$lib/ViewTransition.svelte'

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

<Analytics />

<ViewTransition />

<!-- <Notice>
	<p>
		<a href="/access-to-advanced-wound-care-at-the-bedside-expands-across-us"
			>Restore Wound Care is now Restore First Health!</a
		>
	</p>
</Notice> -->

<div class="wrapper">
	<Header {mobileThreshold} />

	{#if $page.route.id === '/'}
		<HomeHero image="/hero-1.jpg" />
	{/if}

	{#if $page.route.id === '/advanced-mobile-wound-care'}
		<LandingHero image="/advanced-mobile-wound-care-hero-2.jpg" />
	{/if}

	{#if $page.route.id === '/about-restore-first-health/for-providers-community-partners'}
		<ProvidersHero image="/hero-1.jpg" />
	{/if}

	<main id="main-content" class="flow">
		<slot />
	</main>

	<Footer />
</div>

<BackToTop />

<!-- {#if !data.rfhModal}
	<Modal delay="2000">
		<img
			style="max-width: 32rem;"
			src="/rwc-rfh-merge.jpg"
			alt="Restore Wound Care is now Restore First Health"
		/>
	</Modal>
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
