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

    type Offer {
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

    type Query {
        getAllOffers: [Offer!]!
    }

    type Mutation {
        createOffer(offer: inputOffer): Offer!
    }

    input inputOffer {
        type: OfferType!,
        start_date: String
        end_date: String
        applicable_days: applicable_days_input
        applicable_payment_methods: applicable_payment_methods_input
        status: OfferStatus!
        bogo: Boolean!
        free_item: free_item_input
        discount_percent: Float
        free_delivery: free_delivery_input
    }

    input free_delivery_input {
        applicable: Boolean!
        min_orderPrice: Float!
    }

    input free_item_input {
        applicable: Boolean!
        min_orderPrice: Float!
        item: String!
    }

    input applicable_days_input {
        applicable: Boolean!
        days: [String!]!
        items: [String!]!
    }

    input applicable_payment_methods_input {
        applicable: Boolean!
        methods: [String!]!
        min_orderPrice: [String!]!
    }
`

export default offersTypedef