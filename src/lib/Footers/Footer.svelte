<script>
	import Facebook from '$lib/icons/Facebook.svelte'
	import Instagram from '$lib/icons/Instagram.svelte'
	import Youtube from '$lib/icons/Youtube.svelte'
	import LinkedIn from '$lib/icons/LinkedIn.svelte'

	const currentYear = new Date().getFullYear()
</script>

<footer class="bg-accent">
	<div class="inner flow">
		<div class="proud-members skin half-flow">
      <p>Proud members of:</p>
			<div class="proud-members--items">
        <div class="proud-members--item">
          <a href="https://www.woundcarestakeholders.org/" target="_blank">
            <img
              src="/wound-care-stakeholders-logo.png"
              alt="Wound Care Stakeholders Logo"
            /></a
          >
        </div>
        <div class="proud-members--item">
          <a href="https://woundheal.org/" target="_blank">
            <img
              src="/wound-healing-society-logo-3.png"
              alt="Wound Healing Society Logo"
            /></a
          >
        </div>
      </div>
		</div>
		
    <nav class="socials flow">
			<ul>
				<li>
					<a
						href="https://www.facebook.com/RestoreFirstHealth"
						target="_blank"
						aria-label="Facebook"><Facebook /></a
					>
				</li>
				<li>
					<a
						href="https://www.instagram.com/restorefirsthealth/"
						target="_blank"
						aria-label="Instagram"><Instagram /></a
					>
				</li>
				<li>
					<a
						href="https://www.youtube.com/channel/UCV7KVHZbCWypAi4nsYphVIQ"
						target="_blank"
						aria-label="Youtube"><Youtube /></a
					>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/company/restore-first-health/"
						target="_blank"
						aria-label="LinkedIn"><LinkedIn /></a
					>
				</li>
			</ul>
		</nav>
    
    <p class="copyright">© Copyright {currentYear} Restore First Health. All rights reserved.</p>
    
    <p class="policies"><a href="/policies-and-disclosures">Policies and Disclosures</a></p>
	</div>
</footer>

<style>
	.inner {
		width: var(--width);
		padding-block: var(--double-size);
		line-height: 1.5;
    text-align: center;
	}

  .proud-members.skin {
    padding: var(--size);
    background-color: white;
    color: var(--accent);
    border-radius: var(--half-size);
  }

  .proud-members--item {
    display: grid;
    place-content: center;
  }

  .proud-members img {
    max-width: 16rem;
    display: flex;
    align-items: end;
  }

	.socials ul {
		display: flex;
    justify-content: center;
		gap: var(--half-size);
	}

  .policies a {
    text-decoration: none;
  }

  .policies a:hover {
    text-decoration: underline;
  }

  @media (min-width: 48rem) {
    .inner {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: initial;
    }

    .proud-members--item {
      place-content: end;
    }

    .proud-members--items {
      display: flex;
      gap: var(--size);
    }

    .socials ul {
      justify-content: initial;
    }

    .socials, .policies {
      justify-self: end;
      align-self: end;
    }
  }
</style>
