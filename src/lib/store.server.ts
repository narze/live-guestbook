import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { writable } from 'svelte/store';

export interface Post {
	name: string;
	message: string;
	timestamp: number;
}

export type Data = {
	posts: Post[];
};

export const posts = writable<Post[]>([]);

const adapter = new JSONFile<Data>(process.env.VERCEL_ENV ? '/tmp/db.json' : './db.json');
const defaultData = { posts: [] };
const db = new Low<Data>(adapter, defaultData);

(async () => {
	await db.read();

	posts.set(db.data.posts);
})();

posts.subscribe(async (posts) => {
	db.data.posts = posts;
	await db.write();
});
