<script>
  import Mailchimp from '$lib/Mailchimp.svelte'
  import Facebook from '$lib/icons/Facebook.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'
  import Instagram from '$lib/icons/Instagram.svelte'
  import Youtube from '$lib/icons/Youtube.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-accent">
  <div class="top inner full-bleed flex" style="--background: var(--teal)">
    <div style="margin-block-start: var(--half-size);">
      <Mailchimp />
    </div>
    <div class="flex">
      <div>
        <div class="pages">
          <h3>Pages</h3>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-restore-first-health">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/frequently-asked-questions">FAQ</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="locations">
        <h3>Locations</h3>
        <nav>
          <ul>
            <li>
              <a href="/about-restore-first-health/johns-creek-ga/">Johns Creek, GA</a>
            </li>
            <li><a href="/about-restore-first-health/decatur-ga/">Decatur, GA</a></li>
            <li><a href="/about-restore-first-health/cranbury-nj/">Cranbury, NJ</a></li>
          </ul>
        </nav>
        <div class="socials" style="padding-block-start: var(--size);">
          <a href="https://www.facebook.com/RestoreFirstHealth" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/restorefirsthealth/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/channel/UCV7KVHZbCWypAi4nsYphVIQ" target="_blank">
            <Youtube />
          </a>
          <a href="https://www.linkedin.com/company/restore-first-health/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom inner flex">
    <p>© Copyright {currentYear} Restore First Health. All rights reserved.</p>
    <p>
      <a href="/policies-and-disclosures">Policies and Disclosures</a>
    </p>
  </div>
</footer>

<style>
  .top {
    background-color: var(--teal);
  }
  .inner {
    width: var(--width);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media (min-width: 48em) {
    .inner {
      gap: calc(var(--double-size) * 2);
      padding-block: var(--double-size);
    }
  }

  .top.inner {
    padding-block: calc(var(--double-size) * 1.5);
  }

  h3 {
    padding-block: calc(var(--half-size) / 2);
    font-size: var(--size);
  }

  .pages ul,
  .locations ul {
    padding-inline-start: var(--half-size);
    line-height: 1.75;
  }

  .socials {
    display: flex;
    gap: var(--half-size);
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--secondary);
    text-decoration: underline;
  }

  .bottom {
    line-height: 1.5;
  }

  @media (min-width: 48em) {
    .bottom p:last-child {
      text-align: right;
    }
  }
</style>
