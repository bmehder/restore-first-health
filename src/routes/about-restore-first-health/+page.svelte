<script>
	import ModalCard from '$lib/ModalCard.svelte'
	import data from './data.js'
</script>

<svelte:head>
	<title>About Restore First Health</title>
	<meta
		name="description"
		content="Learn about Restore First Health - a specialized medical practice focused on in-home, advanced wound care."
	/>
</svelte:head>

<section class="flow">
	<h1 class="title">About Restore First Health</h1>

	<h2>A Specialized Medical Practice Focused on Chronic Wounds</h2>

	<p>
		Welcome to Restore First Health, a specialized medical practice focused on in-home,
		advanced wound care. Our therapy protocols for each of patient utilizes a holistic
		approach to healing – focused on improving health through advanced practices in wound
		care.
	</p>

	<h3>Our Story</h3>

	<div class="float-right center half-flow">
		<img src="/john-fish.jpg" alt="John Fish - CEO, Restore First Health" />
		<p><strong>John Fish, CEO</strong></p>
	</div>

	<p>
		Restore First Health started its roots in Georgia in 2017, providing care for chronic
		conditions such as knee pain relief, diabetes and chronic wounds. In 2022, RFH
		expanded it's specialized wound care program to patients in New Jersey with a keen
		focus on collaborations with home health providers and nursing home partnerships.
	</p>

	<p>
		In September of 2023, Restore First Health realigned its strategic positioning in the
		healthcare field with the expansion and sole focus on <a href="/"
			>chronic wound care</a
		> for communities across the country. Our program focuses on collaboration, communication
		and care coordination to bring the best possible outcomes for bedside wound care to our
		patients, and their adjunct providers.
	</p>

	<p>
		We partner with home health care providers, assisted living programs, hospital
		discharge planners, and families themselves to create a seamless approach to at-home
		wound care.
	</p>

	<p>
		With expansions in Georgia, New Jersey and soon to be Pennsylvania and Florida,
		Restore First Health is poised to help more patients throughout our communities get
		the collaborative care they deserve.
	</p>
</section>

<section>
	<div class="flow">
		<h2>Executive Team</h2>
		<div class="auto-grid">
			{#each data as { name, description, job, src }}
				<ModalCard {name} {job} {src} {description} />
			{/each}
		</div>
	</div>
</section>

<style>
	.float-right {
		max-width: 300px;
		margin-inline-start: var(--double-size);
	}

	@media (max-width: 49em) {
		.float-right {
			max-width: 100%;
			margin-inline-start: 0;
		}

		img {
			aspect-ratio: 1;
			object-fit: cover;
			object-position: top;
		}
	}
</style>
