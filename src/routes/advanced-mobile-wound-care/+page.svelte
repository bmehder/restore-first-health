<script>
	import Block1 from './Block1.svelte'
	import Block2 from './Block2.svelte'
	import Block3 from './Block3.svelte'
	import Block4 from './Block4.svelte'
	import Block5 from './Block5.svelte'
	import Block6 from './Block6.svelte'
	// import Block7 from './Block7.svelte'
	import Block8 from './Block8.svelte'

	export let data
</script>

<svelte:head>
	<title>Advanced Care for Chronic Wounds - Restore First Health</title>
	<meta
		name="description"
		content="We get it. Living with a chronic wound can be overwhelming. Restore First Health provides expert wound care in the comfort of the home."
	/>
	<!-- <meta name="robots" content="noindex" /> -->
</svelte:head>

<Block1 />
<Block2 />
<Block3 />
<Block4 />
<Block6 faqs={data.faqs} />
<Block5 />
<Block8 />
<!-- <Block7 /> -->
