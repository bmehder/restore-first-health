export const load = async ({ fetch }) => {
	const endpoint =
		'https://rfhapi.wpenginepowered.com/wp-json/wp/v2/posts?_embed&per_page=100&status=publish'

	const response = await fetch(endpoint)
	const posts = await response.json()

	return { posts }
}
