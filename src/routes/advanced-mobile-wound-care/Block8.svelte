<script>
	import locations from '$lib/locations'
</script>

<section>
	<div class="inner">
		<div class="heading half-flow">
			<h2 class="h1 balance" style="text-align: center;">
				Call Us
				<div class="bar"></div>
			</h2>
		</div>
	</div>
</section>

<ul class="auto-fit">
	{#each locations.georgia as georgiaLocation}
		<li>
			<h3>{georgiaLocation.name}</h3>
			{#if georgiaLocation.phone}
				<p>Phone: <a href={georgiaLocation.phoneLink}>{georgiaLocation.phone}</a></p>
			{/if}
			{#if georgiaLocation.fax}
				<p>Fax: {georgiaLocation.fax}</p>
			{/if}
		</li>
	{/each}

	{#each locations.newJersey as newJerseyLocation}
		<li>
			<h3>{newJerseyLocation.name}</h3>
			{#if newJerseyLocation.phone}
				<p>
					Phone: <a href={newJerseyLocation.phoneLink}>{newJerseyLocation.phone}</a>
				</p>
			{/if}
			{#if newJerseyLocation.fax}
				<p>Fax: {newJerseyLocation.fax}</p>
			{/if}
		</li>
	{/each}

	{#each locations.pennsylvania as pennsylvaniaLocation}
		<li>
			<h3>{pennsylvaniaLocation.name}</h3>
			{#if pennsylvaniaLocation.phone}
				<p>
					Phone: <a href={pennsylvaniaLocation.phoneLink}
						>{pennsylvaniaLocation.phone}</a
					>
				</p>
			{/if}
			{#if pennsylvaniaLocation.fax}
				<p>Fax: {pennsylvaniaLocation.fax}</p>
			{/if}
		</li>
	{/each}

	{#each locations.kansas as kansasLocation}
		<li>
			<h3>{kansasLocation.name}</h3>
			{#if kansasLocation.phone}
				<p>
					Phone: <a href={kansasLocation.phoneLink}>{kansasLocation.phone}</a>
				</p>
			{/if}
			{#if kansasLocation.fax}
				<p>Fax: {kansasLocation.fax}</p>
			{/if}
		</li>
	{/each}

	{#each locations.texas as texasLocation}
		<li>
			<h3>{texasLocation.name}</h3>
			{#if texasLocation.phone}
				<p>
					Phone: <a href={texasLocation.phoneLink}>{texasLocation.phone}</a>
				</p>
			{/if}
			{#if texasLocation.fax}
				<p>Fax: {texasLocation.fax}</p>
			{/if}
		</li>
	{/each}

	{#each locations.florida as floridaLocation}
		<li>
			<h3>{floridaLocation.name}</h3>
			{#if floridaLocation.phone}
				<p>
					Phone: <a href={floridaLocation.phoneLink}>{floridaLocation.phone}</a>
				</p>
			{/if}
			{#if floridaLocation.fax}
				<p>Fax: {floridaLocation.fax}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	h3 {
		margin-bottom: var(--half-size);
	}
</style>
