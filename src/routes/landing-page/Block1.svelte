<script>
	// import Youtube from '$lib/icons/Youtube.svelte'
	import Home from '$lib/icons/Home.svelte'
	import Expert from '$lib/icons/Expert.svelte'
	import Family from '$lib/icons/Family.svelte'
	import Therapy from '$lib/icons/Therapy.svelte'
</script>

<section>
	<div class="inner">
		<div class="flow">
			<div class="heading half-flow">
				<p>WE GET IT</p>
				<h2 class="h1 balance">Living with a chronic wound can be overwhelming.</h2>
			</div>
			<div class="auto-fit" style="--min: 20rem; margin-block: var(--double-size);">
				<div class="flow">
					<Expert />
					<p>
						<strong>Restore First Health</strong> provides expert wound care in the comfort
						of the home.
					</p>
				</div>
				<div class="flow">
					<Therapy />
					<p>
						<strong>We ensure a smooth</strong>, stress-free transition from care
						facilities with our specialized wound therapies and care coordination.
					</p>
				</div>
				<div class="flow">
					<Family />
					<p>
						<strong>Bringing a loved one home</strong> with a wound can be scary; managing
						everything on your own is challenging. You don’t have to do this alone.
					</p>
				</div>
				<div class="flow">
					<Home />
					<p>
						<strong>We come to your home</strong>, allowing you to focus on your
						loved one while we handle the logistics of wound care, keeping you
						informed every step of the way.
					</p>
				</div>
			</div>
		</div>
		<div class="button-wrap">
			<a href="#form" class="button">Get Help Now</a>
		</div>
	</div>
</section>

<style>
	.heading {
		text-align: center;
	}

	.heading p {
		max-width: unset;
	}

	h2 {
		text-transform: capitalize;
	}
	p {
		max-width: 65ch;
	}

	.button-wrap {
		padding-block: var(--double-size);
		text-align: center;
	}
</style>
