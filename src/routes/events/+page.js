export const load = async ({ fetch }) => {
  const endpoint =
    'https://restorefirsthealth.com/wp-json/wp/v2/event?_embed'

  const response = await fetch(endpoint)
  const events = await response.json()

  return { events }
}
