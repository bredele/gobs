# Gobs

[![Build Status](https://travis-ci.org/bredele/gobs.svg?branch=master)](https://travis-ci.org/bredele/gobs)
[![NPM](https://img.shields.io/npm/v/gobs.svg)](https://www.npmjs.com/package/gobs)
[![Downloads](https://img.shields.io/npm/dm/gobs.svg)](http://npm-stat.com/charts.html?package=gobs)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Execute a callback that depends on multiple conditions.
 <!-- Gobs is used by the libraries [mood](http://github.com/bredele/mood) and [doors](http://github.com/bredele/doors). -->

## Usage

```js
import gobs from 'gobs'

const dispatch = gobs(['event1', 'event2'], () => {
  console.log('hello world')
})

dispatch('event1')
dispatch('something else')
dispatch('event2')
// => hello world
```

Check out our [API](/test) for more information.

## Installation

```shell
npm install gobs --save
```

[![NPM](https://nodei.co/npm/gobs.png)](https://nodei.co/npm/gobs/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Gobs is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any gobs-related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
