export const trailingSlash = 'always'

export async function load({ cookies }) {
  const rfhPopup = cookies.get('rfh-popup')

  !rfhPopup && cookies.set('rfh-popup', 'true', { path: '/', maxAge: 2 * 24 * 60 * 60 })

  return {
    rfhPopup,
  }
}
