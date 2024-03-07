<script>
  import { page } from '$app/stores'
  import menuItems from '$lib/Headers/menuItems'

  export let logo = 'Add Logo Prop!'
</script>

<header>
  <a class="skip-nav-link" href="#main-content">skip navigation</a>
  <div class="inner">
    <div class="logo">
      <a href="/">{@html logo}</a>
    </div>
    <nav>
      <ul>
        {#each menuItems as { name, url, children }}
          <li>
            <a
              aria-current={$page.url.pathname === url}
              href={url}>{name}</a
            >
            {#if children}
              <ul class="flow">
                {#each children as { name, url }}
                  <li>
                    <a aria-current={$page.url.pathname === url} href={url}>{name}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  li:has(li [aria-current='true']) {
    text-decoration: underline;
    text-decoration-color: var(--highlight);
    text-decoration-thickness: 2px;
    text-underline-offset: var(--half-size);
  }

  header {
    max-height: 6em;
    background-color: var(--accent);
    padding-block: var(--size);
  }

  .skip-nav-link {
    position: absolute;
    left: var(--half-size);
    background-color: black;
    padding-block: var(--half-size);
    padding-inline: var(--size);
    text-decoration: underline;
    text-underline-offset: calc(var(--half-size) / 2);
    transform: translateY(-300%);
  }

  .skip-nav-link:focus {
    transition: transform 200ms ease-in;
    transform: translateY(-120%);
  }

  .inner {
    width: var(--width);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
    margin-block-start: calc(var(--half-size) * -0.5);
    padding-block: 0;
  }

  .logo {
    max-width: 12em;
  }

  ul {
    display: flex;
    gap: var(--size);
    padding-block: var(--size);
  }

  ul li ul {
    display: none;
  }

  ul li {
    position: relative;
  }

  ul li:hover ul {
    width: max-content;
    position: absolute;
    left: calc(var(--size) * -1);
    display: block;
    padding: var(--size);
    background-color: var(--accent);
    z-index: 1;
  }

  a {
    color: var(--light);
    /* text-underline-offset: var(--half-size); */
    /* text-decoration-thickness: 2px; */
  }

  a:hover {
    text-decoration: none;
  }

  /* a:hover:not([aria-current='true']) {
    text-decoration: none;
    opacity: 0.9;
  } */
  
  /* a[aria-current='true'] {
    text-decoration: underline;
    text-decoration-color: var(--highlight);
    text-decoration-thickness: 2px;
    view-transition-name: active-page;
  } */

  a[aria-current='true']::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: calc(var(--half-size) * -1);
		width: 100%;
		height: 2px;
		background-color: var(--highlight);
		view-transition-name: active-page;
	}
</style>
