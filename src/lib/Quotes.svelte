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

<div class="quote">
	<!-- {#key index} -->
	<!-- <div
			class="flow"
			in:fly={direction === 'forward'
				? transitions.forward.in
				: transitions.reverse.in}
			out:fly={direction === 'reverse'
				? transitions.reverse.out
				: transitions.forward.out}
		> -->
	<div class="flow">
		<blockquote class="italic">"{quotes[index].content}"</blockquote>
		{#if quotes[index].cite}
			<cite>{'– ' + quotes[index].cite}</cite>
		{/if}
	</div>
	<!-- {/key} -->
	<div class="controls">
		{#if autoplay}
			<ArrowBackCircleOutline
				size="48"
				role="button"
				ariaLabel="prev icon"
				on:click={() => handleEvent('prev')}
				on:keydown={evt => evt.key === 'Enter' && handleEvent('prev')}
			/>
			<ArrowForwardCircleOutline
				size="48"
				role="button"
				ariaLabel="next icon"
				on:click={() => handleEvent('next')}
				on:keydown={evt => evt.key === 'Enter' && handleEvent('next')}
			/>
		{/if}
	</div>
</div>

<style>
	.quote {
		/* height: 620px; */
		padding-inline-end: var(--half-size);
		overflow: hidden;

		/* @media (min-width: 32rem) {
			height: 620px;
		} */

		& cite {
			display: block;
			text-align: right;
		}
	}
</style>
