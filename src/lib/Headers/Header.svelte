<script>
  import DesktopHeader from '$lib/Headers/DesktopHeader.svelte'
  import MobileHeader from '$lib/Headers/MobileHeader.svelte'

  const logo = '<img src="/restore-first-health-logo.png" alt="Restore Wound Care Logo" />'

  export let mobileThreshold = 768

  let innerWidth
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < mobileThreshold}
  <MobileHeader {logo} />
{:else}
  <DesktopHeader {logo} />
{/if}