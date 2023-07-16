import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const message = data.get('message');

		console.log({ name, message });

		return { success: true, name };
	}
} satisfies Actions;
