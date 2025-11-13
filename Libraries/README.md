# My Library

A multi-module JavaScript library with ESM and UMD builds.

## Installation

```bash
npm install my-library

Usage
ESM

import Libraries from 'my-library';

const c11 = new Libraries.Lib1.Class11();
console.log(c11.sayHello());

UMD (Browser)

<script src="node_modules/my-library/index.umd.js"></script>
<script>
const c22 = Libraries.Lib2.Class22();
console.log(c22.stop());
</script>
