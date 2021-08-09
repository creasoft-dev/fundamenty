Adding React Components
=======================

Adding support for React, mainly for the purpose of dynamic component.

There are two components which I want to add to the portal:

1. [ReactiveSearch](https://docs.appbase.io/docs/reactivesearch/v3/overview/quickstart/) - For search experience. 
2. [ReDoc](https://github.com/Redocly/redoc) and [swagger-ui](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/) - For OpenAPI doc generation.

## React Support - Project Setup
Install:
```sh
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader
```

Add `.babelrc`
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

Modify `webpack.config.js`
```javascript: webpack.config.js
module.exports = {
  plugins: {
    ...
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  }
}
```

## Coding
In the page or template file add a dom container where the component will be rendered, e.g.

```js
<div id="container" />
```

In the main entry file (defined in `webpack.config.js`)

In `src/scripts/main.js`:
```js
...
import React from 'react';
import ReactDOM from 'react-dom';
import YourComponent from './YourComponent';

const domContainer = document.querySelector('#container');
(searchContainer) && ReactDOM.render(<YourComponent/>, domContain
```

Where `YourComponent` is your custom component.

## 3rd party Components

### [ReactiveSearch](https://docs.appbase.io/docs/reactivesearch/v3/overview/quickstart/)

### [Redoc](https://github.com/Redocly/redoc) 

yarn add redoc
yarn add mobx styled-components core-js


## References:
