<script>
  import faqs from './wound'
  import Faq from '$lib/FAQ.svelte'
  import CaretDown from '$lib/icons/CaretDown.svelte'
  import CaretRight from '$lib/icons/CaretRight.svelte'
</script>

<section class="flow">
  <h1 class="title">Frequently Asked Questions</h1>

  {#each faqs as { question, answer }}
    <Faq {question} {answer} openIcon={CaretRight} closeIcon={CaretDown} />
  {/each}
</section>