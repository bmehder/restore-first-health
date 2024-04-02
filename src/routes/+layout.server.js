export const trailingSlash = 'always'

export async function load({ cookies }) {
  const rfhModal = cookies.get('rfh-modal-2024-04')

  !rfhModal && cookies.set('rfh-modal-2024-04', 'true', { path: '/', maxAge: 2 * 24 * 60 * 60 })

  return {
		rfhModal,
	}
}
