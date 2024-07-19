import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    restId: String,
    dishName: String,
    isAvailable: Boolean,
    image: String,
    price: Number, 
    veg_classifier: String,
    offers: [String],
    bestseller: Boolean
});

const Menu = mongoose.model('Menu', MenuSchema);
export default Menu;
