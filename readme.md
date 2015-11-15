# JavaScript Modern Application development workflow #

### Init project  ###

`npm init -y`

---
### Install Babel and related dependencies ###

`npm install babel-core babel-loader --save-dev`

Next you'll need to install any plugins and presets you need.

**ES6/2015 support**

`npm install babel-preset-es2015 --save-dev`

**React support**

`npm install babel-preset-react --save-dev`

**ES7 experimental features**

`npm install babel-preset-stage-0 --save-dev`

**Runtime support**

`npm install babel-polyfill --save`

`npm install babel-runtime --save`

`npm install babel-plugin-transform-runtime --save-dev`

---

### Webpack ###

`npm install webpack-dev-server -g`

`npm install webpack-dev-server webpack --save-dev`

Create *src/index.html* with

`<script src="//localhost:8080/bundle.js"></script>`

inside.

Run webpack development server:

`webpack-dev-server --content-base src src/main.js`

Open **localhost:8080**.

### Webpack configuration file ###

```
module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  }
}
```

### Babel configuration file ###

```
{
  "presets": ["es2015", "stage-0", "react"]
}
```

### React ###

`npm install react react-dom --save`

### Enabling Hot Module Replacement (HMR) ###

As for now we'll be using `react-hot-loader` to achieve hot module replacement.

In near future take a look at `babel-plugin-react-transform, react-transform-hmr`
