import { SmallestElements } from "./utils";

export interface CardLayoutType {
    id: number;
    elementCount: number;
    dimX: number;
    dimY: number;
    initPrice: number;
    isHot: boolean;
}

export interface ItemType {
    type_id: string;
    src: string;
    alt: string;
}

export interface ChatObject {
    chat_id: string;
    chat_name: string;
    chat_title?: string;
    indexed_name?: string;
    number_of_chats?: number;
    first_chat_date?: string;
    first_chat_timestamp?: number;
    last_chat_date?: string;
    last_chat_timestamp?: number;
    isGroup: boolean;

}


export const LAYOUT_TYPES: CardLayoutType[] = [
    {
        id: 1,
        elementCount: 1,
        dimX: 1, dimY: 1,
        initPrice: 399,
        isHot: false
    },
    {
        id: 2,
        elementCount: 2,
        dimX: 1, dimY: 2,
        initPrice: 499,
        isHot: true
    },
    {
        id: 3,
        elementCount: 4,
        dimX: 2, dimY: 2,
        initPrice: 699,
        isHot: false
    },
    {
        id: 4,
        elementCount: 6,
        dimX: 2, dimY: 3,
        initPrice: 899,
        isHot: true
    },
    {
        id: 5,
        elementCount: 9,
        dimX: 3, dimY: 3,
        initPrice: 1099,
        isHot: false
    },
    {
        id: 6,
        elementCount: 12,
        dimX: 3, dimY: 4,
        initPrice: 1299,
        isHot: true
    }
]

export const AVAILABLE_LAYOUT_TYPES: CardLayoutType[] =
    LAYOUT_TYPES.filter(x => [2, 4, 6, 9, 12].includes(x.elementCount))


export const ALL_ITEM_TYPES: ItemType[] = [
    { type_id: 'MSG_COUNT_BAR', src: new URL(`/public/chart_examples/1.png`, import.meta.url).href, alt: '1' },
    { type_id: 'GN_HOURS', src: new URL('/public/chart_examples/2.png', import.meta.url).href, alt: '2' },
    { type_id: 'TOP_EMOJI', src: new URL('/public/chart_examples/3.png', import.meta.url).href, alt: '3' },
    { type_id: 'LAUGH_COUNT', src: new URL('/public/chart_examples/4.png', import.meta.url).href, alt: '4' },
    { type_id: 'MSG_COUNT_HEART', src: new URL('/public/chart_examples/5.png', import.meta.url).href, alt: '5' },
    { type_id: 'GM_HOURS', src: new URL('/public/chart_examples/6.png', import.meta.url).href, alt: '6' },
    { type_id: 'MSG_TIME_BAR', src: new URL('/public/chart_examples/7.png', import.meta.url).href, alt: '7' },
    { type_id: 'MOST_FREQUENT_WORDS', src: new URL('/public/chart_examples/8.png', import.meta.url).href, alt: '8' }
]

export type SocialNetworkType = 'facebook' | 'instagram' | 'whatsapp' | 'telegram';

export type PhraseCountKeys = 'morningCount' | 'nightCount';
export type PhraseListKeys = 'phraseList' | 'nightList' | 'morningList';
// export interface ParticipantChatAnalysisResult {

// }


export interface ChatAnalysisResult {
    sender: string;
    totalWordCount: number;
    totalMessageCount: number;
    countPerHour: Record<string, number>;
    countPerWeekDay: Record<string, number>;
    countPerWeekNumber: Record<string, number>;
    countPerDays: Record<string, number>;

    wordCountPerHour: Record<string, number>;
    wordCountPerWeekDay: Record<string, number>;
    wordCountPerWeekNumber: Record<string, number>;
    wordCountPerDays: Record<string, number>;

    wordFrequency: Record<string, number>;
    // wordFrequencyCount: Record<string, number>;
    // wordFrequencyStem: Record<string, number>;
    // wordFrequencyStemCount: Record<string, number>;
    phraseList: Record<string, number>;
    // phraseStemCount: Record<string, number>;
    morningCount: number;
    morningList: Record<string, number>;
    // morningCountStem: number;
    // morningListStem: Record<string, number>;
    nightCount: number;
    nightList: Record<string, number>;
    // nightCountStem: number;
    // nightListStem: Record<string, number>;
    emojiCount: Record<string, number>;
    laughCount: number;
    laughs: Record<string, number>;
    longestLaugh: { c: string; l: number };

    reels: number;
    posts: number;
    story: number;
    otherIgLink: number;
    ttLink: number;
    otherLinks: number;
    photos: number;
    videos: number;
    voiceMessages: number;
    voiceMessagesDuration: number;
    reactionsSent: number;
    reactionsReceived: number;
    selfReactions: number;
    calls: number;
    callsDuration: number;
    callsNoAnswer: number;

    timeSpent: number;
    timeToRespond: number[];
    timeToRespondAvg: number;
    // doubleText: number[];
    doubleTextCount: number;
    doubleTextAverage: number;
    longestResponse: number;

    ghostingCount: number;

    averageWords: number;
    other: number;

    firstMessages: SmallestElements;
}

export type WAMessage = {
    datetime: Object;
    date: string | null;
    time: string | null;
    sender: string | null;
    command: boolean;
    content: string;
};