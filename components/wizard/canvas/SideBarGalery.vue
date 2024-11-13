<template>
    <div id="itemsSideGalery" class="gap-3 h-full flex flex-col overflow-y-auto">

        <WizardCanvasItem v-for="type in itemTypes" :type="type" location="SIDE_GALERY" />
    </div>
    <div ref="itemRemoveArea" v-show="siteStore.designerShowDeleteItemSection"
        class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-lg" id="itemDeleteZone">
        <div class="p-4 bg-black bg-opacity-50 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-14 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </div>
        <div sortable-delete-place="true" class="absolute inset-0">
        </div>

    </div>
</template>

<script lang="ts" setup>
import Sortable from 'sortablejs'
import { useSiteStore } from '@/stores/siteStore'


const siteStore = useSiteStore()

const itemTypes = ref([
    "MSG_COUNT_BAR",
    "GN_HOURS",
    "TOP_EMOJI",
    "LAUGH_COUNT",
    "MSG_COUNT_HEART",
    "GM_HOURS",
    "MSG_TIME_BAR",
    "MOST_FREQUENT_WORDS",
]);

function getDimension(element: HTMLElement) {
    const style = window.getComputedStyle(element);
    const width = element.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const height = element.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);

    return { width, height };
}


function animate(source: HTMLElement, target: HTMLElement) {
    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const deltaX = sourceRect.left - targetRect.left;
    const deltaY = sourceRect.top - targetRect.top;

    const dimSource = getDimension(source);
    const dimTarget = getDimension(target);
    const deltaWidth = dimSource.width / dimTarget.width;
    const deltaHeight = dimSource.height / dimTarget.height;

    target.style.transition = 'none';
    target.style.transformOrigin = '0 0';
    target.style.zIndex = '1000';
    target.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaWidth}, ${deltaHeight})`;

    requestAnimationFrame(() => {
        target.style.transition = 'transform 0.2s ease';
        target.style.transform = 'translate(0, 0)';

        const handleTransitionEnd = (event: TransitionEvent) => {
            if (event.propertyName !== 'transform' || event.target !== target) return;
            target.style.transition = '';
            target.style.transform = '';
            target.style.zIndex = '';
            target.removeEventListener('transitionend', handleTransitionEnd);
        };

        target.addEventListener('transitionend', handleTransitionEnd);
    });
}


onMounted(() => {
    const itemsSideGaleryElement = document.getElementById("itemsSideGalery");
    if (itemsSideGaleryElement) {
        new Sortable(itemsSideGaleryElement, {
            group: {
                name: 'poster-items',
                pull: true,
                put: false


            },
            swap: true,
            sort: false,
            animation: 0,
            swapClass: 'sortable-swap',

            onAdd(evt) {
                console.log(evt);
            },
            onChange(evt) {
                console.log(evt);
            },
            onEnd(event) {


            },
            onBeforeSwap(source: HTMLElement, target: HTMLElement) {

                let sourceIndex: number = Sortable.utils.index(source);
                let targetIndex: number = Sortable.utils.index(target);
                if (sourceIndex < 0 || targetIndex < 0) return false

                if (target.parentElement?.id == "posterGrid") {
                    const temp: string = itemTypes.value[sourceIndex];
                    siteStore.posterItems[targetIndex].type = temp

                    animate(source, target);

                }


                return false;
            }
        });
    }

    const itemDeleteElement = document.getElementById("itemDeleteZone");
    if (itemDeleteElement) {
        new Sortable(itemDeleteElement, {
            group: {
                name: 'poster-items',
                pull: false,
                put: true,
            },
            swap: true,
            onAdd(evt) {
                console.log(evt);
            },
            swapClass: 'sortable-swap',


        });
    }
})

</script>

<style scoped>
.sortable-swap {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
}

#itemsSideGalery {
    padding: 0.8em;
}
</style>