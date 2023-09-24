<script>
  import faqs from './wound'
  import Faq from '$lib/FAQ.svelte'
  import CaretDown from '$lib/icons/CaretDown.svelte'
  import CaretRight from '$lib/icons/CaretRight.svelte'

  let isOpen = false

  const handleClick = () => isOpen = !isOpen
</script>

<section class="flow">
  <h1 class="title">Frequently Asked Questions</h1>

  <button on:click={handleClick}>{isOpen ? 'Close All' : 'Expand All'}</button>

  {#each faqs as { question, answer }}
    <Faq {question} {answer} openIcon={CaretRight} closeIcon={CaretDown} {isOpen} />
  {/each}
</section>

<style>
  button {
    all: unset;
    display: block;
    margin-left: auto;
    padding-block-start: var(--half-size);
    color: var(--accent-light);
    border-bottom: 2px solid var(--highlight);
    cursor: pointer;
  }
</style>