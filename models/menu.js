import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    _id: String,
    restId: String,
    dishName: String,
    isAvailable: Boolean,
    image: String,
    price: Number, 
    veg_classifier: String,
    offers: [String],
});

const Menu = mongoose.model('Menu', MenuSchema);
export default Menu;
