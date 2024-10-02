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
				<h2 class="h1 balance">Living with a chronic wound can be overwhelming</h2>
				<p class="h3 balance">Restore First Health Can Help</p>
				<p class=" balance">
					Don't delay in getting the at-home care you need for your wound.
				</p>
				<div class="bar"></div>
			</div>
			<div class="auto-fit" style="--min: 20rem; margin-block: var(--double-size);">
				<div class="item">
					<Expert />
					<p>
						<strong>Restore First Health</strong> provides advanced wound care in the
						comfort of the home.
					</p>
				</div>
				<div class="item">
					<Therapy />
					<p>
						<strong>We ensure a smooth</strong>, stress-free transition from care
						facilities with our robust wound care coordination.
					</p>
				</div>
				<div class="item">
					<Family />
					<p>
						<strong>Bringing a loved one home</strong> with a wound can be scary; let
						us help you manage scheduling a consult and ensuring the right plan is in
						place. You don’t have to do this alone.
					</p>
				</div>
				<div class="item">
					<Home />
					<p>
						<strong>We come to your home</strong>, allowing you to focus on you or
						your loved one while we handle the logistics of wound care, keeping you
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
		max-width: 48rem;
		margin-inline: auto;
		text-transform: capitalize;
	}

	.h3 {
		font-weight: 500;
		font-size: larger;
	}

	p {
		max-width: 65ch;
		text-wrap: pretty;
	}

	.item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--size);
	}

	.button-wrap {
		padding-block: var(--size);
		text-align: center;
	}
</style>
