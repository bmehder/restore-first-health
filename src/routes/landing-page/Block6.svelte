<section>
	<div class="inner">
		<div class="heading">
			<p class="lead">FAQ</p>
			<h2 class="h1">Frequently Asked Questions</h2>
		</div>
		<div class="services-grid">
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
		display: grid;
		gap: var(--double-size);

		@media screen and (width > 48rem) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.faq {
		display: grid;
		grid-template-columns: 8ch 1fr;
	}

	.number {
		align-self: self-start;
		width: 50px;
		height: 50px;
		display: grid;
		place-items: center;
		background-color: var(--highlight);
		color: var(--light);
		border-radius: 50%;
	}
</style>
