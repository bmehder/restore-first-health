<script>
	import Youtube from '$lib/icons/Youtube.svelte'
</script>

<section>
	<div class="inner">
		<div class="services-grid">
			<div class="two-rows flow">
				<div>
					<p>SERVICES</p>
					<h2 class="h1">Enter Your Headline Here</h2>
				</div>
				<p class="pretty">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, a
					voluptatem!
				</p>
				<a href="/" class="button">Call to Action</a>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.services-grid {
		display: grid;
		gap: 4rem;
		place-content: center;

		@media screen and (width > 48rem) {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
	}

	.two-rows {
		grid-row: span 2;
	}

	.two-rows > * + * {
		margin-top: var(--double-size);
	}
</style>
