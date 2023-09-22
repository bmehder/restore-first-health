<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'
  import Mailchimp from '$lib/Mailchimp.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-accent">
  <div class="top inner full-bleed flex" style="--background: var(--teal)">
    <div>
      <Mailchimp />
    </div>
    <div></div>
  </div>
  <div class="inner flex">
    <p>© Copyright {currentYear} Restore First Health. All rights reserved.</p>
    <p style="text-align: right;"><a href="/policies-and-disclosures">Policies and Disclosures</a></p>
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
    align-items: center;
    gap: var(--size);
    padding-block: var(--double-size);
  }
  
  .top.inner {
    padding-block: calc(var(--double-size) * 1.5);
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 48em) {
    .inner {
      align-items: flex-start;
    }
  }
</style>
