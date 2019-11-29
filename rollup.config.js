import vue from 'rollup-plugin-vue';
import { readdirSync } from 'fs';
import minify from 'rollup-plugin-babel-minify';

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
            vue(),
            minify(),
        ],
    }));


export default esm;
