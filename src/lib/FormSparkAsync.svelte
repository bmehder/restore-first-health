<script>
  import Botpoison from "@botpoison/browser";
  import { onMount } from 'svelte'
  import Spinner from '$lib/Spinner.svelte'

  export let id = 'HpYuoy9r'
  export let botpoisonKey = ''
  export let isPhoneRequired = true

  const FORMSPARK_ACTION_URL = `https://submit-form.com/${id}`

  let formElement

  let firstName = ''
  let lastName = ''
  let company = ''
  let email = ''
  let phone = ''
  // let requestEvaluation = false
  let message = ''

  let isSubmitting = false
  let isSubmitted = false
  let botpoison = null

  onMount(() => {
    botpoison = new Botpoison({
      publicKey: botpoisonKey,
    })
  })

  const handleSubmit = async url => {
    try {
      isSubmitting = true

      const { solution } = await botpoison.challenge()

      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email,
          phone,
          message,
          _botpoison: solution,
          _email: {
            from: 'Restore First Health',
            subject: `Contact Form Submission: ${lastName}, ${firstName}`,
            template: {
              title: false,
              footer: false,
            },
          },
        }),
      })

      formElement.reset()
    } catch (err) {
      console.error(err)
    } finally {
      isSubmitting = false
      isSubmitted = true
    }
  }
</script>

<section class="flow">
  {#if isSubmitted}
    <p class="h3">Thank you for your message!</p>
    <p>We have received your message and will contact you as soon as possible.</p>
  {:else}
    <form
      bind:this={formElement}
      class="flow"
      on:submit|preventDefault={() => handleSubmit(FORMSPARK_ACTION_URL)}
    >
      <div class="columns">
        <div>
          <label for="first-name">First Name <span>*</span></label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            bind:value={firstName}
            required
          />
        </div>
        <div>
          <label for="last-name">Last Name <span>*</span></label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            bind:value={lastName}
            required
          />
        </div>
      </div>
      <div class="columns">
        <div>
          <label for="email">Email <span>*</span></label>
          <input type="email" id="email" name="email" bind:value={email} required />
        </div>
        <div>
          <label for="phone"
            >Phone {#if isPhoneRequired}<span>*</span>{/if}</label
          >
          <input
            type="phone"
            id="phone"
            name="phone"
            bind:value={phone}
            required={isPhoneRequired}
          />
        </div>
      </div>
      <!-- <div class="request-evaluation">
        <input
          type="checkbox"
          name="Evaluation"
          id="request-evaluation"
          bind:checked={requestEvaluation}
        />
        <label for="request-evaluation"> I would like to request an evaluation. </label>
      </div> -->
      <div>
        <label for="company">Company</label>
        <input type="text" id="company" name="company" bind:value={company} />
      </div>
      <div>
        <label for="message">Message <span>*</span></label>
        <textarea bind:value={message} rows="10" id="message" name="message" required />
      </div>
      <div style="display: contents;">
        <input
          type="checkbox"
          name="_honeypot"
          style="display:none"
          tabindex="-1"
          autocomplete="off"
        />
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          {#if isSubmitting}
            <Spinner />
          {:else}
            Submit Message
          {/if}
        </button>
      </div>
    </form>
  {/if}
</section>

<style>
  .h3 {
    line-height: 1.5;
  }

  form {
    width: min(100%, 42em);
  }

  .columns {
    gap: var(--size);
  }

  div {
    display: grid;
    gap: calc(var(--size) / 4);
  }

  span {
    color: red;
  }

  /* .request-evaluation {
    display: flex;
    gap: var(--half-size);
  }

  .request-evaluation input {
    width: var(--size);
    height: var(--size);
  } */

  button {
    padding-block: var(--size);
  }
</style>