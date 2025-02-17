# Github Repository Browser

This is a simple SPA **React.js** project build with **Vite** for browsing GitHub repositories based on their owners' usernames.

## Setup

Install required packages
```bash
npm install
```

The application needs a `VITE_GITHUB_API_URL` value to point requests to GitHub API as well as `VITE_GITHUB_API_VERSION` to specify version in request headers. It is also possible to provide an API key with `VITE_GITHUB_API_KEY`, however it is ill-advised due to major security risk, as the API key can be compromised when local server is exposed to network.

## Running locally
Because this project has been build with **Vite** it can be run locally either in development mode from source or in preview mode from production build.

### Development
Create a `*/.env.local` file in porject's root directory for running in development mode. You can copy contents of `*/.env.production` entirely for a functional setup.

The application needs a `VITE_GITHUB_API_URL` value to point requests to GitHub API as well as `VITE_GITHUB_API_VERSION` to specify version in request headers. It is also possible to provide an API key with `VITE_GITHUB_API_KEY`, however it is ill-advised due to major security risk, as the API key can be compromised when local server is exposed to network.

With `*/.env.local` provided, run `npm run dev` to start a local development server.

### Production preview

Provide `*/env.production` file with required environment variables.

To build a site with Vite, run
```bash
npm run build
```

AFter build is completed, you can preview it with
```bash
npm run preview
```

## Tests

This project uses Jest with React Testing Library.

To run tests use
```bash
npm run test
```
