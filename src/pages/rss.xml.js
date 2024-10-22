import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	const recentPosts = posts.slice(0,5);
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: "https://wwww.bobmatyas.com",
		items: recentPosts.map((post) => ({
			...post.data,
			link: `https://www.bobmatyas.com/blog/${post.slug}/`,
		})),
	});
}
