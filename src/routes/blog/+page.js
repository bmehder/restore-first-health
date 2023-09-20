export const load = async ({ fetch }) => {
  const endpoint =
    'https://restorefirsthealth.com/wp-json/wp/v2/posts?_embed&per_page=100'

  const response = await fetch(endpoint)
  const posts = await response.json()

  return { posts }
}
