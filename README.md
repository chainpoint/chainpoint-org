# ![Chainpoint.org](./static/images/logo-xs.png) Chainpoint.org Website

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Development

Clone the repo and install dependencies

```sh
git clone https://github.com/chainpoint/chainpoint-org.git && cd chainpoint-org
```

Install dependencies

```sh
yarn install
```

Then you can run it by:
```sh
yarn dev
```

If you plan on deploying your changes, create and switch to a bugfix or feature branch
```sh
git checkout -b feature/<cool-descriptive-branch-name>
```

## Build and Deploy
The website is hosted on Netlify and all updates to the `master` branch are deployed to the live site immediately. For that reason, we NEVER push directly to the master branch.

First, test the build locally by running  

```sh
yarn build && yarn start
```

If it all looks good, push your local feature or bugfix branch to github (never to master) and open a pull request against `master`. This will create a [Deploy Preview](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) on Netlify that the team will deploy when ready.
