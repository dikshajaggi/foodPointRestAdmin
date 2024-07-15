// Hardcoded array of 5 users
 let users = [
	{
		_id: "1",
		username: "user1",
		name: "User One",
		password: "password1",
		profilePic: "profile1.jpg",
		gender: "male",
	},
	{
		_id: "2",
		username: "user2",
		name: "User Two",
		password: "password2",
		profilePic: "profile2.jpg",
		gender: "female",
	},
	{
		_id: "3",
		username: "user3",
		name: "User Three",
		password: "password3",
		profilePic: "profile3.jpg",
		gender: "male",
	},
	{
		_id: "4",
		username: "user4",
		name: "User Four",
		password: "password4",
		profilePic: "profile4.jpg",
		gender: "female",
	},
	{
		_id: "5",
		username: "user5",
		name: "User Five",
		password: "password5",
		profilePic: "profile5.jpg",
		gender: "male",
	},
];

// Hardcoded array of 5 menu items
let menuItems = [
    {
        _id: "1",
        restId: "101",
        dishName: "Paneer Butter Masala",
        isAvailable: true,
        image: "https://example.com/images/paneer-butter-masala.jpg",
        price: 250.00,
        veg_classifier: "veg",
        offers: ["10% off on weekends", "Buy 1 Get 1 Free on Tuesdays"],
    },
    {
        _id: "2",
        restId: "101",
        dishName: "Chicken Biryani",
        isAvailable: true,
        image: "https://example.com/images/chicken-biryani.jpg",
        price: 300.00,
        veg_classifier: "non-veg",
        offers: ["20% off on first order"],
    },
    {
        _id: "3",
        restId: "102",
        dishName: "Veggie Pizza",
        isAvailable: true,
        image: "https://example.com/images/veggie-pizza.jpg",
        price: 200.00,
        veg_classifier: "veg",
        offers: ["15% off on Fridays"],
    },
    {
        _id: "4",
        restId: "103",
        dishName: "Margherita Pizza",
        isAvailable: true,
        image: "https://example.com/images/margherita-pizza.jpg",
        price: 150.00,
        veg_classifier: "veg",
        offers: ["10% off on all orders"],
    },
    {
        _id: "5",
        restId: "104",
        dishName: "Mutton Korma",
        isAvailable: false,
        image: "https://example.com/images/mutton-korma.jpg",
        price: 350.00,
        veg_classifier: "non-veg",
        offers: ["Free dessert on orders above $500"],
    },
];


// Export the arrays
export { users, menuItems };