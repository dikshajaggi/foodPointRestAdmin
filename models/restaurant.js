import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    _id: String,
    name: String,
    thumbnail: String,
    cuisines: [String],
    priceForTwo: Number,
    deliveryTime: Number,
    deliveryCharge: Number,
    contact: [Number],
    outlets: [String],
    ownerId: [String],
    password: String,
    username: String,
    email: String,
    online: Boolean,
    working_days: [String],
    opening_time: String,
    closing_time: String,
    menu_type: String
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
export default Restaurant