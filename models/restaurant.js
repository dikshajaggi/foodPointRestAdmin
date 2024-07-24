import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    _id: {type: String, required : true},
    name: {type: String, required : true},
    thumbnail: {type: String, required : true},
    cuisines: [String],
    priceForTwo: {type: Number, required : true},
    deliveryTime: {type: Number, required : true},
    deliveryCharge: {type: Number, required : true},
    contact: [Number],
    outlets: [String],
    ownerId: [String],
    password: {type: String, required : true},
    username: {type: String, required : true},
    email: {type: String, required : true},
    online: {type: Boolean, required : true},
    working_days: [String],
    opening_time: {type: String, required : true},
    closing_time: {type: String, required : true},
    menu_type: {type: String, required : true}
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
export default Restaurant