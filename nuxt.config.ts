// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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



    modules: ['@pinia/nuxt', '@vue-final-modal/nuxt', 'nuxt-paypal', '@nuxtjs/i18n'],


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
        clientId: 'AXZNHOdYlElinFERTV03gfzM_kX3T_TOleKWiclb97m08ApfQFjVA6ryz7dD58FiiSZ1BLzyRvMLQ4uD',
        currency: 'EUR',
        // clientId: 'ARvd0LmvZHAEoPW2NnHtgBbD0POgRNQIuMJ577-yHZMFlizqbKFh6F2F87ckdLiBB6zE96zIBiVwfdJH', //LIVE
    },

    image: {

    }

})