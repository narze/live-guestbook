// import { Low } from 'lowdb';
// import { JSONFile } from 'lowdb/node';

import type { Actions } from './$types';
import { posts } from '$lib/store.server';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const message = data.get('message') as string;

		console.log({ name, message });

		posts.update((posts) => {
			const newPost = { name, message, timestamp: Date.now() };

			return [...posts, newPost];
		});
		// const adapter = new JSONFile('./db.json');
		// const defaultData = { posts: [] };
		// const db = new Low(adapter, defaultData);

		// // Read data from JSON file, this will set db.data content
		// // If JSON file doesn't exist, defaultData is used instead
		// await db.read();
		// const { posts } = db.data;
		// posts.push('hello world');

		// // Finally write db.data content to file
		// await db.write();

		return { success: true, name };
	}
} satisfies Actions;
