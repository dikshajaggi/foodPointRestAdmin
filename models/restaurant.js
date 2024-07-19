import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    _id: String,
    name: String,
    thumbnail: String,
    cuisines: [String],
    priceForTwo: Number,
    deliveryTime: Number,
    deliveryCharge: Number,
    deals: [String],
    contact: [Number],
    outlets: [String],
    ownerId: [String]
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
export default Restaurant