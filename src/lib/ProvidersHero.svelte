<script>
	export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
	<div class="inner balance">
		<div class="flow">
			<div class="h2">Ensure Safe and Efficient Discharges to the Community</div>
			<div class="h3">
				Sub-Acute Facilities, Rehab Programs, Discharge Planners, and Social Workers
				Benefit from Care Coordination at RFH
			</div>
			<div class="h3">Reduce Workload – Improve patient outcomes</div>
			<div>
				<a class="button" href="/contact-us/">Contact Us Today</a>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		padding-block-start: calc(var(--size) * 2);
		padding-block-end: calc(var(--size) * 4);
		background-position: center;
		background-size: cover;
		color: var(--light);
		font-weight: bold;
		line-height: 1.5;
		text-align: center;
		text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
		letter-spacing: 1px;
	}
	.h2 {
		color: var(--light);
		font-size: var(--double-size);
	}
	.h3 {
		color: var(--light);
		font-size: calc(var(--size));
	}
	.button {
		display: inline-block;
		margin-block-start: var(--half-size);
		font-size: calc(var(--size) - 0.25rem);
		text-shadow: none;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
	}
	.button:hover,
	.button:focus {
		background-color: var(--accent-light);
		color: var(--light);
		outline-color: var(--light);
	}
</style>
