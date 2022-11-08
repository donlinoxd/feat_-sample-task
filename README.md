### Sample TS Storybook NextJS

## initial start

-   run `git pull` (pull latest changes)
-   run `npm i` (install all packages)
-   run `npm run dev` (start development server) (see "Starting the development server")

### Starting the development server

-   This is a NextJS Application built with ReactJS + Typescript
-   To start a development server that makes changes instantly with hot-module reload, run `npm run dev`
-   To access the development site, go to localhost:8000

### Building the NextJS Application

-   Building the NextJS Application involves redering React Code into static HTML, CSS, and JS files that are served to the client. They are then served to the client via a server or CDN.
-   To build and simulate the application in production, use `npm run build` and then `npm start`. The "production" site will be live again at localhost:8000

### Pre-Build script

-   Before the application builds there is a pre-build script which populates `categories.db`, `configurations.db`, and `templates.db` as cache so that these files can be used during the build process
-   This script also checks against the current backend version number
-   An initial script called `runner.ts` runs all files in the pre-build directory
    -   Right now there is just one called `build-cache.ts`

### Storybook

-   We use Storybook to build and manage UI components
-   To run the storybook interface locally, run `npm run storybook`
