export async function load({ fetch }) {
	const route =
		'https://rfh-api.com/wp-json/wp/v2/team-members?per_page=100&regions=21'

	const res = await fetch(route)
	const teamMembers = await res.json()

	return {
		teamMembers,
	}
}
