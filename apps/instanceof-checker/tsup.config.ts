import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['index.ts'],
    skipNodeModulesBundle: true,
    tsconfig: 'tsconfig.json',
    clean: true,
    bundle: true,
    dts: false,
    silent: false,
    format: ['cjs'],
    minify: false,
    target: 'es2020',
    splitting: false,
    sourcemap: true,
    shims: false,
    keepNames: true,
    noExternal: [
        "instanceof"
    ]
});
