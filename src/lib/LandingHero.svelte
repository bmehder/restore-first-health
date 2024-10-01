<script>
	export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
	<div class="inner">
		<div class="content overlay" style="--start: #003a64ee; --end: #0078a1ee;">
			<h1 class="headline balance">Advanced Mobile Wound Care</h1>
			<div class="h3 subheadline pretty">
				Personalized Care Delivered to Your Home.
			</div>
			<a href="#form" class="button">Get Help Now</a>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		padding-block-start: calc(var(--size) * 6);
		padding-block-end: calc(var(--size) * 6);
		background-position: bottom;
		background-size: cover;
		font-weight: bold;
		line-height: 1.5;
		letter-spacing: 1px;
	}

	.content {
		max-width: 32rem;
		margin-inline: var(--size);
		padding: var(--double-size);
		/* background-color: var(--secondary); */
		/* border-radius: var(--half-size); */
		/* box-shadow: 0 10px 20px 20px rgba(0, 0, 0, 0.2); */
	}

	.content > * + * {
		margin-top: var(--size);
	}

	.headline,
	.subheadline {
		/* color: var(--accent-light); */
		color: white;
	}

	a:hover {
		color: white;
	}
</style>
