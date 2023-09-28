export const load = async ({ fetch }) => {
  const endpoint =
    'https://rfh-api.com/wp-json/wp/v2/pages?_embed&slug=policies-and-disclosures'

  const response = await fetch(endpoint)
  const page = await response.json()

  return { page }
}
