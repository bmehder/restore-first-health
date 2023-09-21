<script>
  import Facebook from '$lib/icons/Facebook.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'

  const currentYear = new Date().getFullYear()
</script>

<footer class="bg-accent">
  <div class="inner flex">
    <p>© Copyright {currentYear} Restore First Health. All rights reserved.</p>
    <p style="text-align: right;"><a href="/policies-and-disclosures">Policies and Disclosures</a></p>
  </div>
</footer>

<style>
  .inner {
    width: var(--width);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--size);
    padding-block: var(--double-size);
  }
  
  .flex {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
</style>
