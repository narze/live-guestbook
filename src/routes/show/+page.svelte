<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if browser}
	<Carousel autoplay autoplayDuration={5000} autoplayProgressVisible arrows={false} dots={false}>
		{#each data.posts as post (post.timestamp)}
			<div class="text-center h-[100svh] flex items-center justify-center">
				<div class="max-w-9xl">
					<p class="py-6 text-6xl font-bold">
						{post.message}
					</p>
					<h1 class="text-2xl">- {post.name}</h1>
				</div>
			</div>
		{/each}
	</Carousel>
{/if}
