// export const trailingSlash = 'always'

export async function load({ cookies }) {
  const rfhPopup = cookies.get('rfh-popup')

  cookies.set('rfh-popup', 'true', { path: '/', maxAge: 2 * 24 * 60 * 60 }) // 2 days

  return {
    rfhPopup,
  }
}
