# Next.js Boilerplate

[![Build Status](https://api.travis-ci.org/nerdsofalltrades/next6-boilerplate.svg?branch=master)](https://travis-ci.org/nerdsofalltrades/next6-boilerplate)

A boilerplate for Next.js projects including all the bad-ass technologies
needed to build maintainable software.

* Next.js 6
* React 16
* Styled JSX with CSS modules
* ES6/7, Typescript
* Webpack
* Express
* Tslint/ Eslint/ Prettier/ XO
* Jest & Enzyme

## Installation

```
$ npm install
```

## Development

Start a watching development server with hot module replacement, running at [localhost](http://localhost:3000).

```
$ npm run dev
```

Throttle mocked backend calls to simulate slower response times.

```
$ THROTTLE=1000 npm run dev
```

You can create a local config `.env` for development:

```
THROTTLE=200
SOME_TOKEN=8D3A3368493D7D641E6
PORT=8080
API_ENDPOINT=/api
```

The `.env` file is not being committed.

## Testing

Start linting and unit tests.

```
$ npm test
```
