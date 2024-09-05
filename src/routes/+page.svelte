<script>
	import Sveltetube from '$lib/Sveltetube.svelte'
	import Quotes from '$lib/Quotes.svelte'

	const quotes = [
		{
			content: `Restore First Health is a wonderful service. They are so professional and caring in treating their patient. Maribel and Nellie were wonderful in taking care of my mother’s wound. They showed so much compassion and gentleness. Through their treatment they were able to heal my mom’s wound quickly and painlessly. I also want to thank them for taking time to instruct me how to treat the wound.

				Maribel and Nellie have truly been given a gift and I thank them for sharing that gift. Restore First Health is blessed to have you.`,
			cite: 'Joan Kirbos',
		},
		{
			content:
				'Great experience with every visit. Everyone was very professional, friendly, courteous and informative.',
			cite: 'Marta Segarra',
		},
		{
			content:
				'Fantastic job!! They really know what they are doing. Knowledgeable, introduced me to a lot of new products that I haven’t seen before.  Very happy with Pinky, Lexi and Nita’s team. They taught me daily maintenance of the wound. 5 star!!!',
			cite: 'Jim Martindale',
		},
		{
			content:
				'I am beyond impressed with Restore Health and their Nurse Practitioner Courtney M. She is thorough, dedicated, knowledgeable, compassionate and knows her stuff. I am a RN with a home care company and was having a great deal of difficulty getting a wound healed. Courtney to the rescue. She came in assessed patients circulation and coordinated with vascular MD. Patient had procedure and Courtney came back into the picture to continue working on the wound. Which is healing very nice. She coordinates with patient, family, MD. and current RN on case. Thank you Courtney.',
			cite: 'Peggy Smargiassi',
		},
		{
			content: `I can’t speak highly enough of Suela, NP she is amazing!!!!! The entire experience since the first day she came to see my dad at the house has been exceptional!!  Suela is very pleasant, informative, she makes you feel comfortable. The staff is incredibly helpful and efficient, Ashley and Diana are amazing! Suela is not only extremely knowledgeable but she also takes the time to address all of our questions and concerns! Suela has been treating my dad’s wound and you can already see the difference in a positive way. We love Restore Health and we highly recommend them!`,
			cite: 'Frances Pacheco',
		},
		{
			content: `Excellent staff great communication with their patients very attentive they do their due diligence check all the boxes great wound care specialist great work ethic easy going hard workers.`,
			cite: 'Ken Renee',
		},
		{
			content: `Chloe Ruschmeyer and Cheyenne are definitely heads above the best. Their care for my husband and his wound was outstanding. They knew exactly what to do for him, so much so that a stage 4 wound is now completely restored. Their knowledge, care, comfort, laughter and humor was fantastic. You can really tell they love their work and care for the client. Thank you.`,
			cite: 'Kathleen Garland',
		},
		{
			content: `It’s difficult to top Peggy’s previous review of Courtney - NP with Restore First Health! Courtney and I connected (and I’m so glad we did!) after she had sought help for a patient in need… one outside of her realm but who had desperately needed her help and resources and she delivered and then some! She was so communicative, willing to go above and beyond to help this patient out of the sheer kindness in her heart, was able to provide all necessary info for the patient as quickly as possible AND even went the extra mile to be a voice for this patient after his insurance had denied a critical piece of equipment he will so greatly benefit from! Courtney is an absolute rockstar and any patients would be so lucky to have her!`,
			cite: 'Marni Mancini',
		},
	]
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
		Partnering in Care with Home Health, Health Systems, Social Workers, Specialists,
		Post Acute Rehab, and patients in the community in need of at-home advanced wound
		care.
	</p>

	<div class="inner flow" style="margin-block-start: var(--double-size);">
		<h2>Our Program - What Sets Us Apart</h2>
		<p>
			Restore First Health offers a proven, mobile advanced program for the treatment
			of chronic wounds. Our advanced high quality wound care includes utilizing
			innovative technology and bedside debridement along with other modalities that
			promote wound healing.
		</p>
		<p>
			Our patients are thoroughly evaluated for co-morbid conditions that may impact
			their wound healing and utilizes community experts to ensure a holistic
			approach to care.
		</p>
	</div>
</section>

<section class="full-bleed bg-accent">
	<div class="inner flow">
		<h2>What makes our approach different?</h2>
		<h3>Collaboration</h3>
		<p>
			From initial contact to ongoing care, our coordinators handle referrals, family
			communication, scheduling, insurance, and ensuring a smooth care process.
		</p>
		<div class="flex">
			<div class="flow">
				<ul class="flow list">
					<li>
						<strong>Seamless Integration:</strong> We collaborate with home health, sub-acute
						rehab, health systems and patients to create the best possible wound healing
						experience.
					</li>
					<li>
						<strong>Provider Education:</strong> We share our plan of care with all involved
						parties to ensure everyone understands the state of the wound and therapy
						options, acting as an informative partner.
					</li>
					<li>
						<strong>Community Resources:</strong> We extend collaboration to include necessary
						community resources for overall wellness.
					</li>
				</ul>
			</div>
			<div class="flow">
				<Sveltetube id="47wM2njfY-Y" />
			</div>
		</div>

		<h3>Care Coordination</h3>
		<p>
			Our team coordinates with the patient’s PCP, specialists or Home Care Provider
			to help treat all their health care needs.
		</p>

		<p>What to expect from our wound care coordinator:</p>
		<ul class="flow special-list">
			<li>Schedules your consultations and appointments</li>
			<li>Verifies and pre-authorizes insurance</li>
			<li>Communicates with current care physicians or providers</li>
			<li>
				Provides medical updates to authorized providers for continuity of care
			</li>
			<li>Checks in regularly to ensure quality of care and positive outcomes</li>
		</ul>

		<h3>Communication</h3>
		<p>
			Our medical experts offer real-time updates and communication, ensuring all
			patients and their care providers are alligned.
		</p>
		<ul class="flow list">
			<li>
				<strong>Continuous Follow-Up:</strong> We follow up before, during, and after
				appointments to keep everyone informed.
			</li>
			<li>
				<strong>Detailed Reporting:</strong> We provide comprehensive verbal and written
				reports to all providers involved.
			</li>
			<li>
				<strong>Family Involvement:</strong> We keep families educated and engaged in
				the care process
			</li>
		</ul>
	</div>
</section>

<section class="qualified-wounds">
	<div class="inner flow">
		<h2>Wounds We Care For</h2>

		<div class="flow">
			<p>
				We offer bedside, on-site services and facility partnerships to best
				coordinate care.
			</p>
			<ul class="special-list flow">
				<li>Diabetic Ulcers</li>
				<li>Sacral Ulcers</li>
				<li>Arterial Wounds</li>
				<li>Venous Wounds</li>
				<li>Traumatic Injuries</li>
				<li>Long term wounds that have not healed…</li>
			</ul>
			<p>
				RFH Clinical Team does not replace traditional wound care. We collaborate
				with teams to bring our specialized therapy.
			</p>
		</div>
	</div>
</section>

<section class="full-bleed bg-accent">
	<div class="inner flow">
		<h2>Patient / Family Testimonials</h2>
		<p>
			We are local community members - partnering with local home health, assisted
			living, and long term care. We also welcome patients who care for themselves or
			loved ones at home who need chronic wound care.
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
				<h3 class="center">Patient Testimonial</h3>
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
				<h3 class="center">Family Sees Hope</h3>
			</div>
			<div class="flow">
				<Sveltetube
					id="h_wsdJl5O8Y"
					title="Amin & Courtney: A Story of Care Coordination"
					poster="https://img.youtube.com/vi/h_wsdJl5O8Y/maxresdefault.jpg"
					radius="2px"
					shadow="0 5px 10px rgb(0 0 0 / 20%)"
					color="#eee"
				/>
				<h3 class="center">Amin & Courtney</h3>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="inner flow">
		<h2>Care Coordination</h2>
		<p>
			The cornerstone to our program is care coordination for every patient and
			provider.
		</p>
		<p>
			From the first phone call or referral to our initial at home evaluation and
			therapy, we inform, communicate and ensure all of our patients and their care
			providers are on the same page at all times.
		</p>
		<div class="flex swap">
			<div>
				<img src="/wound-care-travel.jpg" alt="wound care traveling doctor in car" />
			</div>
			<div class="flow">
				<p>Our dedicated wound care coordinator:</p>
				<ul class="special-list flow">
					<li>Schedules your consultations and appointments</li>
					<li>Verifies and pre-authorizes insurance</li>
					<li>Communicates with current care physicians or providers</li>
					<li>
						Provides medical updates to authorized providers for continuity of care
					</li>
					<li>
						Checks in regularly to ensure quality of care and positive outcomes
					</li>
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
		<ul class="special-list difference-list flow">
			<li>We come to you for evaluation and treatment.</li>
			<li>
				We ensure your insurance is verified and authorized in advance of treatment,
				so there are no surprise costs.
			</li>
			<li>
				Through the entire process, we coordinate with your PCP or Home Care Provider
				to work in concert with all of your overall healthcare needs.
			</li>
			<li>
				We are committed to excellence in wound care and document your progress each
				step of the way to share with your clinical team.
			</li>
			<li>
				Your care is what matters most to us, and if we can’t help you - we will help
				you find a way towards better health.
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
	<div class="inner flow">
		<h2 class="balance">What Our Patients, Families and Providers have to say...</h2>
		<Quotes {quotes} autoplay={true} />
	</div>
</section>

<section>
	<div class="inner">
		<div class="flow">
			<h2>Facility Partnerships</h2>
			<p>
				If you are a facility looking to learn more about partnerships – Call today!
			</p>
			<ul class="list">
				<li><a href="tel:4702923820">(470) 292-3820 (Georgia)</a></li>
				<li><a href="tel:8623147030">(862) 314-7030 (New Jersey)</a></li>
				<li><a href="tel:6103792904">(610) 379-2904 (Pennsylvania)</a></li>
				<li><a href="tel:3163305353">(316) 330-5353 (Kansas)</a></li>
				<li><a href="tel:3463452092">(346) 345-2092 (Texas)</a></li>
				<li><a href="tel:9129121148">(912) 912-1148 (Savannah)</a></li>
				<li><a href="tel:9043285035">(904) 328-5035 (Jacksonville)</a></li>
			</ul>
		</div>
	</div>
</section>

<style>
	.description {
		padding: var(--double-size);
		padding-block-start: calc(var(--double-size) + var(--half-size));
		background-color: var(--secondary);
		text-align: center;
	}

	.special-list li {
		/* padding-block: calc(var(--half-size) / 2); */
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
