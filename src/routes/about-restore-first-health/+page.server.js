export async function load({ fetch }) {
	const route =
		'https://rfhapi.wpenginepowered.com/wp-json/wp/v2/team-members?categories=26&_embed'

	const res = await fetch(route)
	const exectutives = await res.json()

	return {
		exectutives,
	}
}
