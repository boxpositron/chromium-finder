[![Build Status](https://travis-ci.org/boxpositron/chromium-finder.svg?branch=master)](https://travis-ci.org/boxpositron/chromium-finder)

[![GitHub issues](https://img.shields.io/github/issues/boxpositron/chromium-finder.svg)](https://github.com/boxpositron/chromium-finder/issues)


[![GitHub license](https://img.shields.io/github/license/boxpositron/chromium-finder.svg)](https://github.com/boxpositron/chromium-finder/blob/master/LICENSE)


# chromium-finder  

This package is a fork of the chrome-finder package.
This specifically looks for chromium installations.

## Installation

This package can be installed from npm with the following commands

```shell
npm install chromium-finder --save
```

## Use case

```js
const findChromium = require('chromium-finder');
const chromiumPath = findChromium();
```

- if no executable chromium find, `Error('platform not support')` will be throw
- if platform is not one if `['win32','darwin','linux']`, `Error('no chromium installations found')` will be throw
