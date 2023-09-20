export const load = async ({ fetch, params }) => {
  const endpoint = `https://restorefirsthealth.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`

  const response = await fetch(endpoint)
  const post = await response.json()

  return { post }
}
