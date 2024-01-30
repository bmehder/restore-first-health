<script>
	import Arrows from "$lib/icons/Arrows.svelte"
</script>

<div class="container">
	<div class="wound-qualifications">
		<!-- 1 -->
		<div></div>

		<!-- 2 -->
		<div class="item">
			Is larger than 2cm x 2cm
		</div>

		<!-- 3 -->
		<div></div>

		<!-- 4 -->
		<div class="arrow left">
			<Arrows />
		</div>

		<!-- 5 -->
		<div></div>

		<!-- 6 -->
		<div class="arrow right">
			<Arrows />
		</div>

		<!-- 7 -->
		<div class="item">
			Is an open wound on the skin
		</div>

		<!-- 8 -->
		<div class="arrow bottom">
			<Arrows />
		</div>

		<!-- 9 -->
		<div class="item">
			Fails treatments over 30 days
		</div>
	</div>
</div>


<style>
  .wound-qualifications {
		text-align: center;
    border-radius: var(--size);
		text-wrap: balance;
	}
	
	.wound-qualifications .item {
		display: grid;
		place-content: center;
		padding: 1.5rem;
		background-color: var(--accent);
		color: white;
		border-radius: 0.5rem;
	}

	.wound-qualifications .arrow {
		margin-block: 1.5rem;
		line-height: 0;
		rotate: 90deg;
	}
	
	.wound-qualifications .left {
		display: none;
	}

	@container (min-width: 24rem) {
		.wound-qualifications {
			display: grid;
			place-content: center;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1fr);
		}
		
		.wound-qualifications .left {
			display: block; /* hidden on mobile */
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