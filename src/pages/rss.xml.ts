import rss from '@astrojs/rss'

export async function GET(context) {
  return rss({
    title: 'Sami | Blog',
    description: 'Latest posts from my blog',
    site: context.site,
    items: [],
  })
}
