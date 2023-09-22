<div class="outer flow">
  <div class="graphic">
    <div class="one">Is an open wound on the skin</div>
    <div class="two">Is not infected</div>
    <div class="three">Must be LARGER than 2cm x 2cm</div>
    <div class="four">Has not improved after 4 weeks of therapy</div>
  </div>
</div>

<style>
  .outer {
    padding: calc(var(--size) * 1.5);
    background-color: var(--secondary);
    border-radius: calc(25% - var(--double-size));
  }
  .graphic {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--half-size);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .graphic div {
    display: grid;
    place-content: center;
    padding-inline: var(--size);
    aspect-ratio: 1;
    border-radius: 25%;
  }
  .one,
  .four {
    background-color: var(--accent-light);
  }
  .two,
  .three {
    background-color: var(--accent);
  }
</style>
