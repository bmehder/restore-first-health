<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import Instagram from '$lib/icons/Instagram.svelte'
  import Youtube from '$lib/icons/Youtube.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-accent">
  <div class="inner socials">
    <nav>
      <ul class="flex">
        <li>
          <a href="https://www.facebook.com/RestoreFirstHealth" target="_blank" aria-label="Facebook"
            ><Facebook /></a
          >
        </li>
        <li>
          <a href="https://www.instagram.com/restorefirsthealth/" target="_blank" aria-label="Instagram"
            ><Instagram /></a
          >
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCV7KVHZbCWypAi4nsYphVIQ"
            target="_blank" aria-label="Youtube"><Youtube /></a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/company/restore-first-health/" target="_blank" aria-label="LinkedIn"
            ><LinkedIn /></a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div class="inner flex copyright">
    <p>© Copyright {currentYear} Restore First Health. All rights reserved.</p>
    <p>
      <a href="/policies-and-disclosures">Policies and Disclosures</a>
    </p>
  </div>
</footer>

<style>
  footer {
    line-height: 1.5;
  }
  .inner {
    width: var(--width);
    justify-content: space-between;
    padding-block: var(--double-size);
  }

  .inner.socials {
    padding-block-end: 0;
  }

  .socials nav {
    width: max-content;
    /* margin-left: auto; */
  }

  @media (max-width: 48em) {
    /* .socials nav {
      margin-left: 0;
    } */
    .socials nav ul {
      flex-direction: row;
    }
  }
  
  .socials nav ul {
    margin-left: auto;
    gap: var(--half-size);
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--secondary);
    text-decoration: underline;
  }

  @media (min-width: 48em) {
    .copyright p:last-child {
      text-align: right;
    }
  }
</style>
