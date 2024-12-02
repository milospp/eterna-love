import { SmallestElements } from "./utils";

export interface PosterItem {
    id: number,
    type: ItemTypeId,
    width: number,
    height?: number,
}


export interface Poster {
    layout?: CardLayoutType,
    posterItems: PosterItem[],
    description?: string,
}

export interface CardLayoutType {
    id: string;
    elementCount: number;
    dimX: number;
    dimY: number;
    initPrice: number;
    isHot: boolean;
}

export interface ItemType {
    type_id: ItemTypeId;
    theme_id: string;
    category: CategoriesType;
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface PosterTheme {
    id: string;
    name: string;
    src: string;
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

export interface ContactData {
    fullname: { value?: string; isValid?: boolean };
    email: { value?: string; isValid?: boolean };
    phone: { value?: string; isValid?: boolean };
    street: { value?: string; isValid?: boolean };
    streetNumber: { value?: string; isValid?: boolean };
    city: { value?: string; isValid?: boolean };
    zip: { value?: string; isValid?: boolean };
    country: { value?: string; isValid?: boolean };
}

export interface CheckoutData {
    contactInfo: ContactData,
    shippingInfoForm?: 'SAME' | 'DIFFERENT',
    shippingInfo: ContactData,
    paymentInfo: {
        paymentMethod: { value?: paymentMethod; isValid?: boolean };
    },

    isOrderPlaced: boolean;

}

export interface PosterConfig {
    format?: PosterFormatOption;
    paperType?: PosterPaperTypeOption;
    frame?: PosterFrameOption;
}

export type paymentMethod = 'UPON_DELIVERY' | 'BANK_TRANSFER' | 'CARD' | 'PAYPAL' | 'APPLE_PAY';
export type CategoriesType = 'COUNT' | 'CONTENT' | 'ACTIVITY' | 'MEDIA' | 'FIRST_MESSAGE' | 'OTHER';


export type ItemTypeId =
    | null

    | 'PL_1_DOUBLE_TEXT'
    | 'PL_1_EMOJI'
    | 'PL_2_FIRST_MESSAGE'
    | 'PL_1_GM_TABLE'
    | 'PL_1_GN_TABLE'
    | 'PL_1_HOURS_CHART'
    | 'PL_2_ILY'
    | 'PL_1_LONGEST_GHOST'
    | 'PL_1_RESPONSE_TIME'
    | 'PL_1_LAUGH'
    | 'PL_1_SENT_IMAGE'
    | 'PL_1_SENT_REELS'
    | 'PL_1_SENT_VIDEO'
    | 'PL_1_TIME_SPENT'
    | 'PL_2_TIMELINE'
    | 'PL_1_TOTAL_BAR'
    | 'PL_1_TOTAL_HEART'
    | 'PL_1_VOICE'
    | 'PL_2_WEEK_PIE'
    | 'PL_1_WORDS'


    | 'M_1_EMOJI'
    | 'M_1_FIRST_MESSAGE'
    | 'M_1_GM_TABLE'
    | 'M_2_GMGN_CHART'
    | 'M_1_GN_TABLE'
    | 'M_2_HOURS_CHART'
    | 'M_1_ILY'
    | 'M_1_LAUGH'
    | 'M_1_SENT_REELS'
    | 'M_1_SENT_TIKTOK'
    | 'M_1_TIME_SPENT'
    | 'M_2_TIMELINE'
    | 'M_1_TOTAL_BAR'
    | 'M_1_TOTAL_HEART'
    | 'M_1_VOICE'
    | 'M_2_WEEK_BAR'
    | 'M_1_WORDS'


    | 'C_1_DOUBLE_TEXT'
    | 'C_1_EMOJI'
    | 'C_1_FIRST_MESSAGE'
    | 'C_1_GMGN_CHART'
    | 'C_1_GMGN_TABLE'
    | 'C_1_HOURS_CHART'
    | 'C_1_ILY'
    | 'C_1_LAUGH'
    | 'C_1_LONGEST_GHOST'
    | 'C_1_RESPONSE_TIME'
    | 'C_1_SENT_MEDIA2'
    | 'C_1_SENT_MEDIA'
    | 'C_1_SENT_REELS'
    | 'C_1_SENT_TIKTOK'
    | 'C_1_TIME_SPENT'
    | 'C_2_TIMELINE'
    | 'C_1_TOTAL_PIE'
    | 'C_1_VOICE'
    | 'C_1_WEEK_BAR'
    | 'C_2_WEEK_PIE'

    ;

export type SocialNetworkType = 'facebook' | 'instagram' | 'whatsapp' | 'telegram';
export type PlatformType = 'pc' | 'phone';

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

export type PredefinedTemplate = {
    id: string;
    name: string;
    layout: CardLayoutType;
    theme?: PosterTheme;
    items: PosterItem[];
    image: string;
}


export type TutorialStep = {
    title: string;
    description?: string;
    image: string;
};

export type TutorialVariation = 'pc_en' | 'sr' | 'default' | 'phone_sr';

export type Tutorial = {
    [key in SocialNetworkType]: {
        [key in TutorialVariation]?: TutorialStep[];
    } & { 'default': TutorialStep[] };
};


export type PosterFormat = 'A5' | 'A4' | 'A3' | 'DIGITAL'
export type PosterPaperType = 'GLOSSY' | 'MATT';
export type PosterFrame = 'NO' | 'ANYA5' | 'ANYA4' | 'ANYA3';

export type PosterFormatOption = {
    id: PosterFormat,
    name: string,
    digital: boolean,
    description?: string,
    icon?: string,
    price: number
}

export type PosterPaperTypeOption = {
    id: PosterPaperType,
    name: string,
    description?: string,
    icon?: string,
    price: number
}

export type PosterFrameOption = {
    id: PosterFrame,
    name: string,
    description?: string,
    compatibleFormats?: PosterFormat[],
    icon?: string,
    price: number
}


export type Cart = {
    title: string;
    quantity: number;
    price: number;
    hidden?: boolean
}