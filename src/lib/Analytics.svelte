<script>
	import { page } from '$app/stores'

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'AW-16722966334', {
				page_title: document.title,
				page_path: $page.url.pathname,
			})
		}
	}
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16722966334">
	</script>
	<script>
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'AW-16722966334')
	</script>
</svelte:head>
