// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public' })
        }
    }
});
