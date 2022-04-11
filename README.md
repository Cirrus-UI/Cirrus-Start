# ⚡ cirrus-start

**The fastest way to get your idea up and running with [Cirrus](https://github.com/Cirrus-UI/Cirrus-Start).**

## ✨ Features

- 💎 Direct integration with [Cirrus](https://github.com/Cirrus-UI/Cirrus-Start) using **Sass** configuration. This allows you to customize what features you want in Cirrus and which classes to add/remove during project generation.
- ⚙️ Bundled with **Webpack** to bundle all your assets in a fast and configurable manner. This includes a few standard Webpack plugins and a live reload server for fast iteration.
- ⚗️ **PurgeCSS** included byh default to minimize build sizes and remove all Cirrus classes that are not used for builds.
- ⚡ Deploy and teardown your project with ease with **Surge.sh**.

## 🔨 Getting Started

To get started, [clone](https://github.com/Cirrus-UI/Cirrus-Start.git) or [download](https://github.com/Cirrus-UI/Cirrus-Start/archive/refs/heads/main.zip) the project.

After installing locally, open up the `cirrus-start` folder in your favorite text-editor/IDE.

### 1. Install Dependencies

**Yarn**

```sh
yarn
```

or

```sh
yarn install
```

**Npm**

```sh
npm install
```

### 2. Developing with cirrus-start

Make the changes you want within the project and then run locally with the following commands:

- `yarn build` - build project in `development` mode.
- `yarn watch` - build on save without live server.
- `yarn serve` - start project with live server.
- `yarn serve:hot` - build on save with live server refresh and automatically open the project on `localhost`.

For **npm**, replace `yarn` with `npm`.

After starting the project, the dev serve should be running on `http://localhost:9000`. This port number can be updated inside `webpack.config.js`.

### 3. Build for production

To create the production build of your project, run the following command:

**Yarn**

```sh
yarn build:prod
```

**Npm**

```sh
npm run build:prod
```

### 4. Deploy your project

Project deployment is powered by [Surge.sh](https://surge.sh/), a fast way for developers to launch their front-end project. All projects are given a free `*.surge.sh` domain. Custom domains can be set with a paid plan.

**Yarn**

```sh
yarn deploy
```

**Npm**

```sh
npm deploy
```

Simply follow the prompts after entering the above command.

### 5. Redeploy your project

To update your existing deployment, use the `redeploy` command and specify the domain you used.


```sh
yarn deploy my-project.surge.sh
```

**Npm**

```sh
npm deploy my-project.surge.sh
```

### 6. Teardown your project

Once you no longer need it deployed, use the `teardown` comand to remove your project's deployment.

```sh
yarn teardown
```

**Npm**

```sh
npm teardown
```

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Read our [contributing guide](https://github.com/Cirrus-UI/Cirrus-Start/blob/master/.github/CONTRIBUTING.yml) and improve Cirrus together.

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/Cirrus-UI/Cirrus-Start/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/Cirrus-UI/Cirrus-Start/pulls) or as [GitHub issues](https://github.com/Cirrus-UI/Cirrus-Start/issues).

When creating issues, please follow the templates provided for the issue type you selected. The added detail and formatting will help me understand and resolve your issue faster.

## ❤️ Sponsors and Backers

I would greatly appreciate any support for the continued development of this project. :smile:

[![](https://opencollective.com/cirrus/tiers/sponsors.svg?avatarHeight=36)](https://opencollective.com/cirrus#support)

[![](https://opencollective.com/cirrus/tiers/backers.svg?avatarHeight=36)](https://opencollective.com/cirrus#support)
