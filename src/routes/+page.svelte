<script>
	import Qualified from '$lib/Qualified.svelte'
	import QualifiedWounds from '$lib/QualifiedWounds.svelte'
	import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<svelte:head>
	<title>Home - Advanced Care for Chronic Wounds - Restore First Health</title>
	<meta
		name="description"
		content="Restore First Health offers an advanced therapy for the treatment of chronic wounds utilizing an FDA approved skin substitutes and high quality wound care."
	/>
</svelte:head>

<section>
	<p class="description h2 balance">
		Partnerships and Collaboration with Home Health, Assisted Living, Health Systems, and
		patients in the community in need of at-home chronic wound care.
	</p>

	<div class="inner flow" style="margin-block-start: var(--double-size);">
		<h2>A Unique Treatment Solution</h2>
		<p>
			Restore First Health offers a proven, advanced therapy for the treatment of chronic
			wounds. We utilize FDA approved skin substitutes in conjunction with high quality
			wound care. We help patients who suffer from wounds that show no significant
			progress toward healing after 30 days documented of conventional treatment.
		</p>
		<p>
			Our clinical team evaluates, measures, and examines the wounds for infections. Once
			deemed qualified, our team visits the patients in their home once a week, addresses
			the wound and places a specialized skin substitute. Patients normally begin to
			experience healing within the first few applications!
		</p>
	</div>
</section>

<section class="flow qualified-wounds">
	<h2>Wounds We Care For</h2>
	<div class="flex">
		<div class="flow">
			<p>
				We offer bedside, on-site services and facility partnerships to best coordinate
				care.
			</p>
			<ul class="special-list">
				<li>Diabetic Ulcers</li>
				<li>Sacral Ulcers</li>
				<li>Arterial Wounds</li>
				<li>Venous Wounds</li>
				<li>Traumatic Injuries</li>
				<li>Long term wounds that have not healed…</li>
			</ul>
			<p>
				RFH Clinical Team does not replace traditional wound care. We collaborate with
				teams to bring our specialized therapy.
			</p>
		</div>
		<div class="flow">
			<h3 class="center">Qualified patients have a wound that is...</h3>
			<QualifiedWounds />
		</div>
	</div>
</section>

<section class="full-bleed bg-accent">
	<div class="inner flow">
		<h2>Patient / Family Testimonials</h2>
		<p>
			We are local community members - partnering with local home health, assisted living,
			and long term care. We also welcome patients who care for themselves or loved ones
			at home who need chronic wound care.
		</p>
		<div class="flex">
			<div class="flow">
				<Sveltetube
					id="Tt15F9hmYS8"
					title="Patient Testimonial"
					poster="https://img.youtube.com/vi/Tt15F9hmYS8/hqdefault.jpg"
					radius="2px"
					shadow="0 5px 10px rgb(0 0 0 / 20%)"
					color="#eee"
				/>
				<p class="h3 center">Patient Testimonial</p>
			</div>
			<div class="flow">
				<Sveltetube
					id="ZakmuV-jxVM"
					title="Restore First Health - Family See's Hope"
					poster="https://img.youtube.com/vi/ZakmuV-jxVM/maxresdefault.jpg"
					radius="2px"
					shadow="0 5px 10px rgb(0 0 0 / 20%)"
					color="#eee"
				/>
				<p class="h3 center">Family Sees Hope</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="inner flow">
		<h2>Care Coordination</h2>
		<p>
			The cornerstone to our program is care coordination for every patient and provider.
		</p>
		<p>
			From the first phone call or referral to our initial at home evaluation and therapy,
			we inform, communicate and ensure all of our patients and their care providers are
			on the same page at all times.
		</p>
		<div class="flex swap">
			<div>
				<img src="/wound-care-travel.jpg" alt="wound care traveling doctor in car" />
			</div>
			<div class="flow">
				<p>Our dedicated wound care coordinator:</p>
				<ul class="special-list">
					<li>Schedules your consultations and appointments</li>
					<li>Verifies and pre-authorizes insurance</li>
					<li>Communicates with current care physicians or providers</li>
					<li>Provides medical updates to authorized providers for continuity of care</li>
					<li>Checks in regularly to ensure quality of care and positive outcomes</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="flow">
	<h2>The RFH Difference</h2>

	<div class="flow bg-light" style="padding: var(--double-size);">
		<p>
			We have vast experience in care coordination and management of chronic wounds
			providing a one-on-one wound care coordinator.
		</p>
		<ul class="special-list difference-list">
			<li>We come to you for evaluation and treatment.</li>
			<li>
				We ensure your insurance is verified and authorized in advance of treatment, so
				there are no surprise costs.
			</li>
			<li>
				Through the entire process, we coordinate with your PCP or Home Care Provider to
				work in concert with all of your overall healthcare needs.
			</li>
			<li>
				We are committed to excellence in wound care and document your progress each step
				of the way to share with your clinical team.
			</li>
			<li>
				Your care is what matters most to us, and if we can’t help you - we will help you
				find a way towards better health.
			</li>
		</ul>

		<p>
			Partnerships, community relationships, and exceeding the needs of our patients
			through quality wound therapy is our commitment to better health.
		</p>
	</div>
</section>

<section class="full-bleed bg-accent flow">
	<div class="inner">
		<div class="flex swap">
			<div>
				<img
					src="/lunch-n-learn.jpg"
					alt="people at a table during a lunch 'n learn presentation"
				/>
			</div>
			<div class="flow">
				<h2>Schedule a Lunch-N-Learn</h2>
				<p>We want to hear how best we can meet your needs!</p>
				<p>
					Schedule a Lunch-N-Learn to hear more from our team about our collaborative
					process and how to best schedule visits!
				</p>
				<a href="/contact-us" class="button">Contact Us</a>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="inner">
		<div class="flex">
			<div class="flow">
				<h2>Facility Partnerships</h2>
				<p>
					If you are a facility looking to learn more about partnerships – Call today!
				</p>
				<ul class="list">
					<li><a href="tel:4702923820">(470) 292-3820 (Georgia)</a></li>
					<li><a href="tel:8623147030">(862) 314-7030 (New Jersey)</a></li>
					<li><a href="tel:6103792904">(610) 379-2904 (Pennsylvania)</a></li>
				</ul>
			</div>
			<div class="flow">
				<h2>Patient Referral Forms</h2>
				<p>
					Download the patient referral form or call directly, and we will take the info
					over the phone or by fax!
				</p>
				<ul class="list">
					<li>
						<a href="/wound-care-referral-form-ga.pdf" target="_blank"
							>Download Patient Referral Form – Georgia [PDF]</a
						>
					</li>
					<li>
						<a href="/wound-care-referral-form-nj.pdf" target="_blank"
							>Download Patient Referral Form – New Jersey [PDF]</a
						>
					</li>
					<li>
						<a href="/wound-care-referral-form-pa.pdf" target="_blank"
							>Download Patient Referral Form – Pennsylvania [PDF]</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="inner flow">
		<h2>Wound Care Info Sheet</h2>

		<p>
			Download and share our Chronic Wound Care Information Sheet with your teams and
			learn more about our process. We pride ourselves on making it easy and transparent
			to get the care patients deserve.
		</p>

		<a
			href="/chronic-wound-theapy-restore-first-health.pdf"
			class="button"
			target="_blank">DOWNLOAD PRINTABLE PDF</a
		>
	</div>
</section>

<style>
	.description {
		padding: var(--double-size);
		padding-block-start: calc(var(--double-size) + var(--half-size));
		background-color: var(--secondary);
		/* line-height: 1.5; */
		text-align: center;
	}

	.special-list li {
		padding-block: calc(var(--half-size) / 2);
		padding-inline: var(--half-size);
		margin-inline-start: calc(var(--size) * 1.5);
		list-style-image: url(/icons/check.svg);
	}

	@media (max-width: 48em) {
		.difference-list li {
			margin-inline: 0;
		}
	}
</style>
