export async function load({ fetch, parent }) {
	const { regions } = await parent()

	const jobsByRegions = Promise.all(
		regions.map(({ id }) =>
			fetch(`https://rfh-api.com/wp-json/wp/v2/jobs?per_page=100&regions=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		jobsByRegions,
	}
}
