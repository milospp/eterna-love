import log from "video.js/dist/types/utils/log";
import type { ChatAnalysisResult, SocialNetworkType, WAMessage } from "./constants";
import { DateTime } from 'luxon';


export class ChatAnalysis {
    constructor(type: SocialNetworkType) {
        this.type = type;
    }

    type: SocialNetworkType;
    results: ChatAnalysisResult[] = [];
    participants: string[] = [];

    local_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    morningPhrases = ["jutro", "jutric", "gm", "morning"];
    night_phrases = ["laku noc", "noc", "lepo spavaj", "lkn", "ln"]
    other_phrases = ["volim te", "moja ljubav", "te volim", "ljubavi"]
    stop_word = ["i", "u", "je", "da", "se", "na", "za", "sa", "su", "kao", "ali", "ili", "to", "od", "do", "po", "što", "će", "mi", "ti", "on", "ona", "ono", "mi", "vi", "oni", "one", "ko", "ako", "šta", "gde", "kada", "kako", "već", "još", "samo", "pa", "ni", "niti", "te", "da li", "kad", "svaki", "svi", "sve", "ništa", "niko", "nijedan", "nijedna", "nijedno", "preko", "između", "ispod", "iznad", "ispred", "iza", "unutar", "spolja", "uz", "kroz", "bez", "tokom", "protiv", "osim", "prema", "iza", "među", "nekad", "ikad", "uvek", "sada", "nekada", "skoro", "nekako", "neki", "neka", "neko", "svako", "neko", "nekoji", "nekoga", "kome", "koga", "koji", "koja", "koje", "kojih", "čiji", "čija", "čije", "ovaj", "ova", "ovo", "onaj", "ona", "ono", "jedan", "takav", "takva", "takvo", "tako", "tad", "tada", "gde", "ovde", "onde", "tamo", "ovamo", "onamo", "Dotle", "ceo", "cela", "celo", "ce", "su", "moj", "moja", "moje", "tvoj", "tvoja", "tvoje", "njegov", "njegova", "njegovo", "njen", "njena", "njeno", "njihova", "njihovo", "naš", "naša", "naše", "vaš", "vaša", "vaše", "im", "jeste", "nije", "imao", "imala", "imali", "nemam", "nemaš", "nema", "nemamo", "nemate", "nemaju", "biti", "bio", "bila", "bilo", "bili", "da li", "hoće", "hoću", "hoćeš", "hoćemo", "hoćete", "može", "možeš", "možemo", "možete", "mogu", "želi", "želim", "želiš", "želimo", "želite", "žele", "mora", "moram", "moraš", "moramo", "morate", "moraju", "treba", "trebam", "trebaš", "trebamo", "trebate", "trebaju", "će", "ćeš", "ćemo", "ćete", "oni", "one", "ona", "njihov", "njihove", "njihovi", "svoji", "svoja", "svoju", "sve", "svih", "svega", "svemu", "svoje", "svoga", "svojoj", "svojim", "svoju", "ja", "a", "al", "si", "me", "bi", "bih", "cu", "sam"]

    lastMessage: any | null = null;
    doubleTextScore = 0
    lastChatMessage: any | null = null;

    analyiseChat(messagesString: string) {
        // TEMP
        this.type = this.type || "INSTAGRAM";

        let messages: Object = this.getMessagesObject(messagesString)
        console.log(messages);


        // this.initResults();

        this.getChatMessages(messages).forEach(message => {
            this.analyseMessage(message)
            this.lastMessage = message;
        });
        return this.results
    }

    getMessagesObject(messagesString: string) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                return JSON.parse(messagesString);
            case "telegram":
                return JSON.parse(messagesString);
            case "whatsapp":
                return this.prepareWAMessage(messagesString.split("\n"));

        }
    }

    prepareWAMessage(lines: string[]) {
        let messages: WAMessage[] = []
        lines.forEach(line => {
            let isCommand = hasInvisibleChars(line)
            line = removeInvisibleChars(line).trim()
            const match = line.match(/^\[(\d{1,2})\.(\d{1,2})\.(\d{2})., (\d{2}:\d{2}:\d{2})\] ~?\s*(.+?): (.+)$/);
            if (match) {
                const [, day, month, year, time, sender, content] = match;

                // Kreiranje objekta datuma i vremena sa Luxonom
                const dateTime = DateTime.fromFormat(`${day}.${month}.20${year}, ${time}`, "d.M.yy, HH:mm:ss");

                messages.push({
                    datetime: dateTime, // ISO format datuma
                    date: dateTime.toISODate(), // ISO format datuma
                    time: dateTime.toISOTime(), // ISO format vremena
                    command: isCommand,
                    sender,
                    content
                });
            } else {
                if (line.trim() !== "") {
                    messages[messages.length - 1]["content"] += " " + line;
                }
            }
        });

        return { messages };
    }
    // initResults() {
    //     this.participants = this.getParticipants();
    //     this.participants.forEach(participant => {


    //         this.results.push(this.generateBlankResult(participant))
    //     });
    // }

    generateBlankResult(participant: string): ChatAnalysisResult {
        return {
            sender: participant,
            totalWordCount: 0,
            totalMessageCount: 0,
            countPerHour: {},
            countPerWeekDay: {},
            countPerWeekNumber: {},
            countPerDays: {},
            wordCountPerHour: {},
            wordCountPerWeekDay: {},
            wordCountPerWeekNumber: {},
            wordCountPerDays: {},
            wordFrequency: {},
            phraseList: {},
            morningCount: 0,
            morningList: {},
            nightCount: 0,
            nightList: {},
            emojiCount: {},
            laughCount: 0,
            laughs: {},
            longestLaugh: { c: "", l: 0 },
            reels: 0,
            posts: 0,
            story: 0,
            otherIgLink: 0,
            ttLink: 0,
            otherLinks: 0,
            photos: 0,
            videos: 0,
            voiceMessages: 0,
            reactionsSent: 0,
            reactionsReceived: 0,
            selfReactions: 0,
            calls: 0,
            callsDuration: 0,
            callsNoAnswer: 0,
            timeSpent: 0,
            timeToRespond: [],
            timeToRespondAvg: 0,
            doubleTextCount: 0,
            doubleTextAverage: 0,
            longestResponse: 0,
            ghostingCount: 0,
            averageWords: 0,
            other: 0,

            firstMessages: new SmallestElements()
        }
    }

    // getParticipants() {
    //     switch (this.type) {
    //         case "facebook":
    //         case "instagram":
    //             return this.chat["participants"].map(x => x["name"]);
    //         case "telegram":
    //             return this.chat["messages"];
    //     }
    //     return [];
    // }

    getChatMessages(chat: Object) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                return chat["messages"];
            case "telegram":
                return chat["messages"];
            case "whatsapp":
                return chat["messages"];
        }
    }



    analyseMessage(message: Object) {
        if (this.ignoreMessage(message)) return;

        let senderIndex = this.getParticipantIndex(this.getSender(message));
        // analyseChatTime();

        if (this.analyseShares(message, senderIndex)) { }
        else if (this.analysePhotos(message, senderIndex)) { }
        else if (this.analyseVideos(message, senderIndex)) { }
        else if (this.analyseAudio(message, senderIndex)) { }
        else if (this.analyseCalls(message, senderIndex)) { }
        else if (this.analyseChatContent(message, senderIndex)) { }


        this.analyseReactions(message, senderIndex);
        this.analyseFirstMessage(message)
        this.analyseRespondTime(message, senderIndex)
        this.analyseTimeSpent(message, senderIndex)
        this.analyseDoubleText(message, senderIndex)
    }

    ignoreMessage(message: Object) {
        switch (this.type) {
            case "facebook":
            case "instagram":
            case "telegram":
                return false;

            case "whatsapp":
                let content: string = message?.["content"]
                if (content?.includes("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.")) return true;
                return false;
        }
    }

    analyseInstagramMessage(message: Object, results: Object[]) {
        let sender = message["sender_name"];

        let data = results.find(x => x.sender === sender)
        if (!data) {
            data = {
                sender: sender,
                messageCount: 0
            }
            results.push(data)
        }

        // data["messageCount"] += 1;

        if (message["content"]?.toLowerCase()?.includes('smara')) {
            data["messageCount"] += 1;
        }


    }

    getSender(message: Object) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                return message["sender_name"];

            case "telegram":
            case "whatsapp":
                return message["sender"];

        }
    }

    getParticipantIndex(sender: string) {
        let index = this.participants.indexOf(sender);
        if (index === -1) {
            this.participants.push(sender);
            index = this.participants.indexOf(sender);
            this.results.push(this.generateBlankResult(sender))
        }
        return index;
    }



    analyseShares(message: Object, sender: number) {
        let links: string[] = []
        let content = ""
        switch (this.type) {
            case "facebook":
            case "instagram":
                let share = message["share"]
                if (!share) return false
                if (share["link"]) {
                    links = [share["link"]]
                }
                content = share["link"]
                break;
            case 'whatsapp':
                links = message["content"].match(/https?:\/\/[^\s]+/g) || [];
                content = message["content"]
                break;
        }

        links?.forEach(link => {
            if (link.includes("instagram.com/reel")) {
                this.results[sender].reels += 1;
            } else if (link.includes("instagram.com/p")) {
                this.results[sender].posts += 1;
            } else if (link.includes("tiktok.com")) {
                this.results[sender].ttLink += 1;
            } else if (link.includes("instagram.com")) {
                // RARE
                this.results[sender].otherIgLink += 1;
            } else {
                this.results[sender].otherLinks += 1;
            }
            return true;
        })

        if (links.length == 0) {
            return null;
        }
        return content;
    }

    analysePhotos(message: Object, sender: number) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                let photos = message["gifs"] || message["photos"]
                if (!photos) return false
                this.results[sender].photos += 1
                return true;
            case "whatsapp":
                const waMessage = message as WAMessage;
                if (!waMessage.command) return false;

                let content: string = waMessage["content"]

                if (content?.includes("image omitted")) {
                    this.results[sender].photos += 1
                    return true;
                } else if (content?.includes("video omitted")) {
                    this.results[sender].videos += 1
                    return true;
                } else {
                    let match = content?.match(/<attached:\s*\w*-(PHOTO|VIDEO|AUDIO|DOCUMENT|GIF|STICKER)-.*?>/);
                    if (match) {
                        if (match[1] == "PHOTO") {
                            this.results[sender].photos += 1;
                            return true;
                        } else if (match[1] == "VIDEO") {
                            this.results[sender].videos += 1;
                            return true;
                        } else if (match[1] == "AUDIO") {
                            this.results[sender].voiceMessages += 1;
                            return true;
                        } else if (match[1] == "DOCUMENT") {
                            this.results[sender].other += 1;
                            return true;
                        } else if (match[1] == "GIF") {
                            this.results[sender].photos += 1;
                            return true;
                        }
                    }
                }
                break;
        }
    }

    analyseVideos(message: Object, sender: number) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                let videos = message["videos"]
                if (!videos) return false
                this.results[sender].videos += 1
                return true;
        }
        return false
    }

    analyseAudio(message: Object, sender: number) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                let audio = message["audio_files"]
                if (!audio) return false
                this.results[sender].voiceMessages += 1
                // TODO: voice message length
                return true;
            case "whatsapp":
                const waMessage = message as WAMessage;
                if (!waMessage.command) return false;
        }
        return false

    }

    analyseCalls(message: Object, sender: number) {
        switch (this.type) {
            case "facebook":
            case "instagram":
                let calls = message["call_duration"]
                if (calls == undefined) return false

                if (calls == 0) {
                    this.results[sender].callsNoAnswer += 1
                    return true
                }

                this.results[sender].calls += 1
                this.results[sender].callsDuration += calls
                // TODO: voice message length
                return true;
            case "whatsapp":
                let content = message["content"]

                let match = content.match(/(Missed voice call.|Voice call.|Video call.)[^a-zA-Z0-9]*([0-9][0-9]?)?\s*(sec|min|hour|No answer|Tap to)/)
                if (!match) break;
                if (match[1] == "Missed voice call.") {
                    this.results[sender].callsNoAnswer += 1
                    return true
                } else if (match[1] == "Voice call." || match[1] == "Video call.") {
                    this.results[sender].calls += 1
                    if (match[2]) {
                        let duration = parseInt(match[2])
                        if (match[3] == "min") {
                            duration *= 60
                        } else if (match[3] == "hour") {
                            duration *= 3600
                        }
                        this.results[sender].callsDuration += duration
                    }
                    return true
                }
                break;
        }
        return false;
    }

    analyseReactions(message: Object, messageSender: number) {

        switch (this.type) {
            case "facebook":
            case "instagram":
                let reactions: Object[] = message["reactions"]
                if (!reactions) return false

                reactions.forEach(reaction => {
                    let sender = this.getParticipantIndex(reaction["actor"])
                    this.results[sender].reactionsSent += 1
                    this.results[messageSender].reactionsReceived += 1

                    if (sender == messageSender) {
                        this.results[sender].selfReactions += 1
                    }
                })
                return true;
                break;
            case "telegram":
                // TODO
                break;
        }

        return false

    }


    analyseOther(message: Object, sender: number) {
        this.results[sender].other += 1
        return true;
    }

    // Message content analysis
    getMessageContent(message: Object): string {
        switch (this.type) {
            case "facebook":
            case "instagram":
                return escapeString(message["content"])
            case "whatsapp":
                if (message?.command) return ""
                return escapeString(message["content"])


        }
        return String(message)

    }

    analyseChatContent(message: Object, sender: number) {
        let content: string = this.getMessageContent(message)
        if (content == null || content.trim() == "") return false

        content = content.replace(/\s+/g, ' ').trim()
        // TODO remove duplicate characters

        this.results[sender].totalMessageCount += 1

        let words = content.split(" ")

        this.analyseEmoji(content, sender)
        this.analyseChatWords(words, sender)
        this.analyseAllPhrases(content, sender)
        this.analyseMessageTime(message, sender, words.length)

        this.lastChatMessage = message;

        return true

    }

    analyseChatWords(words: string[], sender: number) {
        this.results[sender].totalWordCount += words.length

        words.forEach(word => {
            this.analyseLaughWord(word, sender)
            this.countWordFrequency(word, sender)
        })


    }

    analyseEmoji(content: string, sender: number) {
        let emojis = this.extractEmojis(content)

        emojis.forEach(emoji => {
            this.results[sender].emojiCount[emoji] = (this.results[sender].emojiCount[emoji] || 0) + 1
        })
    }

    extractEmojis(content: string) {
        let emojis = []

        try {
            emojis = content.match(/\p{RGI_Emoji}/vg) || []
        } catch (e) {
            console.error(e)

            // FALLBACK
            const emojisRegex = /\p{RI}\p{RI}|\p{Emoji}(\p{EMod}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?(\u200D(\p{RI}\p{RI}|\p{Emoji}(\p{EMod}|\uFE0F\u20E3?|[\u{E0020}-\u{E007E}]+\u{E007F})?))*/gu;
            emojis = (content.match(emojisRegex) || []).filter(emoji => !/^[#*0-9©®]$/.test(emoji));
        }

        return emojis;
    }

    analyseLaughWord(content: string, sender: number) {
        if (content.toLowerCase().includes("haha")) {
            this.results[sender].laughCount += 1
            this.results[sender].laughs[content] = (this.results[sender].laughs[content] || 0) + 1

            if (content.length > this.results[sender].longestLaugh.l) {
                this.results[sender].longestLaugh.c = content
                this.results[sender].longestLaugh.l = content.length
            }
            return true
        }

        return false
    }

    countWordFrequency(word: string, sender: number) {
        this.results[sender].wordFrequency[word] = (this.results[sender].wordFrequency[word] || 0) + 1
    }

    analyseFirstMessage(message: Object) {
        let timestamp = this.getMessageTime(message).toMillis()
        this.results[0].firstMessages.addElement(timestamp, { value: message })
    }

    analyseDoubleText(message: Object, sender: number) {
        if (!this.lastMessage) return false

        let lastSender = this.getParticipantIndex(this.getSender(this.lastMessage))
        if (lastSender == sender) {
            let lastTime: DateTime = this.getMessageTime(this.lastMessage)
            let currentTime: DateTime = this.getMessageTime(message)
            let diff = Math.abs(currentTime.diff(lastTime, "hours").hours)
            if (diff > 3) {
                this.results[sender].doubleTextCount += 1
                this.doubleTextScore += 1
            }
        } else {
            if (this.doubleTextScore >= 2) {
                this.results[sender].ghostingCount += 1
            }
            this.doubleTextScore = 0
        }
    }

    analyseRespondTime(message: Object, sender: number) {
        if (!this.lastMessage) return false

        let lastSender = this.getParticipantIndex(this.getSender(this.lastMessage))
        if (lastSender != sender) {
            let lastTime: DateTime = this.getMessageTime(this.lastMessage)
            let currentTime: DateTime = this.getMessageTime(message)
            let diff = Math.abs(currentTime.diff(lastTime, "minutes").minutes)
            if (diff / 60 < 8) {
                this.results[sender].timeToRespond.push(diff)
            }
            this.results[sender].longestResponse = Math.max(this.results[sender].longestResponse, diff)
        }
    }

    analyseTimeSpent(message: Object, sender: number) {
        if (!this.lastMessage) return false

        let lastTime: DateTime = this.getMessageTime(this.lastMessage)
        let currentTime: DateTime = this.getMessageTime(message)
        let diff = Math.abs(currentTime.diff(lastTime, "minutes").minutes)
        if (diff < 4) {
            this.results[sender].timeSpent = this.results[sender].timeSpent + diff
        }

    }

    // Phrase analysis
    analyseAllPhrases(content: string, sender: number) {
        this.analyseMorning(content, sender)
        this.analyseNight(content, sender)
        this.analyseOtherPhrases(content, sender)
    }

    analyseMorning(content: string, sender: number) {
        this.analysePhrase(content, sender, this.morningPhrases, 'morningList', 'morningCount');
    }

    analyseNight(content: string, sender: number) {
        this.analysePhrase(content, sender, this.night_phrases, 'nightList', 'nightCount');
    }

    analyseOtherPhrases(content: string, sender: number) {
        this.analysePhrase(content, sender, this.other_phrases, 'phraseList');
    }

    analysePhrase(content: string, sender: number, phrases: string[], listKey: PhraseListKeys, countKey?: PhraseCountKeys) {
        let phrase = phrases.find(x => content.toLowerCase().includes(x));
        if (phrase) {
            if (countKey) this.results[sender][countKey] = (this.results[sender][countKey] || 0) + 1;
            this.results[sender][listKey][phrase] = (this.results[sender][listKey][phrase] || 0) + 1;
        }
    }

    // Time analysis
    analyseMessageTime(message: Object, sender: number, words) {
        let time: DateTime = this.getMessageTime(message)
        let hour = time.hour.toString();
        let weekDay = time.weekday.toString();
        let weekNumber = time.weekNumber.toString();
        let date = time.toFormat("yyyy_MM_dd");

        this.results[sender].countPerHour[hour] = (this.results[sender].countPerHour[hour] || 0) + 1;
        this.results[sender].countPerWeekDay[weekDay] = (this.results[sender].countPerWeekDay[weekDay] || 0) + 1;
        this.results[sender].countPerWeekNumber[weekNumber] = (this.results[sender].countPerWeekNumber[weekNumber] || 0) + 1;
        this.results[sender].countPerDays[date] = (this.results[sender].countPerDays[date] || 0) + 1;


        this.results[sender].wordCountPerHour[hour] = (this.results[sender].wordCountPerHour[hour] || 0) + words;
        this.results[sender].wordCountPerWeekDay[weekDay] = (this.results[sender].wordCountPerWeekDay[weekDay] || 0) + words;
        this.results[sender].wordCountPerWeekNumber[weekNumber] = (this.results[sender].wordCountPerWeekNumber[weekNumber] || 0) + words;
        this.results[sender].wordCountPerDays[date] = (this.results[sender].wordCountPerDays[date] || 0) + words;
    }

    getMessageTime(message: Object): DateTime {
        switch (this.type) {
            case "facebook":
            case "instagram":
                return DateTime.fromMillis(message["timestamp_ms"])
            case "whatsapp":
                return message["datetime"]
        }
        return DateTime.now()
    }
}