import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import type { PageServerLoad } from './$types';
import type { Data } from '$lib/store.server';

export const load = (async ({ params }) => {
	const adapter = new JSONFile<Data>('./db.json');
	const defaultData = { posts: [] };
	const db = new Low<Data>(adapter, defaultData);
	await db.read();

	return { posts: db.data.posts };
}) satisfies PageServerLoad;
