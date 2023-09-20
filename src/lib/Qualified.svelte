<div class="graphic">
  <div class="one">Is an open wound on the skin</div>
  <div class="two">Is not infected</div>
  <div class="three">Is greater than 1 square cm</div>
  <div class="four">Has not improved after 4 weeks of therapy</div>
</div>

<style>
  .graphic {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--size) / 4);
    text-align: center;
    color: white;
    font-weight: bold;
  }
  div {
    display: grid;
    place-content: center;
    padding-inline: var(--size);
    aspect-ratio: 1;
    border-radius: 25%;
  }
  .one, .four {
    background-color: var(--accent-light);
  }
  .two, .three {
    background-color: var(--accent);
  }
</style>
