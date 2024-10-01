<script>
	import Botpoison from '@botpoison/browser'
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
	let city = ''
	let state = ''
	let isConfirmSMS = false
	let message = ''

	let isMyself
	let isLovedOne
	let isMyPatient

	let isPressureUlcer
	let isDiabeticUlcer
	let isVenousUlcer
	let isOtherUlcer
	let specifiedOtherUlcer

	let isAtHome
	let isAcuteRehab
	let isNursingFacility
	let isHospital
	let isOtherLocation
	let specifiedOtherLocation

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
					city,
					state,
					message,
					isMyself,
					isLovedOne,
					isMyPatient,
					isPressureUlcer,
					isDiabeticUlcer,
					isVenousUlcer,
					specifiedOtherUlcer,
					isAtHome,
					isAcuteRehab,
					isNursingFacility,
					isHospital,
					isConfirmSMS,
					specifiedOtherLocation,
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
			<div class="columns">
				<div>
					<label for="city">City <span>*</span></label>
					<input type="text" id="city" name="city" bind:value={city} required />
				</div>
				<div>
					<label for="state">State <span>*</span></label>
					<select id="state" name="state" bind:value={state} required>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
				</div>
			</div>
			<div>
				<label for="company">Company</label>
				<input type="text" id="company" name="company" bind:value={company} />
			</div>
			<div class="auto-fit" style="gap: var(--size)">
				<div class="who-needs-care">
					<p><strong>Who needs care?</strong></p>
					<div>
						<input
							type="checkbox"
							name="myself"
							id="myself"
							bind:checked={isMyself}
						/>
						<label for="myself">Myself</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="a-loved-one"
							id="a-loved-one"
							bind:checked={isLovedOne}
						/>
						<label for="a-loved-one">A Loved One</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="my-patient"
							id="my-patient"
							bind:checked={isMyPatient}
						/>
						<label for="my-patient">My Patient</label>
					</div>
				</div>
				<div class="type-of-wound">
					<p><strong>Type of Wound (if known)</strong></p>
					<div>
						<input
							type="checkbox"
							name="pressure-ulcer"
							id="pressure-ulcer"
							bind:checked={isPressureUlcer}
						/>
						<label for="pressure-ulcer">Pressure Ulcer</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="diabetic-ulcer"
							id="diabetic-ulcer"
							bind:checked={isDiabeticUlcer}
						/>
						<label for="diabetic-ulcer">Diabetic Ulcer</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="venous-ulcer"
							id="venous-ulcer"
							bind:checked={isVenousUlcer}
						/>
						<label for="venous-ulcer">Venous Ulcer</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="other-ulcer"
							id="other-ulcer"
							bind:checked={isOtherUlcer}
						/>
						<div>
							<label for="other-ulcer">Other Ulcer <em>(please specify)</em></label>
							{#if isOtherUlcer}
								<input type="text" bind:value={specifiedOtherUlcer} />
							{/if}
						</div>
					</div>
				</div>
				<div class="current-location">
					<p><strong>Current Location of Patient</strong></p>
					<div>
						<input
							type="checkbox"
							name="at-home"
							id="at-home"
							bind:checked={isAtHome}
						/>
						<label for="at-home">At Home</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="acute-rehab"
							id="acute-rehab"
							bind:checked={isAcuteRehab}
						/>
						<label for="acute-rehab">Acute Rehab</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="nursing-facility"
							id="nursing-facility"
							bind:checked={isNursingFacility}
						/>
						<label for="nursing-facility">Skilled Nursing Facility</label>
					</div>
					<div>
						<input
							type="checkbox"
							name="hospital"
							id="hospital"
							bind:checked={isHospital}
						/>
						<div>
							<label for="other-ulcer">Hospital</label>
						</div>
					</div>
					<div>
						<input
							type="checkbox"
							name="other-location"
							id="other-location"
							bind:checked={isOtherLocation}
						/>
						<div>
							<label for="other-location"
								>Other Location <em>(please specify)</em></label
							>
							{#if isOtherLocation}
								<input type="text" bind:value={specifiedOtherLocation} />
							{/if}
						</div>
					</div>
				</div>
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
				<label for="message">Message <span>*</span></label>
				<textarea
					bind:value={message}
					rows="10"
					id="message"
					name="message"
					required
				/>
			</div>
			<div>
				<button type="submit" disabled={isSubmitting || !isConfirmSMS}>
					{#if isSubmitting}
						<Spinner />
					{:else}
						Submit Message
					{/if}
				</button>
			</div>
			<div class="confirm-sms">
				<input
					type="checkbox"
					name="confirm-sms"
					id="confirm-sms"
					bind:checked={isConfirmSMS}
				/>
				<label for="confirm-sms"
					>I agree to receive SMS from Restore First Health. <span>*</span></label
				>
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

	@media (min-width: 52rem) {
		.columns {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--size);
		}
	}

	div {
		display: grid;
		gap: calc(var(--size) / 4);
	}

	span {
		color: var(--highlight);
	}

	.confirm-sms {
		display: flex;
		gap: var(--half-size);
	}

	.confirm-sms input {
		width: var(--size);
		height: var(--size);
	}

	.who-needs-care > div {
		display: flex;
	}

	.who-needs-care input {
		width: var(--size);
		height: var(--size);
	}

	.type-of-wound > div {
		display: flex;
	}

	.type-of-wound input[type='checkbox'] {
		width: var(--size);
		height: var(--size);
	}

	.current-location > div {
		display: flex;
	}

	.current-location input[type='checkbox'] {
		width: var(--size);
		height: var(--size);
	}

	button {
		padding-block: var(--size);
		transition: background-color 100ms;
	}

	button:disabled {
		/* background-color: lightgray; */
		cursor: not-allowed;
	}
</style>
