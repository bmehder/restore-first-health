<script>
	import Youtube from '$lib/icons/Youtube.svelte'
	import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<section>
	<div class="inner">
		<div class="heading">
			<p class="lead">FEATURES</p>
			<h2 class="h1">Our Features</h2>
		</div>
		<div class="services-grid">
			<div class="featured-video" style="color: white;">
				Tall Video
				<!-- <Sveltetube id="7K0FCZAn1Hs" /> -->
			</div>
			<div class="flow">
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
			</div>

			<div class="flow">
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
				<div class="feature">
					<Youtube />
					<div class="half-flow">
						<h3>Feature Name</h3>
						<p>Lorem ipsum</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.heading {
		padding-block: var(--double-size);
		text-align: center;
	}

	.services-grid {
		display: grid;
		gap: 1.5rem;
		align-items: center;

		@media screen and (width > 48rem) {
			grid-template-columns: repeat(3, 1fr);
			gap: 4rem;
		}
	}

	.feature {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	.featured-video {
		align-self: center;
		min-height: 400px;
		background-color: black;
	}
</style>
