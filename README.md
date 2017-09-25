# terminator
[![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)][async-url]

inform an iterable when it is prematurely terminated by the consumer. 

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Travis Status][codecov-image]][codecov-url]

## Usage

_package requires a system that supports async-iteration, either natively or via down-compiling_

### Install
```
npm install @async-generators/terminator --save
yarn add @async-generators/terminator
```

This package's `main` entry points to a `commonjs` distribution. 

Additionally, the `module` entry points to a `es2015` distribution, which can be used by build systems, such as webpack, to directly use es2015 modules. 

## Api

### terminator(source)

<code>terminator()</code> returns an iterable that, when iterated, wraps the source iterable, captures calls to `return` and calls `next(Symbol.for("terminated"))`. The `source` iterable can then find out if it was terminated by examining the return value of `yield`. i.e. `if((yield item) == Symbol.for("terminated")) ...` 

source must have a `[Symbol.asyncIterator]` or `[Symbol.iterator]` property. If both are present only `[Symbol.asyncIterator]` is used. 

## Example

example.js
```js

```

Execute with the latest node.js: 

```
node --harmony-async-iteration example.js
```

output:
```
```
## Typescript

This library is fully typed and can be imported using: 

```ts
import terminator from '@async-generators/terminator');
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration example.ts
```

[npm-url]: https://npmjs.org/package/@async-generators/terminator
[npm-image]: https://img.shields.io/npm/v/@async-generators/terminator.svg
[npm-downloads]: https://img.shields.io/npm/dm/@async-generators/terminator.svg
[travis-url]: https://travis-ci.org/async-generators/terminator
[travis-image]: https://img.shields.io/travis/async-generators/terminator/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/terminator
[codecov-image]: https://codecov.io/gh/async-generators/terminator/branch/master/graph/badge.svg
[async-url]: https://github.com/async-generators