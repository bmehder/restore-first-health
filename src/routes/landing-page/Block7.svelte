<script>
	import Facebook from '$lib/icons/Facebook.svelte'
	import XTwitter from '$lib/icons/XTwitter.svelte'
	import Instagram from '$lib/icons/Instagram.svelte'
</script>

<section>
	<div class="inner">
		<div class="heading">
			<p class="lead">SOMETHING HERE</p>
			<h2 class="h1">Call To Action Headline</h2>
		</div>
		<div class="socials">
			<Facebook />
			<XTwitter />
			<Instagram />
		</div>
	</div>
</section>

<style>
	p {
		color: #777;
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
</style>
