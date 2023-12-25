import { MenuCard, SortType } from "../types";

export const dropdownOptions: SortType[] = [
	"default",
	"title",
	"rating",
	"h2l",
	"l2h",
	"delivery",
];

export const filterTypes = [
	"Veg/Non-Veg",
	"Cuisines",
	"Delivery Time",
	"Rating",
	"Cost for two",
	"Explore",
	"Sort",
];
export const foodTypeArray = ["Pure Veg", "Non-Veg"];
export const deliveryArray = ["Fast Delivery"];
export const ratingArray = ["Ratings 4.5+", "Ratings 4.0+", "Ratings 3.5+"];
export const costArray = ["₹300 - ₹500", "Greater than ₹500", "Less than ₹300"];
export const exploreArray = ["New on Foodiezy"];

export const cities = [
	"Agra",
	"Ahmedabad",
	"Ajmer",
	"Ambala",
	"Amritsar",
	"Ayodhya",
	"Bengaluru",
	"Bhopal",
	"Bhubaneswar",
	"Chandigarh",
	"Chennai",
	"Dehradun",
	"Delhi",
	"Gorakhpur",
	"Guwahati",
	"Gwalior",
	"Haridwar",
	"Hyderabad",
	"Jaipur",
	"Jammu",
	"Kolkata",
	"Lucknow",
	"Ludhiana",
	"Mathura",
	"Mumbai",
	"Panaji",
	"Patna",
	"Prayagraj",
	"Pune",
	"Puri",
	"Raipur",
	"Ranchi",
	"Surat",
	"Thiruvananthapuram",
	"Varanasi",
	"Visakhapatnam",
];

export const systemContent = `[Act as a female chatbot of a food delivery app "Foodiezy"]
Your name is fixed that is "Anandi". You are desined by "Rahul Singh" & "Sandeep Morya". Your job is to provide information to the visitors about restaurants, dishes,recipies and guides them to maitain their health.
If anyone ask you questions about any other topic just reply that you are a food app bot so you are unaware of this.
Your response should be in hinglish and length should be of 1-2 lines or as short as possible.`;

export const welcomeContent =
	"Hey there! I'm Anandi🤖. I'm here to help you explore restaurants, discover delicious dishes, and even provide you some awesome diet plans. \nJust let me know if you need any assistance.🍽️😋";

export const dummyData: MenuCard[] = [
	{
		title: "Starters",
		itemCards: [
			{
				card: {
					info: {
						id: "1",
						name: "Garlic Bread",
						category: "Appetizer",
						description: "Toasted garlic bread with herbs",
						imageId: "56c9ab92bd79745fd152a30fa2525426", // Updated Image ID
						inStock: 20,
						isVeg: 1,
						price: 5.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Medium",
						},
						ribbon: {
							text: "Bestseller",
							textColor: "#ffffff",
							topBackgroundColor: "#ff9900",
							bottomBackgroundColor: "#ff6600",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.5",
								ratingCount: "100",
								ratingCountV2: "120",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "2",
						name: "Chicken Wings",
						category: "Appetizer",
						description: "Spicy chicken wings with dip",
						imageId: "24092d9db646efb22e9937b0c62dafac", // Updated Image ID
						inStock: 15,
						isVeg: 0,
						price: 8.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "New",
							textColor: "#ffffff",
							topBackgroundColor: "#33cc33",
							bottomBackgroundColor: "#009900",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.0",
								ratingCount: "80",
								ratingCountV2: "90",
							},
						},
					},
				},
			},
			// Add more Starters...
		],
	},
	{
		title: "Main Course",
		itemCards: [
			{
				card: {
					info: {
						id: "3",
						name: "Margherita Pizza",
						category: "Pizza",
						description: "Classic Margherita pizza with tomato and mozzarella",
						imageId: "2b4f62d606d1b2bfba9ba9e5386fabb7", // Updated Image ID
						inStock: 25,
						isVeg: 1,
						price: 12.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "Top Rated",
							textColor: "#ffffff",
							topBackgroundColor: "#ff3333",
							bottomBackgroundColor: "#cc0000",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.8",
								ratingCount: "150",
								ratingCountV2: "170",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "4",
						name: "Grilled Salmon",
						category: "Seafood",
						description: "Grilled salmon with lemon and herbs",
						imageId: "f0e94c984813053f46c214f18ce73d59", // Updated Image ID
						inStock: 12,
						isVeg: 0,
						price: 16.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Medium",
						},
						ribbon: {
							text: "Chef's Special",
							textColor: "#ffffff",
							topBackgroundColor: "#ff9900",
							bottomBackgroundColor: "#ff6600",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.6",
								ratingCount: "120",
								ratingCountV2: "140",
							},
						},
					},
				},
			},
			// Add more Main Course...
		],
	},
	// Add more Categories...
];

