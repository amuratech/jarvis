# React Redux POC


## Structure

I have followed the standard folder structure for a react-redux.

```
├── README.md
├── dist
│   ├── bundle.js
│   └── index.html
├── package-lock.json
├── node_modules
├── package.json
├── src
│   ├── actions
│   │   ├── postActions.js
│   │   └── types.js
│   ├── components
│   │   ├── DetailFeed.jsx
│   │   ├── DetailList.jsx
│   │   ├── Home.jsx
│   │   └── shared
│   ├── index.js
│   ├── reducers
│   │   ├── index.js
│   │   └── postReducer.js
│   ├── routes
│   │   └── index.js
│   └── store.js
├── webpack.config.js
└── yarn.lock
```

`package.js`: This is the node module, typically can call as the heart of the app. Here we have defined all the dependancy, node scripts and so on.

`webpack.config.js`: Webpack is our module bundler for application. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

`node_modules` directory consists of all installed dependancies which are defined in `package.json`

`dist` directory contains the distribution file or the bundled files

`src` directory consists of all app logic.

### SRC Directory

`src` folder contains `actions`, `components`, `reducers`, `routes` folders because its runs on redux system.

**What is Redux?**

Redux is a state container for JS apps. This helps apps to maintain a global state and runs an app consistantly.

Here we have used `react-redux` to connect our react app with the redux store. So what happens when we rap the app with redux? The entire app will be lisioning to the redux store (ie, each and every component knows whats its state is as a single source of truth, where in ordinary react setup each component have its own state)

So the react have a work flow in which each and every request is been processed.

![](docs/redux.png?raw=true)



## Installation

Our app works on nodejs, so make sure we have a install nodejs in to your system. else for mac users use the following command to install node

```bash
brew install node
```
Once node is installed you will be enabled with `npm`.

Now lets navigate inside the `sd-ui` directory to install dependancies of the app.

To install dependancies
```bash
npm install
```

This might take some time.Once its done lets start our node server.
```bash
npm start
```

open `http://localhost:8080/` in your browser.
