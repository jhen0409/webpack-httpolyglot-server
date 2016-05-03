# webpack-httpolyglot-server

> Using [httpolyglot](https://github.com/mscdex/httpolyglot) to serve http/https over the same port for Webpack development server

## Why?

The [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate)  need a https webpack server on development mode ([Inject page](https://github.com/jhen0409/react-chrome-extension-boilerplate#development)), and we also need http for Window, Popup, Background features, I just don't want to open two webpack servers for that, so I made a tool, provide a easy way to achieve.

## Installation

```bash
$ npm i --save-dev webpack-httpolyglot-server
```

## Usage

#### CLI

Not yet.

#### Node

```js
var createWebpackServer = require('webpack-httpolyglot-server');

const server = createWebpackServer(config, serverOptions);
```

The `config` can be Array, it can use multiple config.

## Configuration

#### output.publicPath

Use `//` as a prefix instead of `http://` or `https://`, but if you're making chrome extension (prefix: `chrome-extension://`), it's not applicable.

#### `webpack-hot-middleware` [entry](https://github.com/glenjamin/webpack-hot-middleware#config)

This tool used `webpack-hot-middleware` for enable hot module replacement.

#### devMiddleware

Apply [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) options.

#### hotMiddleware

Apply [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) options.

## Credits

* The SSL keys is copied from [webpack-dev-server](https://github.com/webpack/webpack-dev-server/tree/master/ssl).

## License

[MIT](LICENSE.md)
