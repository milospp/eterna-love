import type { PosterFrameOption } from "./types";

export const DELIVERY_PRICE = 300

export const LAYOUT_TYPES: CardLayoutType[] = [
    {
        id: '1_1',
        elementCount: 1,
        dimX: 1, dimY: 1,
        initPrice: 399,
        isHot: false
    },
    {
        id: '1_2',
        elementCount: 2,
        dimX: 1, dimY: 2,
        initPrice: 499,
        isHot: true
    },
    {
        id: '2_2',
        elementCount: 4,
        dimX: 2, dimY: 2,
        initPrice: 999,
        isHot: false
    },
    {
        id: '2_3',
        elementCount: 6,
        dimX: 2, dimY: 3,
        initPrice: 1499,
        isHot: true
    },
    {
        id: '3_3',
        elementCount: 9,
        dimX: 3, dimY: 3,
        initPrice: 1799,
        isHot: false
    },
    {
        id: '3_4',
        elementCount: 12,
        dimX: 3, dimY: 4,
        initPrice: 1999,
        isHot: true
    }
]

export const AVAILABLE_LAYOUT_TYPES: CardLayoutType[] =
    LAYOUT_TYPES.filter(x => [2, 4, 6, 9, 12].includes(x.elementCount))


export const CATEGORIES = [

]



export const ALL_ITEM_TYPES: ItemType[] = [
    { type_id: 'PL_1_DOUBLE_TEXT', theme_id: 'PASTEL_LAVANDA', category: 'OTHER', src: new URL('/public/poster/theme-items/pastel-lavanda/double-text.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_EMOJI', theme_id: 'PASTEL_LAVANDA', category: 'CONTENT', src: new URL('/public/poster/theme-items/pastel-lavanda/emoji.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_2_FIRST_MESSAGE', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/first-message-2.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'PL_1_GM_TABLE', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/gm-table.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_GN_TABLE', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/gn-table.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_HOURS_CHART', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/hours-bar.png', import.meta.url).href, alt: '102', width: 1, height: 1 },
    { type_id: 'PL_2_ILY', theme_id: 'PASTEL_LAVANDA', category: 'CONTENT', src: new URL('/public/poster/theme-items/pastel-lavanda/ily-2.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'PL_1_LONGEST_GHOST', theme_id: 'PASTEL_LAVANDA', category: 'OTHER', src: new URL('/public/poster/theme-items/pastel-lavanda/longest-ghost.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_RESPONSE_TIME', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/response-time.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_LAUGH', theme_id: 'PASTEL_LAVANDA', category: 'CONTENT', src: new URL('/public/poster/theme-items/pastel-lavanda/laugh.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_SENT_IMAGE', theme_id: 'PASTEL_LAVANDA', category: 'MEDIA', src: new URL('/public/poster/theme-items/pastel-lavanda/sent-image.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_SENT_REELS', theme_id: 'PASTEL_LAVANDA', category: 'MEDIA', src: new URL('/public/poster/theme-items/pastel-lavanda/sent-reels.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_SENT_VIDEO', theme_id: 'PASTEL_LAVANDA', category: 'MEDIA', src: new URL('/public/poster/theme-items/pastel-lavanda/sent-video.png', import.meta.url).href, alt: '102', width: 1, height: 1 },
    { type_id: 'PL_1_TIME_SPENT', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/time-spent.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_2_TIMELINE', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/timeline-2.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'PL_1_TOTAL_BAR', theme_id: 'PASTEL_LAVANDA', category: 'COUNT', src: new URL('/public/poster/theme-items/pastel-lavanda/total-bar.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_TOTAL_HEART', theme_id: 'PASTEL_LAVANDA', category: 'COUNT', src: new URL('/public/poster/theme-items/pastel-lavanda/total-heart.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_1_VOICE', theme_id: 'PASTEL_LAVANDA', category: 'MEDIA', src: new URL('/public/poster/theme-items/pastel-lavanda/voice.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'PL_2_WEEK_PIE', theme_id: 'PASTEL_LAVANDA', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/pastel-lavanda/week-pie-2.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'PL_1_WORDS', theme_id: 'PASTEL_LAVANDA', category: 'CONTENT', src: new URL('/public/poster/theme-items/pastel-lavanda/words.png', import.meta.url).href, alt: '101', width: 1, height: 1 },


    { type_id: 'M_1_EMOJI', theme_id: 'MODERN', category: 'CONTENT', src: new URL('/public/poster/theme-items/modern/emoji.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_FIRST_MESSAGE', theme_id: 'MODERN', category: 'CONTENT', src: new URL('/public/poster/theme-items/modern/first-message.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_GM_TABLE', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/gm-table.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_2_GMGN_CHART', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/gmgn-chart-2.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'M_1_GN_TABLE', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/gn-table.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_2_HOURS_CHART', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/hours-chart-2.png', import.meta.url).href, alt: '102', width: 2, height: 1 },
    { type_id: 'M_1_ILY', theme_id: 'MODERN', category: 'CONTENT', src: new URL('/public/poster/theme-items/modern/ily.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_LAUGH', theme_id: 'MODERN', category: 'CONTENT', src: new URL('/public/poster/theme-items/modern/laugh.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_SENT_REELS', theme_id: 'MODERN', category: 'MEDIA', src: new URL('/public/poster/theme-items/modern/sent-reels.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_SENT_TIKTOK', theme_id: 'MODERN', category: 'MEDIA', src: new URL('/public/poster/theme-items/modern/sent-tiktok.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_TIME_SPENT', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/time-spent.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_2_TIMELINE', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/timeline-2.png', import.meta.url).href, alt: '102', width: 2, height: 1 },
    { type_id: 'M_1_TOTAL_BAR', theme_id: 'MODERN', category: 'COUNT', src: new URL('/public/poster/theme-items/modern/total-bar.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_TOTAL_HEART', theme_id: 'MODERN', category: 'COUNT', src: new URL('/public/poster/theme-items/modern/total-heart.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_1_VOICE', theme_id: 'MODERN', category: 'MEDIA', src: new URL('/public/poster/theme-items/modern/voice.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'M_2_WEEK_BAR', theme_id: 'MODERN', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/modern/week-bar.png', import.meta.url).href, alt: '101', width: 2, height: 1 },
    { type_id: 'M_1_WORDS', theme_id: 'MODERN', category: 'CONTENT', src: new URL('/public/poster/theme-items/modern/words.png', import.meta.url).href, alt: '101', width: 1, height: 1 },


    { type_id: 'C_1_DOUBLE_TEXT', theme_id: 'CUTE', category: 'OTHER', src: new URL('/public/poster/theme-items/cute/double-text.png', import.meta.url).href, alt: '101', width: 1, height: 1 },
    { type_id: 'C_1_EMOJI', theme_id: 'CUTE', category: 'CONTENT', src: new URL('/public/poster/theme-items/cute/emoji.png', import.meta.url).href, alt: '102', width: 1, height: 1 },
    { type_id: 'C_1_FIRST_MESSAGE', theme_id: 'CUTE', category: 'CONTENT', src: new URL('/public/poster/theme-items/cute/first-message.png', import.meta.url).href, alt: '103', width: 1, height: 1 },
    { type_id: 'C_1_GMGN_CHART', theme_id: 'CUTE', category: 'CONTENT', src: new URL('/public/poster/theme-items/cute/gmgn-chart.png', import.meta.url).href, alt: '104', width: 1, height: 1 },
    { type_id: 'C_1_GMGN_TABLE', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/gmgn-table.png', import.meta.url).href, alt: '105', width: 1, height: 1 },
    { type_id: 'C_1_HOURS_CHART', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/hours-chart.png', import.meta.url).href, alt: '106', width: 1, height: 1 },
    { type_id: 'C_1_ILY', theme_id: 'CUTE', category: 'CONTENT', src: new URL('/public/poster/theme-items/cute/ily.png', import.meta.url).href, alt: '107', width: 1, height: 1 },
    { type_id: 'C_1_LAUGH', theme_id: 'CUTE', category: 'CONTENT', src: new URL('/public/poster/theme-items/cute/laugh.png', import.meta.url).href, alt: '108', width: 1, height: 1 },
    { type_id: 'C_1_LONGEST_GHOST', theme_id: 'CUTE', category: 'OTHER', src: new URL('/public/poster/theme-items/cute/longest-ghost.png', import.meta.url).href, alt: '109', width: 1, height: 1 },
    { type_id: 'C_1_RESPONSE_TIME', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/response-time.png', import.meta.url).href, alt: '110', width: 1, height: 1 },
    { type_id: 'C_1_SENT_MEDIA2', theme_id: 'CUTE', category: 'MEDIA', src: new URL('/public/poster/theme-items/cute/sent-media-alt.png', import.meta.url).href, alt: '111', width: 1, height: 1 },
    { type_id: 'C_1_SENT_MEDIA', theme_id: 'CUTE', category: 'MEDIA', src: new URL('/public/poster/theme-items/cute/sent-media.png', import.meta.url).href, alt: '112', width: 1, height: 1 },
    { type_id: 'C_1_SENT_REELS', theme_id: 'CUTE', category: 'MEDIA', src: new URL('/public/poster/theme-items/cute/sent-reels.png', import.meta.url).href, alt: '113', width: 1, height: 1 },
    { type_id: 'C_1_SENT_TIKTOK', theme_id: 'CUTE', category: 'MEDIA', src: new URL('/public/poster/theme-items/cute/sent-tiktok.png', import.meta.url).href, alt: '114', width: 1, height: 1 },
    { type_id: 'C_1_TIME_SPENT', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/time-spent.png', import.meta.url).href, alt: '115', width: 1, height: 1 },
    { type_id: 'C_2_TIMELINE', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/timeline-2.png', import.meta.url).href, alt: '116', width: 2, height: 1 },
    { type_id: 'C_1_TOTAL_PIE', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/total-pie.png', import.meta.url).href, alt: '117', width: 1, height: 1 },
    { type_id: 'C_1_VOICE', theme_id: 'CUTE', category: 'MEDIA', src: new URL('/public/poster/theme-items/cute/voice.png', import.meta.url).href, alt: '118', width: 1, height: 1 },
    { type_id: 'C_1_WEEK_BAR', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/week-bar.png', import.meta.url).href, alt: '119', width: 1, height: 1 },
    { type_id: 'C_2_WEEK_PIE', theme_id: 'CUTE', category: 'ACTIVITY', src: new URL('/public/poster/theme-items/cute/week-pie.png', import.meta.url).href, alt: '120', width: 2, height: 1 },

] as const;

export const ALL_THEMES: PosterTheme[] = [
    { id: 'CUTE', name: 'Slatko', src: new URL('/public/poster/themes/cute.jpg', import.meta.url).href },
    { id: 'MODERN', name: 'Moderno', src: new URL('/public/poster/themes/modern.png', import.meta.url).href },
    { id: 'PASTEL_LAVANDA', name: 'Pastelno plavo', src: new URL('/public/poster/themes/pastel_lavanda.png', import.meta.url).href },
    // { id: 'VIBRANT', name: 'Vibrantno', src: new URL('/public/poster/themes/vibrant.png', import.meta.url).href },
    // { id: 'PASTEL_PINK', name: 'Pastelno pink', src: new URL('/public/poster/themes/pastel_pink.png', import.meta.url).href },
    // { id: 'PASTEL_BEIGE', name: 'Pastelno bež', src: new URL('/public/poster/themes/pastel_beige.png', import.meta.url).href },
    // { id: 'PASTEL_ORANGE', name: 'Pastelno narandžasto', src: new URL('/public/poster/themes/pastel_orange.png', import.meta.url).href },

]


export const PREDEFINED_TEMPLATES: PredefinedTemplate[] = [
    {
        id: 'P4_3',
        name: 'Pastel 3x4',
        items: [
            { id: 1, type: "PL_1_TOTAL_BAR", width: 1 },
            { id: 2, type: "PL_1_TIME_SPENT", width: 1 },
            { id: 3, type: "PL_1_SENT_VIDEO", width: 1 },
            { id: 4, type: "PL_2_ILY", width: 2 },
            { id: 5, type: "PL_1_VOICE", width: 1 },
            { id: 6, type: "PL_1_SENT_IMAGE", width: 1 },
            { id: 7, type: "PL_2_FIRST_MESSAGE", width: 2 },
            { id: 8, type: "PL_2_TIMELINE", width: 2 },
            { id: 9, type: "PL_1_RESPONSE_TIME", width: 1 },
        ],
        layout: LAYOUT_TYPES[5],
        theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
        image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-3-4.jpg', import.meta.url).href
    },
    {
        id: 'C3_3',
        name: 'Cute 3x3',
        items: [
            { id: 1, type: "C_1_HOURS_CHART", width: 1 },
            { id: 2, type: "C_1_ILY", width: 1 },
            { id: 3, type: "C_1_EMOJI", width: 1 },
            { id: 4, type: "C_1_GMGN_CHART", width: 1 },
            { id: 5, type: "C_1_WEEK_BAR", width: 1 },
            { id: 6, type: "C_1_TOTAL_PIE", width: 1 },
            { id: 7, type: "C_2_WEEK_PIE", width: 2 },
            { id: 8, type: "C_1_LONGEST_GHOST", width: 1 },
        ],
        layout: LAYOUT_TYPES[4],
        theme: ALL_THEMES.find(x => x.id === "CUTE"),
        image: new URL('/public/poster/examples/eternalove-example-cute-3-3.jpg', import.meta.url).href

    },
    {
        id: 'M2_3',
        name: 'Modern 2x3',
        items: [
            { id: 1, type: "M_1_FIRST_MESSAGE", width: 1 },
            { id: 2, type: "M_1_ILY", width: 1 },
            { id: 3, type: "M_2_WEEK_BAR", width: 2 },
            { id: 4, type: "M_1_SENT_REELS", width: 1 },
            { id: 5, type: "M_1_WORDS", width: 1 },

        ],
        layout: LAYOUT_TYPES[3],
        theme: ALL_THEMES.find(x => x.id === 'MODERN'),
        image: new URL('/public/poster/examples/eternalove-example-modern-2-3.jpg', import.meta.url).href
    },
    {
        id: 'P2_2',
        name: 'Pastel 2x2',
        items: [
            { id: 1, type: "PL_1_TOTAL_HEART", width: 1 },
            { id: 2, type: "PL_1_RESPONSE_TIME", width: 1 },
            { id: 3, type: "PL_2_FIRST_MESSAGE", width: 2 },

        ],
        layout: LAYOUT_TYPES[2],
        theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
        image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-2-2.jpg', import.meta.url).href
    },




    // {
    //     id: 'PL3_4',
    //     name: '3x4',
    //     items: [
    //         { id: 1, type: "C_1_DOUBLE_TEXT", width: 2 },
    //     ],
    //     layout: LAYOUT_TYPES[5],
    //     theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
    //     image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-3-4.jpg', import.meta.url).href
    // },
    {
        id: 'PL3_3',
        name: 'Pastel 3x3',
        items: [
            { id: 1, type: "PL_1_EMOJI", width: 1 },
            { id: 2, type: "PL_1_WORDS", width: 1 },
            { id: 3, type: "PL_1_TOTAL_HEART", width: 1 },
            { id: 4, type: "PL_1_HOURS_CHART", width: 1 },
            { id: 5, type: "PL_2_WEEK_PIE", width: 2 },
            { id: 6, type: "PL_1_GM_TABLE", width: 1 },
            { id: 7, type: "PL_1_LAUGH", width: 1 },
            { id: 8, type: "PL_1_GN_TABLE", width: 1 },
        ],
        layout: LAYOUT_TYPES[4],
        theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
        image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-3-3.jpg', import.meta.url).href
    },
    {
        id: 'PL2_3',
        name: 'Pastel 2x3',
        items: [
            { id: 1, type: "PL_1_TOTAL_BAR", width: 1 },
            { id: 2, type: "PL_1_SENT_IMAGE", width: 1 },
            { id: 3, type: "PL_2_ILY", width: 2 },
            { id: 4, type: "PL_2_TIMELINE", width: 2 },
            { id: 5, type: "PL_1_WORDS", width: 1 },
        ],
        layout: LAYOUT_TYPES[3],
        theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
        image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-2-3.jpg', import.meta.url).href
    },
    // {
    //     id: 'PL2_2',
    //     name: '3x4',
    //     items: [
    //         { id: 1, type: "C_1_DOUBLE_TEXT", width: 2 },
    //     ],
    //     layout: LAYOUT_TYPES[2],
    //     theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
    //     image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-2-2.jpg', import.meta.url).href
    // },
    {
        id: 'PL1_2',
        name: 'Pastel 1x2',
        items: [
            { id: 1, type: "PL_1_TOTAL_BAR", width: 1 },
            { id: 2, type: "PL_1_WORDS", width: 1 },
        ],
        layout: LAYOUT_TYPES[1],
        theme: ALL_THEMES.find(x => x.id === 'PASTEL_LAVANDA'),
        image: new URL('/public/poster/examples/eternalove-example-pastel-lavanda-1-2.jpg', import.meta.url).href
    },

    {
        id: 'M3_4',
        name: 'Modern 3x4',
        items: [
            { id: 1, type: "M_1_ILY", width: 1 },
            { id: 2, type: "M_1_TOTAL_HEART", width: 1 },
            { id: 3, type: "M_1_WORDS", width: 1 },
            { id: 4, type: "M_1_GM_TABLE", width: 1 },
            { id: 5, type: "M_2_TIMELINE", width: 2 },
            { id: 6, type: "M_2_GMGN_CHART", width: 2 },
            { id: 7, type: "M_1_EMOJI", width: 1 },
            { id: 8, type: "M_1_LAUGH", width: 1 },
            { id: 9, type: "M_1_FIRST_MESSAGE", width: 1 },
            { id: 10, type: "M_1_TIME_SPENT", width: 1 },
        ],
        layout: LAYOUT_TYPES[5],
        theme: ALL_THEMES.find(x => x.id === 'MODERN'),
        image: new URL('/public/poster/examples/eternalove-example-modern-3-4.jpg', import.meta.url).href
    },
    {
        id: 'M3_3',
        name: 'Modern 3x3',
        items: [
            { id: 1, type: "M_2_TIMELINE", width: 2 },
            { id: 2, type: "M_1_VOICE", width: 1 },
            { id: 3, type: "M_1_GM_TABLE", width: 1 },
            { id: 4, type: "M_1_TOTAL_BAR", width: 1 },
            { id: 5, type: "M_1_GN_TABLE", width: 1 },
            { id: 6, type: "M_1_LAUGH", width: 1 },
            { id: 7, type: "M_2_WEEK_BAR", width: 2 },
        ],
        layout: LAYOUT_TYPES[4],
        theme: ALL_THEMES.find(x => x.id === 'MODERN'),
        image: new URL('/public/poster/examples/eternalove-example-modern-3-3.jpg', import.meta.url).href
    },
    // {
    //     id: 'M2_3',
    //     name: '3x4',
    //     items: [
    //         { id: 1, type: "C_1_DOUBLE_TEXT", width: 2 },
    //     ],
    //     layout: LAYOUT_TYPES[3],
    //     theme: ALL_THEMES.find(x => x.id === 'MODERN'),
    //     image: new URL('/public/poster/examples/eternalove-example-modern-2-3.jpg', import.meta.url).href
    // },
    {
        id: 'M2_2',
        name: 'Modern 2x2',
        items: [
            { id: 1, type: "M_1_TIME_SPENT", width: 1 },
            { id: 2, type: "M_1_GN_TABLE", width: 1 },
            { id: 3, type: "M_1_LAUGH", width: 1 },
            { id: 4, type: "M_1_WORDS", width: 1 },
        ],
        layout: LAYOUT_TYPES[2],
        theme: ALL_THEMES.find(x => x.id === 'MODERN'),
        image: new URL('/public/poster/examples/eternalove-example-modern-2-2.jpg', import.meta.url).href
    },
    {
        id: 'M1_2',
        name: 'Modern 1x2',
        items: [
            { id: 1, type: "M_1_ILY", width: 1 },
            { id: 2, type: "M_1_FIRST_MESSAGE", width: 1 },

        ],
        layout: LAYOUT_TYPES[1],
        theme: ALL_THEMES.find(x => x.id === 'MODERN'),
        image: new URL('/public/poster/examples/eternalove-example-modern-1-2.jpg', import.meta.url).href
    },

    // Cute
    {
        id: 'C3_4',
        name: 'Cute 3x4',
        items: [
            { id: 1, type: "C_1_TOTAL_PIE", width: 1 },
            { id: 2, type: "C_1_FIRST_MESSAGE", width: 1 },
            { id: 3, type: "C_1_ILY", width: 1 },
            { id: 4, type: "C_2_WEEK_PIE", width: 2 },
            { id: 5, type: "C_1_LAUGH", width: 1 },
            { id: 6, type: "C_1_HOURS_CHART", width: 1 },
            { id: 7, type: "C_1_RESPONSE_TIME", width: 1 },
            { id: 8, type: "C_1_SENT_TIKTOK", width: 1 },
            { id: 9, type: "C_2_TIMELINE", width: 2 },
            { id: 10, type: "C_1_EMOJI", width: 1 },
        ],
        layout: LAYOUT_TYPES[5],
        theme: ALL_THEMES.find(x => x.id === 'CUTE'),
        image: new URL('/public/poster/examples/eternalove-example-cute-3-4.jpg', import.meta.url).href
    },
    // {
    //     id: 'C3_3',
    //     name: '3x4',
    //     items: [
    //         { id: 1, type: "C_1_DOUBLE_TEXT", width: 2 },
    //     ],
    //     layout: LAYOUT_TYPES[4],
    //     theme: ALL_THEMES.find(x => x.id === 'CUTE'),
    //     image: new URL('/public/poster/examples/eternalove-example-cute-3-3.jpg', import.meta.url).href
    // },
    {
        id: 'C2_3',
        name: 'Cute 2x3',
        items: [
            { id: 1, type: "C_1_LAUGH", width: 1 },
            { id: 2, type: "C_1_SENT_MEDIA2", width: 1 },
            { id: 3, type: "C_2_TIMELINE", width: 2 },
            { id: 4, type: "C_1_VOICE", width: 1 },
            { id: 5, type: "C_1_FIRST_MESSAGE", width: 1 },
        ],
        layout: LAYOUT_TYPES[3],
        theme: ALL_THEMES.find(x => x.id === 'CUTE'),
        image: new URL('/public/poster/examples/eternalove-example-cute-2-3.jpg', import.meta.url).href
    },
    {
        id: 'C2_2',
        name: 'Cute 2x2',
        items: [
            { id: 1, type: "C_1_ILY", width: 1 },
            { id: 2, type: "C_1_TOTAL_PIE", width: 1 },
            { id: 3, type: "C_1_GMGN_TABLE", width: 1 },
            { id: 4, type: "C_1_VOICE", width: 1 },
        ],
        layout: LAYOUT_TYPES[2],
        theme: ALL_THEMES.find(x => x.id === 'CUTE'),
        image: new URL('/public/poster/examples/eternalove-example-cute-2-2.jpg', import.meta.url).href
    },
    {
        id: 'C1_2',
        name: 'Cute 1x2',
        items: [
            { id: 1, type: "C_1_FIRST_MESSAGE", width: 2 },
            { id: 2, type: "C_1_TIME_SPENT", width: 2 },
        ],
        layout: LAYOUT_TYPES[1],
        theme: ALL_THEMES.find(x => x.id === 'CUTE'),
        image: new URL('/public/poster/examples/eternalove-example-cute-1-2.jpg', import.meta.url).href
    },


]


export const HERO_TITLES: string[] = [
    'Svaka poruka ima priču – EternaLove je otkriva',
    'Statistika ljubavi – Otkrijte uz EternaLove',
    'Razgovori u brojkama',
    'Pratite evoluciju vaše veze ',
    'Razotkrijte obrasce ljubavi',
    'Dopustite da statistika progovori',
    'Pratite puls svojih razgovora',
    'Vizuelizujte vašu ljubav ',
    'Statistika koja donosi bliskost ',
    'Grafikon emocija'

]


export const POSTER_FORMATS: PosterFormatOption[] = [
    {
        id: 'DIGITAL',
        name: "Digitalno",
        digital: true,
        description: "Saljemo vam sliku na email",
        icon: 'spark',
        price: 0
    },
    {
        id: 'A5',
        name: "Mali poster (A5)",
        digital: false,
        // description: "148mm x 210mm",
        icon: 'paper',
        price: 299
    },
    {
        id: 'A4',
        name: "Srednji poster (A4)",
        digital: false,
        // description: "210mm x 297mm",
        icon: 'paper',
        price: 399
    },
    {
        id: 'A3',
        name: "Veliki poster (A3)",
        digital: false,
        // description: "297mm x 420mm",
        icon: 'paper',
        price: 499
    }
]

export const PAPER_TYPE: PosterPaperTypeOption[] = [
    {
        id: 'MATT',
        name: "Mat",
        icon: 'matt',
        price: 0
    },
    {
        id: 'GLOSSY',
        name: "Sjajno",
        icon: 'glossy',
        price: 99
    }
]



export const FRAME_TYPES: PosterFrameOption[] = [
    {
        id: 'NO',
        name: "Bez rama",
        price: 0,
    },
    {
        id: 'ANYA5',
        name: "Sa ramom",
        icon: 'frame',
        compatibleFormats: ['A5'],
        price: 249
    },
    {
        id: 'ANYA4',
        name: "Sa ramom",
        icon: 'frame',
        compatibleFormats: ['A4'],
        price: 349
    },
    {
        id: 'ANYA3',
        name: "Sa ramom",
        icon: 'frame',
        compatibleFormats: ['A3'],
        price: 449
    }
]