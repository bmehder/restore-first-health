<script>
	// import Youtube from '$lib/icons/Youtube.svelte'
	import Home from '$lib/icons/Home.svelte'
	import Expert from '$lib/icons/Expert.svelte'
	import Family from '$lib/icons/Family.svelte'
	import Therapy from '$lib/icons/Therapy.svelte'
</script>

<section>
	<div class="inner">
		<div class="services-grid">
			<div class="two-rows flow">
				<div>
					<p>WE GET IT</p>
					<h2 class="h1">Living with a chronic wound can be overwhelming.</h2>
				</div>
				<!-- <p class="pretty">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, a
					voluptatem!
				</p> -->
				<a href="#form" class="button">Get Help Now</a>
			</div>
			<div class="flow">
				<!-- <Youtube /> -->
				<Expert />
				<!-- <h3>Who</h3> -->
				<p>
					<strong>Restore First Health</strong> provides expert wound care in the comfort
					of the home.
				</p>
			</div>
			<div class="flow">
				<Therapy />
				<!-- <h3>What</h3> -->
				<p>
					<strong>We ensure a smooth</strong>, stress-free transition from care
					facilities with our specialized wound therapies and care coordination.
				</p>
			</div>
			<div class="flow">
				<!-- <Youtube /> -->
				<Family />
				<!-- <h3>Where</h3> -->
				<p>
					<strong>Bringing a loved one home</strong> with a wound can be scary; managing
					everything on your own is challenging. You don’t have to do this alone.
				</p>
			</div>
			<div class="flow">
				<Home />
				<!-- <Youtube /> -->
				<!-- <h3>How</h3> -->
				<p>
					<strong>We come to your home</strong>, allowing you to focus on your loved
					one while we handle the logistics of wound care, keeping you informed every
					step of the way.
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

		@media screen and (width > 64rem) {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
	}

	.two-rows {
		grid-row: span 2;
		align-self: center;
	}

	.two-rows > * + * {
		margin-top: var(--double-size);
	}
</style>
