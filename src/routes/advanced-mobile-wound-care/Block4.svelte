<section class="light-gray full-bleed">
	<div class="inner flow">
		<div class="half-flow">
			<p>REVIEWS</p>
			<h2 class="h1 balance">What Families Are Saying</h2>
			<div class="bar"></div>
		</div>
		<div class="flow">
			<blockquote>
				Pinky is an angel. She always helps and answers any questions. She goes the
				extra mile and helped my sister Monica, and gave us all necessary reports to
				keep the Doctor updated. Thank God for nurses like Pinky!
			</blockquote>

			<p class="author">-Thomas Brennan, New Jersey</p>
		</div>
	</div>
</section>

<style>
	section {
		max-width: 48rem;
		margin-inline: auto;
		text-align: center;
	}

	h2 {
		color: white;
	}

	blockquote {
		quotes: '\201C' '\201D' '\2018' '\2019';
		margin: 1.5rem 10px;
		padding: 0.5rem 10px;
		text-align: left;
		text-indent: -3.4rem;
		font-size: 1.2rem;
		font-style: italic;
	}

	blockquote::before {
		content: open-quote;
		color: var(--secondary);
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 6rem;
		line-height: 0.1rem;
		margin-right: 1rem;
		vertical-align: -1.7rem;
	}

	blockquote::after {
		content: close-quote;
	}

	/* blockquote::before {
		content: open-quote;
		font-family: Georgia, 'Times New Roman', Times, serif;
		margin-top: -1rem;
		font-weight: bold;
		font-size: var(--double-size);
	} */

	.author {
		text-align: right;
	}
</style>
