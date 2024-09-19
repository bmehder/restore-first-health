export async function load({ fetch }) {
	const route =
		'https://rfhapi.wpenginepowered.com/wp-json/wp/v2/team-members?per_page=100&regions=22&_embed'

	const res = await fetch(route)
	const teamMembers = await res.json()

	return {
		teamMembers,
	}
}
