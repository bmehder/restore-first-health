<section>
	<div class="inner">
		<div class="heading">
			<p class="lead">STEPS</p>
			<h2 class="h1">How We Make It Easy for You</h2>
		</div>
		<div class="services-grid flow">
			<div class="step">
				<div class="number">
					<div>1</div>
					<!-- <p>Step</p> -->
				</div>
				<div class="content flow">
					<h3>Get in Touch:</h3>
					<p>Fill out the form below or give us a call to start the process.</p>
				</div>
			</div>
			<div class="step">
				<div class="number">
					<div>2</div>
					<!-- <p>Step</p> -->
				</div>
				<div class="content flow">
					<h3>We Assess Your Needs:</h3>
					<p>
						A care coordinator works with you to understand the patient’s needs,
						current condition, and the best approach for healing.
					</p>
				</div>
			</div>
			<div class="step">
				<div class="number">
					<div>3</div>
					<!-- <p>Step</p> -->
				</div>
				<div class="content flow">
					<h3>Seamless Transition:</h3>
					<p>
						We collaborate with your hospital, rehab, or nursing facility to plan the
						best transition home.
					</p>
				</div>
			</div>
			<div class="step">
				<div class="number">
					<div>4</div>
					<!-- <p>Step</p> -->
				</div>
				<div class="content flow">
					<h3>Ongoing Support:</h3>
					<p>
						We visit your loved one wherever they call home, providing advanced care
						and regular updates to you and their healthcare providers.
					</p>
				</div>
			</div>
		</div>
		<div class="button-wrapper">
			<a href="/locations" class="button">Find a Location</a>
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
		@media (width > 48rem) {
			grid-template-columns: 8ch 1fr;
			gap: var(--size);
		}
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
		background-color: #f6f6f6;
	}

	.button-wrapper {
		margin-block-start: var(--double-size);
		margin-inline: auto;
		text-align: center;
	}
</style>
