<script>
  import teamMembers from './data'
  import Member from '../Member.svelte'
</script>

<section class="flow">
  <h1 class="title">Georgia Care Team</h1>

  <img src="/georgia-care-team.jpg" alt="Georgia Care Team" />

  <p>
    Our team is here to guide you through any of these treatments and work with you to
    ensure your health and well being are being prioritized.
  </p>

  <p>You deserve better health, and we are here to help you get there!</p>

  <!-- <h2>Meet Our Team</h2> -->
  <ul class="flow">
    {#each teamMembers as item}
      <Member {item} />
    {/each}
  </ul>
</section>
