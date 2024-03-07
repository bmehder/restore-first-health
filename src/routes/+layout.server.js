export const trailingSlash = 'always'

export async function load({ cookies }) {
  const rfhModal = cookies.get('rfh-modal')

  !rfhModal && cookies.set('rfh-modal', 'true', { path: '/', maxAge: 2 * 24 * 60 * 60 })

  return {
		rfhModal,
	}
}
