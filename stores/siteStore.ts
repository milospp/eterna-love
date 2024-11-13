
import WizardCanvasBlankItem from '~/components/wizard/canvas/BlankItem.vue';
import WizardCanvasItem from '~/components/wizard/canvas/Item.vue';
import { defineStore } from 'pinia'

export interface PosterItem {
    id: number,
    text: number,
    type?: string
}


export interface Poster {
    layout?: CardLayoutType,
    posterItems: PosterItem[],
    description?: string,
}


export interface SiteState {
    siteName: string
    siteDescription: string

    designerShowDeleteItemSection: boolean
    posterName1: string
    posterName2: string
    posterEdit: Poster

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

        posterEdit: {
            layout: undefined,
            posterItems: [
                { id: 0, text: 1 },
                { id: 1, text: 2 },
                { id: 2, text: 3 },
                { id: 3, text: 4 },
                { id: 4, text: 4 },
                { id: 5, text: 4 },
                // { id: 4, text: 4, type: "TOP_EMOJI" },
                // { id: 5, text: 4, type: "MSG_TIME_BAR" },
                { id: 6, text: 4 },
                { id: 7, text: 4 },
                { id: 8, text: 4 },
                { id: 9, text: 4 },
                { id: 10, text: 4 },
                { id: 11, text: 4 },
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
            return state.posterEdit.posterItems.slice(0, state.posterEdit.layout?.elementCount || 12)
        },

        hasEmptyItems(state): boolean {
            return this.posterItems.some(x => x.type == undefined)
        },

        hasDuplicateItems(state): boolean {
            let seen = new Set();
            let result = this.posterItems.some(element => {
                const isDuplicated = seen.has(element.type)
                if (element.type) isDuplicated || seen.add(element.type);
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
        }

    },
    actions: {
        setSiteName(name: string) {
            this.siteName = name
        },
        setSiteDescription(description: string) {
            this.siteDescription = description
        },
    },
})
