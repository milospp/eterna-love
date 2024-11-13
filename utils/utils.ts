import unidecode from 'unidecode'

export function unicodeToLatin(text: string) {
    text = text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    return unidecode(text)
}

export function escapeString(str: string) {
    try {
        return decodeURIComponent(escape(str))
    } catch {
        return str
    }
}


export class SmallestElements {
    constructor() {
        this.elements = [];
        this.size = 5;
    }

    elements: { sortValue: number, object: Object }[]
    size: number

    addElement(sortValue: number, object: Object) {
        if (this.elements.length < this.size) {
            this.insertInOrder(sortValue, object);
        } else if (sortValue < this.elements[this.size - 1].sortValue) {
            this.insertInOrder(sortValue, object);
            this.elements.pop();
        }

    }

    insertInOrder(sortValue: number, object: Object) {
        let i = 0;
        while (i < this.elements.length && this.elements[i].sortValue < sortValue) {
            i++;
        }
        this.elements.splice(i, 0, { sortValue: sortValue, object: object });
    }

    getElements() {
        return this.elements;
    }
}

export function hasInvisibleChars(text: string) {
    return text.match(/[\u200B-\u200E\uFEFF]/) != null;
}

export function removeInvisibleChars(text: string) {
    return text.replace(/[\u200B-\u200E\uFEFF]/g, ''); // Uklanja ZERO WIDTH SPACE, ZERO WIDTH NON-JOINER, itd.
}