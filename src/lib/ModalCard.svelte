<script>
	export let item

	let dialogElement

	const showModal = () => dialogElement.showModal()
	const closeModal = () => dialogElement.close()
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={showModal} on:keydown class="card flow">
	<img
		class="square"
		src={item._embedded['wp:featuredmedia'][0].source_url}
		alt={item.title.rendered}
	/>
	<div class="half-flow content">
		<p><strong>{@html item.title.rendered}</strong></p>
		<p>{item.position}</p>
	</div>
	<button on:click={showModal}>Read More</button>
</div>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialogElement} on:click|self={closeModal} on:keypress>
	<div class="inner">
		<div class="flow">
			<img
				src={item._embedded['wp:featuredmedia'][0].source_url}
				alt={item.title.rendered}
			/>
			<h3>{@html item.title.rendered}</h3>
			<p><strong>{item.position}</strong></p>
		</div>
		<div class="flow">{@html item.content.rendered}</div>
		<form method="dialog">
			<button>X</button>
		</form>
	</div>
</dialog>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border: 1px solid var(--light);
	}

	.card img {
		cursor: pointer;
	}

	.card .content {
		padding: var(--size);
		padding-block-start: 0;
	}

	.card button {
		margin-block-start: auto;
		margin-block-end: var(--size);
	}

	.square {
		object-position: top;
	}

	dialog {
		width: min(80%, 48rem);
		padding: 0;
		border: 1px solid var(--accent);
		border-radius: 18px;
		animation-delay: 400ms;
		animation: slideDown 400ms;
	}

	dialog::backdrop {
		backdrop-filter: blur(5px);
	}

	dialog .inner {
		position: relative;
		display: grid;
		gap: var(--double-size);
		align-items: start;
		padding: var(--double-size);

		@media (min-width: 28rem) {
			grid-template-columns: 1fr 3fr;
		}
	}

	dialog form {
		position: absolute;
		top: var(--half-size);
		right: var(--half-size);
	}

	dialog form button {
		padding: var(--half-size);
		line-height: 0;
		aspect-ratio: 1;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.8;
		}
	}

	@keyframes slideDown {
		0% {
			transform: translateY(-500%);
		}
		100% {
			transform: translateY(0%);
		}
	}
</style>
