import type { Actions } from './$types';
import { posts } from '$lib/store.server';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const message = data.get('message') as string;

		posts.update((posts) => {
			const newPost = { name, message, timestamp: Date.now() };

			return [...posts, newPost];
		});

		return { success: true, name };
	}
} satisfies Actions;
