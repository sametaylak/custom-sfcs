import { readdirSync } from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import { terser } from "rollup-plugin-terser";

const components = readdirSync(`${__dirname}/src`);
const esm = components
    .map(file => file.split('.')[0])
    .map(file => ({
        input: `${__dirname}/src/${file}.vue`,
        output: {
            format: 'esm',
            dir: `${__dirname}/dist`,
        },
        plugins: [
            resolve(),
            vue(),
            terser(),
        ],
    }));


export default esm;
