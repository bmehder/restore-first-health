export const load = async ({ fetch, params }) => {
  const endpoint = `https://rfh-api.com/wp-json/wp/v2/event?_embed&slug=${params.slug}`

  const response = await fetch(endpoint)
  const event = await response.json()

  return { event }
}
