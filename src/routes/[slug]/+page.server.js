import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
	const endpoint = `https://rfhapi.wpenginepowered.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`

	const response = await fetch(endpoint)
	const post = await response.json()

	if (post.length === 0) {
		throw error(404, {
			message: 'Not found',
		})
	}

	return { post }
}
