# What is this?
It's a barebone project for react and sass sites.

## Features
- React and Sass-enabled
- Hot-reloading, change a file and see the change live in the browser.
- Redux enabled, use a redux global store and stateless react-components
- React router enabled, use friendly-urls and browser-history even during development. (History fallback enabled)

## How to use
Clone the repository, copy & paste the contents to a new folder (dont copy the .git folder).
Open a terminal window and go the root of the project-folder. Run the install command below.

## Installation
Run: `npm run react-install` to install all necessary plugins and modules. (React, Babel ES6, Sass)

Run: `npm start` to start a local dev-server. By default the url will be: http://localhost:8080, but it might be different on your machine, check the output in terminal for the correct url.

Optional run: `npm run wordpress-install` to install wordpress support and create folders.

## Usage
Run: `npm run build` to create a bundle.js and style.min.css.

## Folder structure

### React base
./src/react/app/app.js compiles to ./src/react/bundle.js

### Sass base
./src/react/sass/main.scss compiles to ./src/react/style.min.css
