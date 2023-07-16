<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="container mx-auto prose">
	<div class="py-4">
		<h1>Live Guestbook</h1>

		<p><a href="/show">View</a></p>

		{#if form?.success}
			<p>Thank you {form?.name}!</p>
		{/if}

		<form method="POST" class="flex flex-col gap-2">
			<div class="form-control">
				<input type="text" name="name" placeholder="Name" class="input input-bordered" required />
			</div>
			<div class="form-control">
				<textarea name="message" placeholder="Message" class="input input-bordered h-32" required />
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</main>
