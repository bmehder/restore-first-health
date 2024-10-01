<script>
	import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<section class="light-gray full-bleed">
	<div class="inner">
		<div class="heading half-flow">
			<p class="lead">TRUSTED CARE</p>
			<h2 class="h1 balance">Why Families Trust Restore First Health</h2>
		</div>
		<div class="services-grid">
			<div class="flow">
				<p>
					Restore First Health’s team consists of advanced mobile wound care
					specialists who have helped hundreds of families transition their loved
					ones home with confidence. With years of expertise and advanced technology,
					we ensure your loved one receives the best possible care.
				</p>

				<ul class="list">
					<li>Expert care delivered at home.</li>
					<li>Seamless discharge and transition support.</li>
					<li>Ongoing support for the family.</li>
					<li>Proven results: Faster recovery times and fewer treatments.</li>
				</ul>
			</div>
			<div class="featured-video">
				<Sveltetube id="7K0FCZAn1Hs" />
			</div>
		</div>
	</div>
</section>

<style>
	.heading {
		padding-block: var(--double-size);
		text-align: center;
	}

	h2 {
		color: white;
	}

	.services-grid {
		display: grid;
		gap: 1.5rem;
		/* align-items: center; */

		@media screen and (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
			gap: 4rem;
		}
	}

	li {
		text-wrap: pretty;
	}
</style>
