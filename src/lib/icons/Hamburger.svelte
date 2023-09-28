<script>
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'

  let isReady = false

  onMount(() => (isReady = true))
</script>

{#if isReady}
  <button
    class="unset"
    on:click
    in:fade={{ duration: 0 }}
    aria-expanded="false"
    aria-controls="nav"
    aria-label="Open"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="448"
      height="512"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </svg>
  </button>
{/if}

<style>
  svg {
    width: calc(var(--size) * 1.5);
    height: calc(var(--size) * 1.5);
  }

  button:is(:focus-visible) {
    outline: 2px solid white;
    outline-offset: 0.25em;
    border-radius: 2px;
    color: white;
  }

  button:hover {
    all: unset;
  }
</style>
