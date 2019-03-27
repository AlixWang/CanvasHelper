import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs'

export default {
    input: 'src/index.js',
    output: {
        name: 'bundle.js',
        dir: 'dist',
        format: 'umd'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        common()
    ]
}