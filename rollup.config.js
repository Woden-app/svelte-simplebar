import pkg from './package.json'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase())

export default {
    input: 'src/index.svelte',
    output: [
        {
            file: pkg.module,
            format: 'es',
            name
        },
        {
            file: pkg.main,
            format: 'umd',
            name
        }
    ],
    plugins: [
        svelte(),
        resolve(),
        postcss({
            plugins: []
        }),
        commonjs()
    ]
}