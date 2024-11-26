<template>
    <div class="pt-4">
        <h3 class="mb-5 text-lg font-medium text-white ">Odaberi format</h3>
        <div>
            <ul class="w-full max-w-96 space-y-4">
                <li v-for="poster in POSTER_FORMATS">
                    <input v-model="siteStore.posterConfig.format" type="radio" :id="'poster-format-' + poster.id"
                        name="poster-format" :value="poster" class="hidden peer" required @change="formatSelected" />
                    <label :for="'poster-format-' + poster.id"
                        class="inline-flex items-center justify-between w-full p-4 text-gray-500 bg-white outline-4 outline outline-gray-200 rounded-lg cursor-pointer relative z-0 peer-checked:z-10 peer-checked:outline-yellow-400 peer-checked:text-yellow-900 hover:text-yellow-900 hover:bg-gray-100 peer-checked:bg-yellow-100">
                        <div class="block">
                            <div class="w-full">
                                <span class="text-lg font-semibold">{{ poster.name }}</span>
                                <template v-if="poster.description"> - <small class="">{{ poster.description
                                        }}</small></template>
                            </div>
                            <div class="w-full text-sm">+{{ poster.price }} <small>RSD</small></div>
                        </div>

                        <div>
                            <svg v-if="poster.icon == 'spark'" xmlns="http://www.w3.org/2000/svg" class=" size-8"
                                viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M5.465 9.83a.92.92 0 0 0 1.07-.001a1 1 0 0 0 .341-.459l.347-1.067a1.7 1.7 0 0 1 1.078-1.079l1.086-.353a.923.923 0 0 0-.037-1.75l-1.069-.346a1.7 1.7 0 0 1-1.08-1.078l-.353-1.084a.92.92 0 0 0-.869-.61a.92.92 0 0 0-.875.624l-.356 1.09A1.71 1.71 0 0 1 3.7 4.775l-1.084.351a.923.923 0 0 0 .013 1.745l1.067.347a1.71 1.71 0 0 1 1.081 1.083l.352 1.08c.063.18.181.337.337.448m5.07 4.021a.8.8 0 0 0 .464.148a.81.81 0 0 0 .759-.55l.248-.762c.053-.158.143-.303.26-.421s.262-.207.42-.259l.772-.252a.8.8 0 0 0-.023-1.521l-.764-.249a1.08 1.08 0 0 1-.68-.678l-.252-.774a.8.8 0 0 0-1.518.011l-.247.762a1.07 1.07 0 0 1-.664.679l-.776.253a.8.8 0 0 0-.388 1.221c.099.14.239.245.4.3l.763.247a1.08 1.08 0 0 1 .68.683l.253.774a.8.8 0 0 0 .292.388" />
                            </svg>

                            <svg v-if="poster.icon == 'paper'" xmlns="http://www.w3.org/2000/svg" class=" size-8"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z" />
                            </svg>
                        </div>
                    </label>
                </li>

            </ul>

        </div>

    </div>
</template>

<script lang="ts" setup>
const siteStore = useSiteStore()

function formatSelected() {
    if (!siteStore.posterConfig.format?.digital) {
        siteStore.posterConfig.paperType = siteStore.posterConfig.paperType || PAPER_TYPE[0]
        siteStore.posterConfig.frame = siteStore.posterConfig.frame || FRAME_TYPES[0]

        let availableFrames = getAvaialbleFrames(siteStore.posterConfig.format)
        if (!availableFrames.find(frame => frame.id == siteStore.posterConfig.frame?.id)) {
            siteStore.posterConfig.frame = availableFrames.find(frame => frame.price > 0)
        }
    }

}
</script>

<style></style>