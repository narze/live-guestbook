import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import type { PageServerLoad } from './$types';
import type { Data } from '$lib/store.server';

export const load = (async ({ params }) => {
	const adapter = new JSONFile<Data>(process.env.VERCEL_ENV ? '/tmp/db.json' : './db.json');
	const defaultData = { posts: [] };
	const db = new Low<Data>(adapter, defaultData);
	await db.read();

	// Get only 20 recent posts
	const posts = db.data.posts.reverse().slice(0, 20);

	return { posts };
}) satisfies PageServerLoad;
