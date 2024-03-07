<script>
  import { goto } from '$app/navigation'

	export let delay = 0

	let dialogElement

	const closeModal = () => dialogElement.close()

	const openModal = (elem, ms) => {
		setTimeout(() => elem.showModal(), ms)
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialogElement}
	use:openModal={delay}
	on:click|self={closeModal}
	on:keypress
>
	<div class="inner flow">
		<slot>Fallback content</slot>
		<form method="dialog" on:submit={() => goto('/locations/')}>
			<button>Learn More</button>
		</form>
	</div>
</dialog>

<style>
	dialog {
		width: min(80%, 48rem);
		padding: 0;
    animation-delay: 400ms;
    animation: slideDown 400ms;
	}

	dialog::backdrop {
		backdrop-filter: blur(3px);
	}

	dialog .inner {
		padding: var(--size);
	}

	button:is(:focus-visible) {
		background-color: var(--highlight);
		outline: none;
		color: white;
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
