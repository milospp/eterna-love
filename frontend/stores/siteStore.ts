
import WizardCanvasBlankItem from '~/components/wizard/canvas/BlankItem.vue';
import WizardCanvasItem from '~/components/wizard/canvas/Item.vue';
import { defineStore } from 'pinia'
import Item from '~/components/wizard/canvas/Item.vue';
import log from 'video.js/dist/types/utils/log';


export interface SiteState {
    siteName: string
    siteDescription: string

    designerShowDeleteItemSection: boolean

    posterName1: string
    posterName2: string
    posterEdit: Poster
    posterTheme: PosterTheme | null

    posterConfig: PosterConfig,

    checkout: CheckoutData

    chatResults: {
        facebook: ChatAnalysisResult[] | null,
        instagram: ChatAnalysisResult[] | null,
        whatsapp: ChatAnalysisResult[] | null,
        telegram: ChatAnalysisResult[] | null,
    }

}

export const useSiteStore = defineStore('site', {
    state: (): SiteState => ({
        siteName: 'My Awesome Website',
        siteDescription: 'The best site ever!',
        designerShowDeleteItemSection: false,
        posterName1: '',
        posterName2: '',
        posterTheme: null,

        posterConfig: {
            format: undefined,
            paperType: undefined,
            frame: undefined,

        },

        checkout: {
            contactInfo: {
                fullname: { value: undefined, isValid: undefined },
                email: { value: undefined, isValid: undefined },
                phone: { value: undefined, isValid: undefined },
                street: { value: undefined, isValid: undefined },
                streetNumber: { value: undefined, isValid: undefined },
                city: { value: undefined, isValid: undefined },
                zip: { value: undefined, isValid: undefined },
                country: { value: 'Srbija', isValid: true },
            },
            shippingInfo: {
                fullname: { value: undefined, isValid: undefined },
                email: { value: undefined, isValid: undefined },
                phone: { value: undefined, isValid: undefined },
                street: { value: undefined, isValid: undefined },
                streetNumber: { value: undefined, isValid: undefined },
                city: { value: undefined, isValid: undefined },
                zip: { value: undefined, isValid: undefined },
                country: { value: 'Srbija', isValid: true },
            },
            shippingInfoForm: 'SAME',
            paymentInfo: {
                paymentMethod: { value: undefined, isValid: undefined },
            },
            isOrderPlaced: false
        },


        posterEdit: {
            layout: undefined,
            posterItems: [
                { id: 1, width: 1, type: null },
                { id: 2, width: 1, type: null },
                { id: 3, width: 1, type: null },
                { id: 4, width: 1, type: null },
                { id: 5, width: 1, type: null },
                { id: 6, width: 1, type: null },
                // { id: 7, type: "P1_1_TOP_EMOJI", width: 1 },
                // { id: 8, type: "P1_1_MSG_TIME_BAR", width: 1 },
                // { id: 6, width: 1, type: null },
                { id: 7, width: 1, type: null },
                { id: 8, width: 1, type: null },
                { id: 9, width: 1, type: null },
                { id: 10, width: 1, type: null },
                { id: 11, width: 1, type: null },
                { id: 12, width: 1, type: null },
                // { id: 12, width: 1 },
            ],
            description: undefined
        },

        chatResults: {
            facebook: null,
            instagram: null,
            whatsapp: null,
            telegram: null,
        }

    }),
    getters: {
        upperCaseSiteName(state): string {
            return state.siteName.toUpperCase()
        },

        posterItems(state): PosterItem[] {
            let maxItemsNo = state.posterEdit.layout?.elementCount || 12
            let posterWidth = state.posterEdit.layout?.dimX || 3

            let result: PosterItem[] = [];


            let itemsNo = 0


            for (let index = 0; index < state.posterEdit.posterItems.length; index++) {
                if (itemsNo >= maxItemsNo) break;

                const item = state.posterEdit.posterItems[index];
                if (item.width === 0) {
                    maxItemsNo += 1
                }

                let itemWidth = item.width || 1
                let itemHeight = item.height || 1

                if (itemsNo + (itemWidth * itemHeight) <= maxItemsNo) {
                    itemsNo += itemWidth * itemHeight
                    result.push(item)
                }
            }

            return result;

        },

        hasEmptyItems(state): boolean {
            console.log("Checking empty items");
            console.log(this.posterItems);
            this.posterItems.forEach(item => {
                console.log(item.type + " - " + item.width);
            });
            console.log("Finished - Checking empty items");


            return this.posterItems.some(x => x.type == undefined)
        },

        hasDuplicateItems(state): boolean {
            let seen = new Set();
            let result = this.posterItems.some(element => {
                const isDuplicated = seen.has(element.type)
                if (element.type && !isDuplicated) seen.add(element.type);
                return isDuplicated
            });
            return result
        },

        hasAnyResult(state): boolean {
            if (state.chatResults.facebook) return true
            if (state.chatResults.instagram) return true
            if (state.chatResults.whatsapp) return true
            if (state.chatResults.telegram) return true
            return false
        },

        themedItems(state): ItemType[] {
            return ALL_ITEM_TYPES.filter(x => state.posterTheme === null || x.theme_id === state.posterTheme.id)
        },

        isPosterFormatPaper(state) {
            return state.posterConfig.format ? ['A5', 'A4', 'A3'].includes(state.posterConfig.format) : false
        },
        isPosterDigital(state): boolean {
            return state.posterConfig.format?.digital === true
        }
    },
    actions: {
        setSiteName(name: string) {
            this.siteName = name
        },
        setSiteDescription(description: string) {
            this.siteDescription = description
        },
        reindexPosterItems() {
            this.posterEdit.posterItems.forEach((item, index) => {
                if (item.width === 0) return
                let nextMinId = 1

                // If id is duplicate redefine it
                if (this.posterEdit.posterItems.some(x => x !== item && x.id == item.id)) item.id = -1

                if (item.id === -1) {
                    while (this.posterEdit.posterItems.some(x => x.id == nextMinId)) { nextMinId += 1 }
                    item.id = nextMinId
                }


            })
        },
        fixPosterItemSizing() {
            console.log("BEFORE");
            this.posterEdit.posterItems.forEach(element => {
                console.log(element.width);

            });


            let maxItemsNo = this.posterEdit.layout?.elementCount || 12
            let posterWidth = this.posterEdit.layout?.dimX || 3

            // let result: PosterItem[] = [];


            let itemsNo = 0


            for (let index = 0; index < this.posterEdit.posterItems.length; index++) {
                if (itemsNo >= maxItemsNo) break;

                const item = this.posterEdit.posterItems[index];
                if (item.width === 0) continue

                let column = itemsNo % posterWidth

                let itemWidth = item.width || 1
                let itemHeight = item.height || 1

                if (column + itemWidth > posterWidth) {
                    if (itemWidth > posterWidth) continue;

                    // let blank: PosterItem = { id: -1, text: 0, width: 1 }
                    let reorderItem = this.posterEdit.posterItems.find(item => item.width === 1 && this.posterEdit.posterItems.indexOf(item) > index) || { id: -1, text: 0, width: 1, height: 1 }
                    this.posterEdit.posterItems = this.posterEdit.posterItems.filter(item => item !== reorderItem)


                    this.posterEdit.posterItems.splice(index, 0, reorderItem)
                    itemsNo += item.width

                    // Adding that reordered item
                    itemsNo += reorderItem.width
                    index += 1
                    continue;

                }


                if (itemsNo + (itemWidth * itemHeight) <= maxItemsNo) {
                    itemsNo += itemWidth * itemHeight
                } else {
                    let blank = { id: -1, text: 0, width: 1 }
                    this.posterEdit.posterItems.splice(index, 0, blank)
                    itemsNo += 1
                    continue;
                }
            }
            while (itemsNo < maxItemsNo) {
                let blank = { id: -1, text: 0, width: 1 }
                this.posterEdit.posterItems.push(blank)
                itemsNo += 1
            }
            this.posterEdit.posterItems = this.posterEdit.posterItems.slice(0, 12) // Trim if overflow


            this.reindexPosterItems()

            console.log("AFTER");
            this.posterEdit.posterItems.forEach(element => {
                console.log(element.id + " | " + element.width + " - " + element.type);

            });

        },

        deletePosterItemAtIndex(itemIndex: number) {
            const item = this.posterEdit.posterItems[itemIndex]
            const size = (item.width || 1) * (item.height || 1)

            this.posterEdit.posterItems.splice(itemIndex, 1);
            for (let i = 0; i < size; i++) {
                this.posterEdit.posterItems.splice(itemIndex, 0, { id: -1, text: 0, width: 1 });
            }
            this.fixPosterItemSizing()
        },

        setPosterTypeOnIndex(index: number, type: ItemType) {

            const getItemColumn = (item: PosterItem, items: PosterItem[], columns: number): number => {
                let column = 0
                for (let i = 0; i < items.length; i++) {
                    if (items[i] === item) break;
                    column += items[i].width || 1;
                }
                return column % columns
            }

            const oldItem: PosterItem = this.posterEdit.posterItems[index]
            const oldWidth = oldItem.width || 1
            oldItem.type = type.type_id
            oldItem.width = type.width
            oldItem.height = type.height

            if (oldWidth === type.width) return
            else if (oldWidth > type.width) {
                for (let i = 0; i < oldWidth - type.width; i++) {
                    let blank = { id: -1, text: 0 }
                    let newIndex = index + 1 + i
                    this.posterEdit.posterItems.splice(newIndex + i, 0, blank)
                }

            } else if (oldWidth < type.width) {
                const posterWidth = this.posterEdit.layout?.dimX || 3
                if (type.width > posterWidth) {
                    alert("Item is too wide")
                    return
                }

                let currentColumn = getItemColumn(oldItem, this.posterEdit.posterItems, posterWidth)
                let rightSpace = (posterWidth - 1) - currentColumn
                let leftSpace = currentColumn
                let overflow = type.width - oldWidth

                // Quick fix for animation bug
                let widthZero: PosterItem[] = []

                // Remove excess blocks



                const adjustOverflow = (space: number, direction: number, force: boolean = false) => {
                    for (let i = 0; i < space; i++) {
                        if (overflow <= 0) break;
                        let newIndex = index + direction * (i + 1);

                        if (newIndex < 0 || newIndex >= this.posterEdit.posterItems.length) break;

                        let item = this.posterEdit.posterItems[newIndex]
                        i += (item.width || 1) - 1  // skip item width

                        if (item.type == undefined || force) {
                            widthZero.push(this.posterEdit.posterItems[newIndex]);
                            overflow -= 1;
                        }
                    }
                };

                adjustOverflow(rightSpace, 1);
                adjustOverflow(leftSpace, -1);
                adjustOverflow(rightSpace, 1, true);
                adjustOverflow(leftSpace, -1, true);


                widthZero.forEach(item => {
                    if (item.width && item.width > 1) {
                        item.width -= 1
                        this.deletePosterItemAtIndex(this.posterEdit.posterItems.indexOf(item))
                        // item.type = undefined
                        widthZero = widthZero.filter(x => x !== item)
                        return
                    }
                    item.width = 0
                    item.height = 0
                })

                setTimeout(() => {
                    this.posterEdit.posterItems = this.posterEdit.posterItems.filter(x => !(widthZero.includes(x)))
                }, 200)


            }
            this.reindexPosterItems()



        },
    },
})
