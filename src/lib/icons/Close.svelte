<button
  class="unset"
  on:click
  aria-label="Close"
  aria-expanded="true"
  aria-controls="nav"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
    ><path
      fill="currentColor"
      d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
    /></svg
  >
</button>

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
