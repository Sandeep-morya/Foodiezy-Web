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
		title: "Recommended",
		itemCards: [
			{
				card: {
					info: {
						id: "1",
						name: "Pepperoni Pizza",
						category: "Pizza",
						description: "Classic pepperoni pizza with tomato and mozzarella",
						imageId: "56c9ab92bd79745fd152a30fa2525426", // Image ID
						inStock: 20,
						isVeg: 0,
						price: 14.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Medium",
						},
						ribbon: {
							text: "New",
							textColor: "#ffffff",
							topBackgroundColor: "#3399ff",
							bottomBackgroundColor: "#0066cc",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.5",
								ratingCount: "120",
								ratingCountV2: "140",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "2",
						name: "Vegetarian Pasta",
						category: "Pasta",
						description: "Delicious vegetarian pasta with assorted veggies",
						imageId: "24092d9db646efb22e9937b0c62dafac", // Image ID
						inStock: 15,
						isVeg: 1,
						price: 10.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Small",
						},
						ribbon: {
							text: "Bestseller",
							textColor: "#ffffff",
							topBackgroundColor: "#33cc33",
							bottomBackgroundColor: "#009900",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.9",
								ratingCount: "200",
								ratingCountV2: "220",
							},
						},
					},
				},
			},
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
						name: "Chicken Alfredo Pasta",
						category: "Pasta",
						description: "Creamy chicken Alfredo pasta with Parmesan cheese",
						imageId: "f0e94c984813053f46c214f18ce73d59", // Image ID
						inStock: 18,
						isVeg: 0,
						price: 16.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "Recommended",
							textColor: "#ffffff",
							topBackgroundColor: "#ffcc00",
							bottomBackgroundColor: "#e68a00",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.7",
								ratingCount: "180",
								ratingCountV2: "200",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "5",
						name: "Classic Caesar Salad",
						category: "Salad",
						description:
							"Fresh romaine lettuce, croutons, and Parmesan cheese with Caesar dressing",
						imageId: "0984acc0ed7b914206dbbcb90297becc", // Image ID
						inStock: 30,
						isVeg: 1,
						price: 8.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Regular",
						},
						ribbon: {
							text: "Healthy Choice",
							textColor: "#ffffff",
							topBackgroundColor: "#33cc33",
							bottomBackgroundColor: "#009900",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.6",
								ratingCount: "160",
								ratingCountV2: "180",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "6",
						name: "BBQ Chicken Wings",
						category: "Appetizer",
						description:
							"Spicy BBQ chicken wings with a side of ranch dressing",
						imageId: "e53c16608abfe684e4a254690abdb81c", // Image ID
						inStock: 22,
						isVeg: 0,
						price: 11.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "Chef's Special",
							textColor: "#ffffff",
							topBackgroundColor: "#ff9933",
							bottomBackgroundColor: "#cc6600",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.9",
								ratingCount: "190",
								ratingCountV2: "210",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "7",
						name: "Mushroom Risotto",
						category: "Risotto",
						description:
							"Creamy mushroom risotto with Arborio rice and Parmesan",
						imageId: "sxkkygjqz7e8mad1qnvw", // Image ID
						inStock: 17,
						isVeg: 1,
						price: 13.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Medium",
						},
						ribbon: {
							text: "Chef's Special",
							textColor: "#ffffff",
							topBackgroundColor: "#ff9933",
							bottomBackgroundColor: "#cc6600",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.7",
								ratingCount: "170",
								ratingCountV2: "190",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "8",
						name: "Beef Tacos",
						category: "Tacos",
						description: "Savory beef tacos with lettuce, cheese, and salsa",
						imageId: "9fc6c247e09254670265953d03701280", // Image ID
						inStock: 25,
						isVeg: 0,
						price: 9.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Regular",
						},
						ribbon: {
							text: "Spicy",
							textColor: "#ffffff",
							topBackgroundColor: "#cc0000",
							bottomBackgroundColor: "#990000",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.8",
								ratingCount: "180",
								ratingCountV2: "200",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "9",
						name: "Veggie Burger",
						category: "Burger",
						description:
							"Delicious veggie burger with lettuce, tomato, and special sauce",
						imageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf", // Image ID
						inStock: 20,
						isVeg: 1,
						price: 7.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Regular",
						},
						ribbon: {
							text: "Light Option",
							textColor: "#ffffff",
							topBackgroundColor: "#33cc33",
							bottomBackgroundColor: "#009900",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.5",
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
						id: "10",
						name: "Seafood Paella",
						category: "Seafood",
						description:
							"Traditional Spanish paella with a mix of seafood and saffron rice",
						imageId: "bautca2ngwed43f7zzy0", // Image ID
						inStock: 15,
						isVeg: 0,
						price: 18.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "Signature Dish",
							textColor: "#ffffff",
							topBackgroundColor: "#ffcc00",
							bottomBackgroundColor: "#e68a00",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.9",
								ratingCount: "200",
								ratingCountV2: "220",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "11",
						name: "Spinach and Feta Stuffed Chicken",
						category: "Chicken",
						description:
							"Tender chicken breast stuffed with spinach and feta cheese",
						imageId: "d2e143528aae033ea59d6d0572375d31", // Image ID
						inStock: 18,
						isVeg: 0,
						price: 15.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Medium",
						},
						ribbon: {
							text: "Chef's Recommendation",
							textColor: "#ffffff",
							topBackgroundColor: "#ff9933",
							bottomBackgroundColor: "#cc6600",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.7",
								ratingCount: "160",
								ratingCountV2: "180",
							},
						},
					},
				},
			},
			{
				card: {
					info: {
						id: "12",
						name: "Caprese Panini",
						category: "Sandwich",
						description:
							"Grilled panini with fresh tomatoes, mozzarella, and basil pesto",
						imageId: "pft1dcdx8udfepmcnuty", // Image ID
						inStock: 22,
						isVeg: 1,
						price: 9.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Vegetarian",
							portionSize: "Regular",
						},
						ribbon: {
							text: "Customer Favorite",
							textColor: "#ffffff",
							topBackgroundColor: "#33cc33",
							bottomBackgroundColor: "#009900",
						},
						showImage: true,
						isBestseller: true,
						ratings: {
							aggregatedRating: {
								rating: "4.8",
								ratingCount: "170",
								ratingCountV2: "190",
							},
						},
					},
				},
			},
			// Add 8 more items with similar structures...

			{
				card: {
					info: {
						id: "13",
						name: "Shrimp Scampi",
						category: "Seafood",
						description: "Garlic butter shrimp served with linguine pasta",
						imageId: "ee5f8e06b300efc07c9fe3f4df40dfc4", // Image ID
						inStock: 20,
						isVeg: 0,
						price: 17.99,
						addons: [],
						itemAttribute: {
							vegClassifier: "Non-Vegetarian",
							portionSize: "Large",
						},
						ribbon: {
							text: "Seafood Delight",
							textColor: "#ffffff",
							topBackgroundColor: "#3399ff",
							bottomBackgroundColor: "#0066cc",
						},
						showImage: true,
						isBestseller: false,
						ratings: {
							aggregatedRating: {
								rating: "4.6",
								ratingCount: "140",
								ratingCountV2: "160",
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
						imageId: "dix8bbrwztldkd9ycv3r", // Updated Image ID
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
		],
	},
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
		title: "Best of the day",
		itemCards: [
			{
				card: {
					info: {
						id: "1",
						name: "Garlic Bread",
						category: "Appetizer",
						description: "Toasted garlic bread with herbs",
						imageId: "o8llrgbyug7isbabetp0", // Updated Image ID
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
						imageId: "1ace5fa65eff3e1223feb696c956b38b", // Updated Image ID
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
		title: "Bestseller",
		itemCards: [
			{
				card: {
					info: {
						id: "1",
						name: "Garlic Bread",
						category: "Appetizer",
						description: "Toasted garlic bread with herbs",
						imageId: "o8llrgbyug7isbabetp0", // Updated Image ID
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
						imageId: "1ace5fa65eff3e1223feb696c956b38b", // Updated Image ID
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
];
