import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()]
};
//@ts-ignore
export default ({ mode }) => {
    // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return defineConfig({
        plugins: [sveltekit()]
    }); 
};
