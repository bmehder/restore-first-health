export async function load({ fetch }) {
	const route =
		'https://rfh-api.com/wp-json/wp/v2/team-members?per_page=100&regions=25&_embed'

	const res = await fetch(route)
	const teamMembers = await res.json()

	return {
		teamMembers,
	}
}
