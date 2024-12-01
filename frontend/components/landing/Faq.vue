<template>
    <div class="bg-[#F5F5F5]">
        <div class="mx-auto max-w-7xl px-6 pb-10">

            <h1 class="pt-20 pb-14 text-3xl">Česta pitanja</h1>
            <SharedAccordionContainer>
                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Sa kojih aplikacija mogu da izvezem svoje četove?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Svi četovi sa Instagrama, Facebooka, Whatsappa mogu postati jedinstven posteri!</span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Kako da preuzmem moje četove?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Preuzimanje četova zavisi od aplikacije koju koristite. Uputstvo korak po korak možete
                            pronaći na našoj stranici.</span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Da li su moji podaci sigurni?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Da, vaši podaci su potpuno sigurni. Mi ne čitamo vaše poruke – naš sistem obrađuje podatke
                            lokalno na vašem uređaju, a do nas stiže samo gotova analiza. Na taj način čuvamo vašu
                            privatnost i osiguravamo da niko nema uvid u vaš sadržaj.</span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Da li mogu dobiti pregled postera pre slanja?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Da, možete dobiti pregled porudžbine ako ga zatražite prilikom završetka kupovine. Sve
                            stavke i detalji biće jasno prikazani pre konačne potvrde.
                        </span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Da li mogu da kombinujem četove sa različitih društvenih mreža?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Da, možete! Naša platforma omogućava kombinovanje četova sa različitih društvenih mreža u
                            jednu analizu.</span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Koje opcije plaćanja su dostupne?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Plaćanje možete obaviti putem PayPal-a, platnim karticama ili gotovinom prilikom
                            pouzeća.</span>
                    </template>
                </SharedAccordionItem>

                <SharedAccordionItem>
                    <template #accordion-trigger>
                        <h3>Da li je moguće dobiti samo digitalnu verziju?</h3>
                    </template>
                    <template #accordion-content>
                        <span>Da, to je moguće! Opciju digitalne verzije možete odabrati prilikom formiranja
                            porudžbine.</span>
                    </template>
                </SharedAccordionItem>

            </SharedAccordionContainer>

            <!-- <div>
                <div v-for="i in 6" class="py-4 px-8 bg-white text-black border-t-2 flex justify-between">
                    <p>Kako preuzeti chatove</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>