<script>
	import Facebook from '$lib/icons/Facebook.svelte'
	import XTwitter from '$lib/icons/XTwitter.svelte'
	import Instagram from '$lib/icons/Instagram.svelte'
	import LinkedIn from '$lib/icons/LinkedIn.svelte'
	import Youtube from '$lib/icons/Youtube.svelte'
</script>

<section>
	<div class="inner">
		<div class="heading half-flow">
			<p class="lead">FOLLOW US</p>
			<h2 class="h1 balance">
				Your Loved One Deserves the Best Care, Right at Home
				<div class="bar"></div>
			</h2>
		</div>
		<div class="socials">
			<a href="https://www.facebook.com/RestoreFirstHealth" target="_blank">
				<Facebook />
			</a>
			<!-- <XTwitter /> -->
			<a href="https://www.instagram.com/restorefirsthealth/" target="_blank">
				<Instagram />
			</a>
			<a
				href="https://www.youtube.com/channel/UCV7KVHZbCWypAi4nsYphVIQ"
				target="_blank"
			>
				<Youtube />
			</a>
			<a
				href="https://www.linkedin.com/company/restore-first-health/"
				target="_blank"
			>
				<LinkedIn />
			</a>
		</div>
	</div>
</section>

<style>
	p {
		color: #777;
	}

	section {
		max-width: 48rem;
		margin-inline: auto;
	}

	.heading {
		padding-block: var(--double-size);
		text-align: center;
	}

	.socials {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--size);
	}

	a {
		color: var(--highlight);
	}

	a:hover {
		color: var(--accent-light);
	}
</style>
