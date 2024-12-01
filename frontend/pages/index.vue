<template>
    <div>
        <div class="relative">
            <div class="relative z-10 h-full">
                <LazyCoreNavbar />
                <LazyLandingHero />
            </div>
            <LazyLandingGradientGoo class="absolute top-0 z-0 h-full" />
        </div>

        <!-- <LazyLandingDescription /> -->

        <LazyLandingItems />

        <LazyLandingFeatures />
        <LazyLandingFaq />
    </div>
</template>