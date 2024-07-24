import mongoose from 'mongoose'

// Define schemas for embedded types
const FreeDeliverySchema = new mongoose.Schema({
    applicable: { type: Boolean, required: true },
    min_orderPrice: { type: Number, required: true }
});

const FreeItemSchema = new mongoose.Schema({
    applicable: { type: Boolean, required: true },
    min_orderPrice: { type: Number, required: true },
    item: { type: String, required: true }
});

const ApplicableDaysSchema = new mongoose.Schema({
    applicable: { type: Boolean, required: true },
    days: [{ type: String }],
    items: [{ type: String }]
});

const ApplicablePaymentMethodsSchema = new mongoose.Schema({
    applicable: { type: Boolean, required: true },
    methods: [{ type: String }],
    min_orderPrice: [{ type: Number }]
});


const OfferSchema = new mongoose.Schema({
    type: { type: String, enum: ['DISCOUNT', 'BOGO', 'FREE_DELIVERY', 'FREE_ITEM'], required: true },
    start_date: Date,
    end_date: Date ,
    applicable_days: ApplicableDaysSchema,
    applicable_payment_methods: ApplicablePaymentMethodsSchema,
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'EXPIRED'], required: true },
    bogo: { type: Boolean, required: true },
    free_item: FreeItemSchema,
    discount_percent: Number,
    free_delivery: FreeDeliverySchema
});

const Offer = mongoose.model('Offer', OfferSchema);
export default Offer
