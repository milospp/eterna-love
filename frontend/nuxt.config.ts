// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:8000/api',
        }
    },

    compatibilityDate: '2024-04-03',
    css: [
        '~/assets/css/main.css',
        'vue-final-modal/style.css'],
    devtools: { enabled: true },

    imports: {
        // dirs: ['types/*.ts', 'store/*.ts', 'types/**/*.ts'],
        dirs: ['utils/*.ts'],
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    ssr: false,

    modules: ['@pinia/nuxt', '@vue-final-modal/nuxt', 'nuxt-paypal', '@nuxtjs/i18n', 'nuxt-gtag'],


    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    vite: {
        optimizeDeps: {
            include: ['vue-final-modal']
        }
    },


    paypal: {
        clientId: process.env.PAYPAL_CLIENT_ID === 'production'
            ? 'ARvd0LmvZHAEoPW2NnHtgBbD0POgRNQIuMJ577-yHZMFlizqbKFh6F2F87ckdLiBB6zE96zIBiVwfdJH'
            : 'AXZNHOdYlElinFERTV03gfzM_kX3T_TOleKWiclb97m08ApfQFjVA6ryz7dD58FiiSZ1BLzyRvMLQ4uD',

        // clientId: 'AXZNHOdYlElinFERTV03gfzM_kX3T_TOleKWiclb97m08ApfQFjVA6ryz7dD58FiiSZ1BLzyRvMLQ4uD',
        // clientId: 'ARvd0LmvZHAEoPW2NnHtgBbD0POgRNQIuMJ577-yHZMFlizqbKFh6F2F87ckdLiBB6zE96zIBiVwfdJH', //LIVE
        currency: 'EUR',
    },

    webpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 20000,
            },
        },
    },

    gtag: {
        id: 'G-WFVP14ESHH',
        config: {
            page_title: 'Eterna Love Page'
        },
    }
})