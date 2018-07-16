# ![Chainpoint.org](./src/images/logo-xs.png) Chainpoint.org Website

## Development

Clone the repo and install dependencies

```sh
git clone git@github.com:chainpoint/chainpoint-org.git && cd chainpoint-org
```

Install dependencies

```sh
yarn install
```

or

```sh
npm install
```

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Then you can run it by:
```sh
cd chainpoint-org
gatsby develop
```

If you plan on deploying your changes, create and switch to a bugfix or feature branch
```sh
git checkout -b feature/<cool-descriptive-branch-name>
```

### Directory Structure

```html
.
├── components - all react components which are not pages
│   ├── Example.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── content - json files to be imported to content blocks
│   └── example-v1.json
├── images - all images
├── layouts - app layout
│   └── index.js
├── pages - page layouts*
│   ├── 404.js
│   └── index.js
└── styles - scss files, all included in main.scss
    ├── components - page & component level styles
    │   └── _home.scss
    ├── global - shared styles
    │   └── _global.scss
    ├── libs - cloned scss libraries that aren't on npm
    │   ├── quantum-colors
    │   └── quantum-shadows
    │       ├── LICENSE
    │       ├── README.md
    │       ├── _quantum-shadows.scss
    ├── main.scss
    └── utils - helper scss functions
        └── _utils.scss
```

## Build and Deploy
The website is hosted on Netlify and all updates to the `master` branch are deployed to the live site immediately. For that reason, we NEVER push directly to the master branch.

First, test the build locally by running  

```sh
gatsby build && gatsby serve
```

If it all looks good, push your local feature or bugfix branch to github (never to master) and open a pull request against `master`. This will create a [Deploy Preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) on Netlify that the team will deploy when ready.