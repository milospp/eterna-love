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

export function getItemColumn(item: PosterItem, items: PosterItem[], columns: number): number {
    let column = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) break;
        column += items[i].width || 1;
    }
    return column % columns
}

export function getAvaialbleFrames(format?: PosterFormatOption) {
    if (format && !format.digital) {
        let availableFrames = FRAME_TYPES.filter(x => !x.compatibleFormats || x.compatibleFormats?.includes(format.id))
        return availableFrames
    }
    return []
}


export function rsdToEur(value: number) {
    return parseFloat((value / 118).toFixed(2));
}

export function eurToRsd(value: number) {
    return parseFloat((value * 118).toFixed(2));
}

export function roundToTwoDecimal(value: number) {
    return Math.round(value * 100) / 100;
}

export function getCheckoutData(siteStore) {
    let data = {
        shipping_info_form: siteStore.checkout.shippingInfoForm,
        payment_method: siteStore.checkout.paymentInfo.paymentMethod.value,
        status: "DRAFT", // FIX
        is_order_placed: true,
        description: "",
        data: null,
        contact_info: {
            fullname: siteStore.checkout.contactInfo.fullname.value,
            email: siteStore.checkout.contactInfo.email.value,
            phone: siteStore.checkout.contactInfo.phone.value,
            street: siteStore.checkout.contactInfo.street.value,
            streetNumber: siteStore.checkout.contactInfo.streetNumber.value,
            city: siteStore.checkout.contactInfo.city.value,
            zip: siteStore.checkout.contactInfo.zip.value,
            country: siteStore.checkout.contactInfo.country.value
        },
        cart_items: []

    }

    if (siteStore.checkout.shippingInfoForm == 'DIFFERENT') {
        data["shipping_info"] = {
            fullname: siteStore.checkout.shippingInfo.fullname.value,
            email: siteStore.checkout.shippingInfo.email.value,
            phone: siteStore.checkout.shippingInfo.phone.value,
            street: siteStore.checkout.shippingInfo.street.value,
            streetNumber: siteStore.checkout.shippingInfo.streetNumber.value,
            city: siteStore.checkout.shippingInfo.city.value,
            zip: siteStore.checkout.shippingInfo.zip.value,
            country: siteStore.checkout.shippingInfo.country.value
        }
    }

    let cart_item =
    {
        poster_items: siteStore.posterItems.filter(x => x.type != null && x.width != 0).map(x => { return { poster_item_type: x.type } }),
        reference_id: "item-1",
        item_name: "Poster",
        person_1: siteStore.posterName1,
        person_2: siteStore.posterName2,
        poster_layout: siteStore.posterEdit.layout?.id,
        quantity: 1,
        poster_format: siteStore.posterConfig.format?.id,
        poster_paper_type: siteStore.posterConfig.paperType?.id,
        poster_frame: siteStore.posterConfig.frame?.id,
        results: siteStore.chatResults
    }
    data.cart_items.push(cart_item)

    return data
}