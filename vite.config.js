import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        https: false,
        host: '0.0.0.0',
        port: '8080',
        hmr: {
            host: 'hmr.dvl.to', //your <any_folder_name> host
            clientPort: '443',
            protocol: 'wss',
            https: true,
        }
    },
});
