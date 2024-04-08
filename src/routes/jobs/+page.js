export async function load({ fetch }) {
	const regions = await fetch('https://rfh-api.com/wp-json/wp/v2/regions')
		.then(x => x.json())
		.catch(console.error)

	const jobsByRegions = Promise.all(
		regions.map(({ id }) =>
			fetch(`https://rfh-api.com/wp-json/wp/v2/jobs?per_page=100&regions=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		regions,
		jobsByRegions,
	}
}
