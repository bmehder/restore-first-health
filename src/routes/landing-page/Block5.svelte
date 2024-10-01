<script>
	import FormSparkAsync from '$lib/FormSparkAsync.svelte'
	const BOTPOISON_KEY = 'pk_a3136ac2-f7c3-4fee-8735-5285801ca731'
</script>

<section id="form" class="flow light-gray full-bleed">
	<div class="inner">
		<div class="flow">
			<h2 class="h1 balance">Ready to Bring Your Loved One Home with Confidence?</h2>
			<div class="bar"></div>
			<h3 class="h2">Let Us Take It From Here</h3>
			<p class="pretty">Our team is here to help. Fill out the form below.</p>
		</div>
	</div>
	<div class="flow">
		<FormSparkAsync botpoisonKey={BOTPOISON_KEY} />
	</div>
</section>

<style>
	section {
		max-width: 48rem;
		margin-inline: auto;
	}

	.h1,
	p {
		color: white;
		text-align: center;
	}

	.h2 {
		color: var(--secondary);
		text-align: center;
	}
</style>
