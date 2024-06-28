<script>
	import { fly } from 'svelte/transition'
	import { onDestroy } from 'svelte'
	import { ArrowBackCircleOutline, ArrowForwardCircleOutline } from 'svelte-ionicons'

	export let quotes = []
	export let autoplay = false
	export let delay = 12000

	let index = 0
	let direction = null
	let intervalId = null

	const transitions = {
		forward: {
			in: { x: -200, delay: 300 },
			out: { x: 200, duration: 250, delay: 0 },
		},
		reverse: {
			in: { x: 200, delay: 300 },
			out: { x: -200, duration: 250, delay: 0 },
		},
	}

	const nextQuote = x => {
		if (x === 'prev') {
			direction = 'forward'
			index = index === 0 ? quotes.length - 1 : index - 1
		} else {
			direction = 'reverse'
			index = index === quotes.length - 1 ? 0 : index + 1
		}
	}

	const handleEvent = x => {
		clearInterval(intervalId)
		nextQuote(x)
	}

	if (autoplay) {
		intervalId = setInterval(() => nextQuote('forward'), delay)
	}

	onDestroy(() => clearInterval(intervalId))
</script>

<div class="quote bg-light">
	<div class="prev">
		<ArrowBackCircleOutline
			size="48"
			role="button"
			ariaLabel="prev icon"
			on:click={() => handleEvent('prev')}
			on:keydown={evt => evt.key === 'Enter' && handleEvent('prev')}
		/>
	</div>
	{#key index}
		<div
			class="content flow"
			in:fly={direction === 'forward'
				? transitions.forward.in
				: transitions.reverse.in}
			out:fly={direction === 'reverse'
				? transitions.reverse.out
				: transitions.forward.out}
		>
			<blockquote class="italic">"{quotes[index].content}"</blockquote>
			{#if quotes[index].cite}
				<cite>{'– ' + quotes[index].cite}</cite>
			{/if}
		</div>
	{/key}
	<div class="next">
		<ArrowForwardCircleOutline
			size="48"
			role="button"
			ariaLabel="next icon"
			on:click={() => handleEvent('next')}
			on:keydown={evt => evt.key === 'Enter' && handleEvent('next')}
		/>
	</div>
</div>

<style>
	.quote {
		padding: var(--size);
		padding-bottom: var(--triple-size);
		position: relative;
		overflow: hidden;
		border: 1px solid var(--light);
		border-radius: var(--size);

		@media (min-width: 48rem) {
			height: 350px;
			padding-bottom: 0;
		}

		& .content {
			height: 100%;
			display: grid;
			place-content: center;
			margin-inline: auto;

			@media (min-width: 48rem) {
				max-width: 85%;
			}
		}

		& cite {
			display: block;
			text-align: right;
		}

		& .prev {
			align-content: center;
			position: absolute;
			left: var(--half-size);
			bottom: 0;

			@media (min-width: 48rem) {
				top: 50%;
				translate: 0 -50%;
			}
		}

		& .next {
			align-content: center;
			position: absolute;
			right: var(--half-size);
			bottom: 0;

			@media (min-width: 48rem) {
				top: 50%;
				translate: 0 -50%;
			}
		}
	}
</style>
