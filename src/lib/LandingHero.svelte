<script>
	export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
	<div class="inner balance">
		<div class="content">
			<h1 class="headline">Advanced Mobile Wound Care</h1>
			<div class="h2 subheadline">Personalized Care Delivered to Your Home.</div>
			<a href="/contact-us/" class="button">Get Help Now</a>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		padding-block-start: calc(var(--size) * 6);
		padding-block-end: calc(var(--size) * 6);
		background-position: center;
		background-size: cover;
		font-weight: bold;
		line-height: 1.5;
		/* text-align: center; */
		/* text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2); */
		letter-spacing: 1px;
	}

	.content {
		max-width: 32rem;
		padding: var(--double-size);
		background-color: var(--secondary);
		border-radius: var(--half-size);
		box-shadow: 0 10px 20px 40px rgba(0, 0, 0, 0.2);
	}

	.content > * + * {
		margin-top: var(--size);
	}

	.headline,
	.subheadline {
		color: var(--accent-light);
	}
</style>
