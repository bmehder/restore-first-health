<svelte:head>
	<script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
</svelte:head>

<script>
	export let icons = []
	
	let isActive = false
	
	const length = icons.length
	const handleEvent = () => isActive = !isActive
</script>

<div class:isActive>
	<button on:click={handleEvent}>
		<ion-icon name="share" />
		<ion-icon name="close" />
	</button>
	{#each icons as { color, href, name }, idx}
		<span style="--idx:{idx}; --color:{color}; --length:{length}">
			<a {href} target="_blank">
				<ion-icon {name} />
			</a>
		</span>
	{/each}
</div>

<style>
	div {
		position: relative;
		width: var(--size, 220px);
		height: var(--size, 220px);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		all: unset;
		position: relative;
		width: calc(var(--size) / 2 - 1rem);
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 3em;
		border: 1px solid rgba(255,255,255,0.1);
		border-radius: 50%;
		box-shadow: 0 25px 15px rgba(0,0,0,0.25),
			0 25px 20px rgba(0,0,0,0.1);
		cursor: pointer;
		backdrop-filter: blur(10px);
		z-index: 2;

		& ion-icon:nth-child(1) {
			opacity: 1;
			transform: rotate(360deg);
		}
	
		& ion-icon:nth-child(2) {
			opacity: 0;
			transform: rotate(0deg);
		}
	}

	ion-icon {
		position: absolute;
		color: white;
		transition: 0.5s;
	}
	
	span {
		position: absolute;
		left: 0;
		border-radius: 50%;
		transform: rotate(calc(360deg / var(--length) * var(--idx)));
		transform-origin: calc(var(--size) / 2);
		transition: 0.5s;
		transition-delay: calc(0.05s * var(--idx));
		scale: 0;
		z-index: 1;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -20%;
			width: 20%;
			height: 100%;
			color: #fff;
			box-shadow: -5px 0 0 rgba(255, 255, 255, 0.8);
			transform: skewX(325deg) translateX(0);
			filter: blur(10px);
			transition: 0.5s;
			z-index: 10;
		}

		&:hover::before {
			transform: skewX(325deg) translateX(180px);
			box-shadow: -50px 0 0 #fff5;
		}

		& a {
			width: 80px;
			height: 80px;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			background: var(--color);
			color: white;
			font-size: 2.5em;
			border-radius: 50%;
			box-shadow: 0 2px 4px rgba(0,0,0,0.15);
			transform: rotate(calc(360deg / -4 * var(--idx)));
		}
	}

	.isActive  {
		& button ion-icon {
			transform: rotate(360deg);
		}

		& button ion-icon:nth-child(1) {
			opacity: 0;
		}

		& button ion-icon:nth-child(2) {
			opacity: 1;
		}

		& span {
			scale: 1;
		}
	}
</style>
