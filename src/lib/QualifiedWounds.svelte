<script>
	import Arrows from "$lib/icons/Arrows.svelte"
</script>

<div class="wound-qualifications">
	<div></div>
	<div class="wound-qualifications-item">Is larger than 2cm x 2cm</div>
	<div></div>
	<div class="arrow left"><Arrows /></div>
	<div></div>
	<div class="arrow right"><Arrows /></div>
	<div class="wound-qualifications-item">Is an open wound on the skin</div>
	<div class="arrow bottom"><Arrows /></div>
	<!-- <div class="wound-qualifications-item">Failure of traditional treatments over 30-days</div> -->
	<!-- <div class="wound-qualifications-item">Fails traditional treatments over 30 days</div> -->
	<div class="wound-qualifications-item">Fails treatments over 30 days</div>
</div>

<style>
  .wound-qualifications {
    margin-inline: auto;
		text-align: center;
    border-radius: var(--size);
	}
	
	.wound-qualifications-item {
		padding: 1.5rem;
		background-color: #003a64;
		color: white;
		border-radius: 0.5rem;
		text-wrap: balance;
	}

	.wound-qualifications .arrow {
		margin-block: 1.5rem;
		rotate: 90deg;
	}
	
	.wound-qualifications .left {
		display: none;
	}

	@media screen and (min-width: 32rem) {
		.wound-qualifications {
			display: grid;
			place-items: center;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1fr);
		}
		
		.wound-qualifications .left {
			display: block;
			justify-self: end;
			rotate: -45deg;
		}
		
		.wound-qualifications .right {
			justify-self: start;
			rotate: 45deg;
		}
		
		.wound-qualifications .bottom {
			rotate: 0deg;
		}
	}
</style>