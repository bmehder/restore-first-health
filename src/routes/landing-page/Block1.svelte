<script>
	import Youtube from '$lib/icons/Youtube.svelte'
</script>

<section>
	<div class="inner">
		<div class="services-grid">
			<div class="two-rows flow">
				<div>
					<p>SERVICES</p>
					<h2 class="h1">Living with a chronic wound can be overwhelming.</h2>
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
				<p>
					Restore First Health provides expert wound care in the comfort of the home.
				</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>
					We ensure a smooth, stress-free transition from care facilities with our
					specialized wound therapies and care coordination.
				</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>
					Bringing a loved one home with a wound can be scary; managing everything on
					your own is challenging. You don’t have to do this alone.
				</p>
			</div>
			<div class="flow">
				<Youtube />
				<h3>Service Name</h3>
				<p>
					We come to your home, allowing you to focus on your loved one while we
					handle the logistics of wound care, keeping you informed every step of the
					way.
				</p>
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
