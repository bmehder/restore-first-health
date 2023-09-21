<script>
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner balance">
    <div class="content">
      <div class="h2">Restore First Health </div>
      <div class="h3">Advanced Care for Chronic Wounds</div>
      <p class="locations">Serving Georgia & New Jersey
        <br><small>(Coming soon to Pennsylvania)</small>
      </p>
      <div>
        <a class="button" aria-label="Request Appointment" href="/contact-us/"
          >Request Consultation</a
        >
      </div>
    </div>
  </div>
  <img src="/submark.png" alt="" />
</div>

<style>
  .hero {
    position: relative;
    padding-block: calc(var(--size) * 3);
    background-position: center;
    background-size: cover;
    color: var(--light);
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
  }
  .h2 {
    color: var(--light);
    font-size: var(--double-size);
  }
  .h3 {
    color: var(--light);
    font-size: calc(var(--size) + 0.5rem);
  }
  .locations {
    font-size: var(--size);
  }
  small {
    font-style: italic;
  }
  .button {
    display: inline-block;
    margin-block-start: var(--half-size);
    font-size: calc(var(--size) - 0.25rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
  }
  .button:hover,
  .button:focus {
    background-color: var(--accent);
    color: var(--light);
    /* outline-color: var(--light); */
  }
  .content {
    display: grid;
    gap: var(--size);
  }
  img {
    width: 90px;
    position: absolute;
    bottom: -45px;
    left: 50%;
    translate: -50%;
  }
</style>
