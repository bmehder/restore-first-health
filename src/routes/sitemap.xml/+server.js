import menuItems from '$lib/Headers/menuItems'

const otherPages = [
  { name: 'Frank Curvin, MD', url: '/frank-curvin-md/' },
]

const createSitemap = ({ site, pages, posts }) => {
  const createSiteEntry = site => `
    <url>
      <loc>${site}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `

  const createPageEntry = page => `
    <url>
      <loc>${site}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `

  const createPostEntry = post => `
    <url>
      <loc>${site}/blog/${post.slug}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${post.updatedAt}</lastmod>
      <priority>0.3</priority>
    </url>
  `

  const getPageEntries = pages => pages.map(createPageEntry).join('')
  // const getOtherEntries = pages => pages.map(createPageEntry).join('')
  const getPostEntries = posts => posts.map(createPostEntry).join('')

  console.log(getPageEntries(otherPages))
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${createSiteEntry(site)}
      ${getPageEntries(pages)}
      ${getPostEntries(posts)}
    </urlset>
  `
}

//list of posts containing a slug [{title: "Test title", slug: "test-title", updatedAt: "2023-01-01"}]

//list of pages as a string ex. ["about", "blog", "contact"]

const options = {
  site: 'https://restorefirsthealth.com',
  pages: [
    ...menuItems.map(item => item.url.substring(1)).filter(Boolean),
    ...otherPages.map(item => item.url.substring(1)).filter(Boolean),
  ],
  posts: [],
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const body = createSitemap(options)
  const response = new Response(body)

  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
  response.headers.set('Content-Type', 'application/xml')

  return response
}
