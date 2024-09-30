<script>
	import FormSparkAsync from '$lib/FormSparkAsync.svelte'
	const BOTPOISON_KEY = 'pk_a3136ac2-f7c3-4fee-8735-5285801ca731'
</script>

<section
	id="form"
	class="flow light-gray full-bleed"
	style="--background: #f3f3f3; color: var(--text-color)"
>
	<div class="inner flow">
		<div>
			<p>CONTACT US</p>
			<h2 class="h1 balance">Ready to Bring Your Loved One Home with Confidence?</h2>
		</div>
		<p>Our team is here to help. Fill out the form below.</p>
	</div>
	<div class="flow">
		<h3 class="h2">Let Us Take It From Here</h3>
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
		text-align: center;
	}
</style>
