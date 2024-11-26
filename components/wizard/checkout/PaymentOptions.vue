<template>
    <div>
        <div>

            <div class="mb-5">
                <div v-for="payment in paymentOptions" class="flex w-full text-left group">
                    <input type="radio" name="payment_option" :id="'payment_' + payment.name" class="peer hidden"
                        :value="payment.name" @change="selectedPayment(payment.name)">
                    <label :for="'payment_' + payment.name"
                        class="cursor-pointer border border-gray-200 peer-checked:border-yellow-500 peer-checked:border-2 peer-checked:rounded group-first:rounded-t group-last:rounded-b w-full py-4 px-4 flex content-between">
                        <span class="text-sm font-medium">
                            {{ payment.title }}
                        </span>
                        <span>

                        </span>
                    </label>
                </div>


                <p class=" text-center my-4 text-slate-400 text-sm">ili</p>


                <div class="paypal-container">

                    <button v-if="applePaySupport" class="my-paypal-button-row apple-pay"></button>

                    <div id="paypal-checkout" />
                </div>
            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>

const applePaySupport = ref(false);
const emit = defineEmits(['saved']);

const siteStore = useSiteStore();

const paymentOption = ref(null);
const paymentOptions = computed(() => {

    let options = [
        {
            id: 1,
            name: 'UPON_DELIVERY',
            title: 'Plaćanje pouzećem'
        },
        {
            id: 2,
            name: 'BANK_TRANSFER',
            title: 'Uplata na račun'
        }
    ]


    if (siteStore.posterConfig.format?.digital) {
        return options.filter(option => option.name !== 'UPON_DELIVERY');
    }
    return options

})




onMounted(() => {

    usePaypalButton({
        element: '#paypal-checkout',
        style: {
            borderRadius: 5,
        },
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        invoice_id: "Invoice-Poster-#",
                        reference_id: "POSTER-12",
                        amount: {
                            value: '31',
                            'breakdown': {
                                'item_total': {
                                    'currency_code': 'EUR',
                                    'value': '25'
                                },
                                'shipping': {
                                    'currency_code': 'EUR',
                                    'value': '3'
                                },
                                'tax_total': {
                                    'currency_code': 'EUR',
                                    'value': '5'
                                },
                                'discount': {
                                    'currency_code': 'EUR',
                                    'value': '2'
                                },
                                'shipping_discount': {
                                    'currency_code': 'EUR',
                                    'value': '0'
                                },

                            }
                        },
                        shipping: {
                            type: "SHIPPING",
                            address: {
                                address_line_1: 'Bulevar depsota Stefana 7',
                                address_line_2: 'dom b',
                                admin_area_2: 'San Francisco',
                                admin_area_1: 'CA',
                                postal_code: '21000',
                                country_code: 'RS'
                            }
                        },
                        items: [
                            {
                                name: "Poster",
                                unit_amount: {
                                    currency_code: "EUR",
                                    value: '20',
                                },
                                description: "Poster A4",
                                quantity: '1'

                            },
                            {
                                name: "Ram",
                                unit_amount: {
                                    currency_code: "EUR",
                                    value: '5',
                                },
                                description: "Drveni ram za sliku",
                                quantity: '1'

                            }
                        ]

                    },

                    // Another purchase unit
                    // {
                    //     invoice_id: "INVOICE-4",
                    //     reference_id: "REFERENCE-ID-4",
                    //     amount: {
                    //         value: '10',
                    //         breakdown: {
                    //             item_total: {
                    //                 currency_code: 'EUR',
                    //                 value: '10'
                    //             },
                    //         }
                    //     },
                    //     shipping: {
                    //         type: "SHIPPING",
                    //         address: {
                    //             address_line_1: 'Kitosk 55',
                    //             address_line_2: 'K 55',
                    //             admin_area_2: 'San Francisco',
                    //             admin_area_1: 'CA',
                    //             postal_code: '21000',
                    //             country_code: 'RS'
                    //         }
                    //     },
                    //     items: [{
                    //         name: "Ram",
                    //         unit_amount: {
                    //             currency_code: "EUR",
                    //             value: '5',
                    //         },
                    //         description: "item description",
                    //         quantity: '2'

                    //     }]

                    // }
                ],


                payment_source: {
                    paypal: {
                        experience_context: {
                            // user_action: 'CONTINUE',
                            brand_name: "ETERNA LOVE",
                            shipping_preference: "SET_PROVIDED_ADDRESS",
                        }
                    }
                },
                payer: {
                    // payer_id: '12345678901',
                    // payer_id: "QYR5Z8XDVJNXQ",

                    // birth_date: '1990-01-01',
                    // 'tax_info': {
                    //     tax_id: '12345678901',
                    //     tax_id_type: 'BR_CPF',
                    // },
                    tenant: '',
                    name: {
                        given_name: "Firstname",
                        surname: "Lastname"
                    },
                    email_address: "payer@example.com",
                    phone: {
                        phone_type: "MOBILE",
                        phone_number: {
                            national_number: "381631453860"
                        }
                    },
                    address: {
                        address_line_1: '123 Main St',
                        address_line_2: 'Apt 4B',
                        admin_area_2: 'San Francisco',
                        admin_area_1: 'CA',
                        postal_code: '21000',
                        country_code: 'RS'
                    }
                },
            });
        },
        onApprove: async (data, actions) => {
            try {
                const details = await actions.order?.capture();
                console.log('Payment completed successfully:', details);
            } catch (error) {
                console.error('Error capturing payment:', error);
            }
        },
        onError: (err) => {
            console.error(err);
        }
    })

    checkApplePAySupport();
})

function checkApplePAySupport() {
    if (window.ApplePaySession) {
        applePaySupport.value = true;
    }
}

function selectedPayment(method: 'UPON_DELIVERY' | 'BANK_TRANSFER') {
    siteStore.checkout.paymentInfo.paymentMethod.value = method
    emit('saved');
}

</script>

<style>
.apple-pay {
    /* background-color: red; */
    width: 100%;
    appearance: -apple-pay-button;
    -apple-pay-button-style: black;
    height: 2.5em;
    margin-bottom: 0.9em;

}

.paypal-container {
    container-type: inline-size;
}

@container (min-width: 75px) {
    .my-paypal-button-row {
        height: 25px;
        vertical-align: top;
        min-height: 25px;
        max-height: 30px;
        margin-bottom: 8px;


    }
}


@container (min-width: 150px) {
    .my-paypal-button-row {
        height: 25px;
        vertical-align: top;
        min-height: 25px;
        max-height: 55px;
        margin-bottom: 8px;

    }
}

@container (min-width: 200px) {
    .my-paypal-button-row {
        height: 35px;
        vertical-align: top;
        min-height: 35px;
        max-height: 55px;
        margin-bottom: 11px;

    }
}


@container (min-width: 300px) {
    .my-paypal-button-row {
        height: 45px;
        vertical-align: top;
        min-height: 30px;
        max-height: 55px;
        margin-bottom: 14px;

    }
}

@container (min-width: 500px) {
    .my-paypal-button-row {
        height: 55px;
        vertical-align: top;
        min-height: 40px;
        max-height: 55px;
        margin-bottom: 17px;

    }
}
</style>