<script>
  import { slide } from 'svelte/transition'

  export let question = 'Question'
  export let answer = 'Answer'
  export let openIcon
  export let closeIcon
  export let classNames = ''

  let isOpen

  const handleClick = () => (isOpen = !isOpen)
</script>

<div class="flow faq">
  <button
    class="{classNames} question"
    on:click|preventDefault={handleClick}
  >
    <span>{question}</span>
    <span>
      <svelte:component this={isOpen ? closeIcon : openIcon} />
    </span>
  </button>
  {#if isOpen}
    <div class="flow answer" aria-expanded={isOpen} transition:slide>{@html answer}</div>
  {/if}
</div>

<style>
  .question {
    all: inherit;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: var(--size);
    font-weight: 500;
    cursor: pointer;
    color: var(--accent);
  }

  .question:is(:hover, :focus) {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .answer {
    padding-inline-end: var(--size);
  }
</style>
