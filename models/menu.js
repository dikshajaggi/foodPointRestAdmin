import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    restId: {type: String, required : true},
    dishName: {type: String, required : true},
    isAvailable:  {type: Boolean, required : true},
    image: {type: String, required : true},
    price: {type: Number, required : true},
    veg_classifier: {type: String, required : true},
    offers: [String],
    bestseller: {type: Boolean, required : true}
});

const Menu = mongoose.model('Menu', MenuSchema);
export default Menu;
