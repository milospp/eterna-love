<template>
    <div class=" space-y-4 pb-10 mt-10">
        <h3 class="text-lg border-b border-gray-300">Podaci za uplatu:</h3>
        <div>
            <h4 class="font-thin">Ime primaoca</h4>
            <p>Miloš Popović</p>
        </div>
        <div>
            <h4 class="font-thin">Adresa</h4>
            <p>Novi Sad</p>
        </div>
        <div>
            <h4 class="font-thin">Račun primaoca</h4>
            <p>170-0010514080000-18</p>
        </div>

        <div>
            <h4 class="font-thin">Svrha plaćanja</h4>
            <p>EternaLove 1834</p>
        </div>

        <div class="mx-auto pt-10">
            <qrcode-vue class=" mx-auto max-w-40 size-40"
                :value="'K:PR|V:01|C:1|R:170001051408000018|N:Miloš Popović|I:RSD1000,00|SF:289|S:EternaLove 1834'"
                level="H" render-as="svg" />
            <p class="text-center text-sm">IPS - scan</p>
        </div>

        <!-- K:PR|V:01|C:1|R:170001051408000018|N:Miloš Popović|I:RSD1000,00|SF:289|S:EternaLove 1834 -->
    </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'

</script>

<style></style>