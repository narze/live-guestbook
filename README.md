# Live Guestbook

A simple guestbook that can be viewed in a carousel, uses [lowdb](https://github.com/typicode/lowdb) to persist entries in a json file.

Live demo is available on Vercel https://live-guestbook.vercel.app

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
