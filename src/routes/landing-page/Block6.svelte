<script>
	import Faq from '$lib/FAQ.svelte'
	import CaretDown from '$lib/icons/CaretDown.svelte'
	import CaretRight from '$lib/icons/CaretRight.svelte'

	export let faqs

	let isOpen = false

	const handleClick = () => (isOpen = !isOpen)
</script>

<section>
	<div class="inner">
		<div class="heading half-flow">
			<p class="lead">FAQ</p>
			<h2 class="h1">Frequently Asked Questions</h2>
		</div>
		<!-- <div class="services-grid">
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
			<div class="faq">
				<div class="number">1</div>
				<div class="flow">
					<h3>Lorem ipsum dolor sit amet consectetur.</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, eveniet!
						Illo, error?
					</p>
				</div>
			</div>
		</div> -->
		<div class="services-grid">
			{#each faqs as { question, answer }}
				<Faq
					{question}
					{answer}
					openIcon={CaretRight}
					closeIcon={CaretDown}
					{isOpen}
				/>
			{/each}
		</div>
		<div class="button-wrapper">
			<a href="#form" class="button">Get Help Now</a>
		</div>
	</div>
</section>

<style>
	p {
		color: #777;
	}

	.heading {
		padding-block: var(--double-size);
		text-align: center;
	}

	.services-grid {
		max-width: 48rem;
		margin-inline: auto;
		display: grid;
		gap: var(--size);
	}

	.button-wrapper {
		margin-block-start: var(--double-size);
		margin-inline: auto;
		text-align: center;
	}
</style>
