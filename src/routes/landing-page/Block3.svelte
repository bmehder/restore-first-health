<section>
	<div class="inner">
		<div class="heading">
			<p class="lead">STEPS</p>
			<h2 class="h1">How It Works</h2>
		</div>
		<div class="services-grid flow">
			<div class="step">
				<div class="number">
					<div>1</div>
					<p>Step</p>
				</div>
				<div class="content flow">
					<h3>Step Headline</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit.
					</p>
				</div>
			</div>
			<div class="step">
				<div class="number">
					<div>2</div>
					<p>Step</p>
				</div>
				<div class="content flow">
					<h3>Step Headline</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit.
					</p>
				</div>
			</div>
			<div class="step">
				<div class="number">
					<div>3</div>
					<p>Step</p>
				</div>
				<div class="content flow">
					<h3>Step Headline</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit.
					</p>
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
		max-width: 48rem;
		margin-inline: auto;
	}

	.step {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 8ch 1fr;
		gap: var(--size);
	}

	.number {
		display: grid;
		align-content: start;
		justify-items: center;
	}

	.number div {
		display: grid;
		place-content: center;
		justify-items: center;
		width: 70px;
		height: 70px;
		background-color: var(--highlight);
		color: var(--light);
		font-size: var(--size);
		border-radius: 50%;
	}

	.content {
		padding: var(--double-size);
		background-color: var(--light);
	}
</style>
