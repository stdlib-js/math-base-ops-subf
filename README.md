<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# subf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
subf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-subf@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-subf@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.subf;
})();
</script>
```

#### subf( x, y )

Subtracts two single-precision floating-point numbers.

```javascript
var v = subf( -1.0, 5.0 );
// returns -6.0

v = subf( 2.0, 5.0 );
// returns -3.0

v = subf( 0.0, 5.0 );
// returns -5.0

v = subf( -0.0, 0.0 );
// returns -0.0

v = subf( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-subf@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = rand( -50, 50 );
    y = rand( -50, 50 );
    console.log( '%d - %d = %d', x, y, subf( x, y ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-subf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-subf

[test-image]: https://github.com/stdlib-js/math-base-ops-subf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-subf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-subf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-subf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-subf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-subf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-subf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-subf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-subf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-subf/main/LICENSE

</section>

<!-- /.links -->
