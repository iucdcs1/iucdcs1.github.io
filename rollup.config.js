import typescript from '@rollup/plugin-typescript';
import dayjs from 'dayjs';

export default {
    input: './src/xkcd.ts',
    output: {
        file: './dist/xkcd.min.js',
        format: 'iife',
        name: 'xkcd'
    },
    plugins: [typescript(), dayjs()],
};