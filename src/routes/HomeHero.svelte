<script>
  export let image = ''
</script>

<div class="hero" style="background-image: url({image})">
  <div class="inner balance">
    <div class="content">
      <div class="h2">Chronic Wound Care</div>
      <!-- <div class="h3">EXPERT CARE COORDINATION</div> -->
      <div>
        <a class="button" aria-label="Request Appointment" href="/contact-us/"
          >Request Appointment</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .hero {
    padding-block: calc(var(--size) * 4);
    background-position: center;
    background-size: cover;
    color: var(--light);
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.6);
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
  .button {
    display: inline-block;
    margin-block-start: var(--half-size);
    font-size: calc(var(--size) - 0.25rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.24);
  }
  .button:hover,
  .button:focus {
    color: var(--light);
    outline-color: var(--light);
  }
  .content {
    display: grid;
    gap: var(--size);
  }
</style>
