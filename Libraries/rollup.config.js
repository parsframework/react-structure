import path from 'path';




export default [
{
input: 'ParsFramework.js',
output: {
file: path.resolve('index.esm.js'),
format: 'esm',
sourcemap: true
}
},

{
input: 'ParsFramework.js',
output: {
file: path.resolve('index.umd.js'),
format: 'umd',
name: 'ParsFramework',
sourcemap: true
}
}

];

