const offersTypedef = `#graphql
    enum OfferStatus {
        ACTIVE
        INACTIVE
        EXPIRED
    }

    enum OfferType {
        DISCOUNT
        BOGO
        FREE_DELIVERY
        FREE_ITEM
    }

    type free_delivery_type {
        applicable: Boolean!
        min_orderPrice: Float!
    }

    type free_item_type {
        applicable: Boolean!
        min_orderPrice: Float!
        item: String!
    }

    type applicable_days_type {
        applicable: Boolean!
        days: [String!]!
        items: [String!]!
    }

    type applicable_payment_methods_type {
        applicable: Boolean!
        methods: [String!]!
        min_orderPrice: [String!]!
    }

    type offer {
        type: OfferType!,
        start_date: String
        end_date: String
        applicable_days: applicable_days_type
        applicable_payment_methods: applicable_payment_methods_type
        status: OfferStatus!
        bogo: Boolean!
        free_item: free_item_type
        discount_percent: Float
        free_delivery: free_delivery_type
    }
`

export default offersTypedef