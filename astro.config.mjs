import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import {defineConfig, passthroughImageService} from "astro/config";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), react()],
    image: {
        service: passthroughImageService(),
    },
});
