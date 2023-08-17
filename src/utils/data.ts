import { SortType } from "../types";

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

export const menuData = [
	{
		card: {
			card: {
				"@type":
					"type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
				isPureVeg: true,
				badges: {},
				vegOnlyDetails: {
					imageId: "AutoVegOnly_qkjowj",
					title: "Showing only vegetarian options.",
					description: "Tap on the VEG ONLY button to turn off the setting",
				},
				topRatedFilter: {},
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Recommended",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705787",
								name: "Kadhai Paneer Thali",
								category: "Thalis",
								description:
									"Serves 1 | Kadhai Paneer + Dal Fry + 2 Laccha Prantha.",
								imageId: "f0b67252fbfa092d9617cd7514237455",
								inStock: 1,
								isVeg: 1,
								price: 16500,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002202",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "709 ratings",
										ratingCountV2: "709",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626733",
								name: "Economic Thali",
								category: "Thalis",
								description:
									"Mutter Paneer/Chana Paneer + Dal + Raita + Rice + 3 Roti.",
								imageId: "c6b731b7b45520f49a565cd42ba3d78a",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {
									variantGroups: [
										{
											groupId: "26320429",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Matter Paneer",
													default: 1,
													id: "83427862",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Chana Paneer",
													id: "83427863",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002134",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466335",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "360 ratings",
										ratingCountV2: "360",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705792",
								name: "Indian Style Cheese Chilli Thali",
								category: "Thalis",
								description: "Cheese Chilli +dal makhani + 2 laccha prantha",
								imageId: "58eaa59c47adc7f0b990f99e9d23d92e",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002204",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "349 ratings",
										ratingCountV2: "349",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "57426833",
								name: "Special Maharaja Thali",
								category: "Thalis",
								description:
									"Paneer Butter Masala + Dal Makhani + Mix Vegitable + Raita +Rice/Veg Puloa + Sweet+ 3 Roti",
								imageId: "1fa3eb5b49f23c9552ce8bf791686489",
								inStock: 1,
								isVeg: 1,
								price: 27000,
								variants: {
									variantGroups: [
										{
											groupId: "26320432",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Rice",
													default: 1,
													id: "83427869",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Pulao",
													id: "83427870",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002171",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "202 ratings",
										ratingCountV2: "202",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475085",
								name: "Mini Veg Thali",
								category: "Thalis",
								description:
									"Serves 1 | | 1 Veg dish(Aloo Matar/Chana Masala/Punjabi Chole dry)+Dal+Rice+3 Roti+Salad+pickle.",
								imageId: "gxyhzdias88hj6tpi4af",
								inStock: 1,
								isVeg: 1,
								price: 21200,
								variants: {
									variantGroups: [
										{
											groupId: "26320428",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Chana Masala",
													default: 1,
													id: "83427859",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Punjabi Chole Dry",
													id: "83427860",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Aloo Mutter",
													id: "83427861",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002068",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466629",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "455 ratings",
										ratingCountV2: "455",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "60684152",
								name: "Veg Deluxe Thali",
								category: "Thalis",
								description:
									"Serves 1 | Kadhai Paneer,Dal Makhani,Raita,Veg Pulao,2Prantha,Gulabjamun.",
								imageId: "10eed3d8037ff4c92b68875adcc8043c",
								inStock: 1,
								isVeg: 1,
								price: 25700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002169",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "285 ratings",
										ratingCountV2: "285",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705790",
								name: "Chana Masala Thali",
								category: "Thalis",
								description: "Chana Panerr + Dal Makhani + 3 Roti",
								imageId: "dc638db06a3f478ff5a627fb77d4cdc8",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002196",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.6",
										ratingCount: "100 ratings",
										ratingCountV2: "100",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705788",
								name: "Mix Vegetable Thali ",
								category: "Thalis",
								description: "Mix Vegitable + Raita +3 Roti",
								imageId: "1fb6d0cbef1230bdd8881a1e667022bf",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002200",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "61 ratings",
										ratingCountV2: "61",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014808",
								name: "Gyan's Special Punjabi Thali With Gulab Jamun",
								category: "Thalis",
								description:
									"Serves 1 | Punjabi Paneer + Mix Veg + Dal Makhani + Raita + Gulab Jamun + 2 Jungli Roti.",
								imageId: "1fa3eb5b49f23c9552ce8bf791686489",
								inStock: 1,
								isVeg: 1,
								price: 27900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705789",
								name: "Punjabi Chole Thali ",
								category: "Thalis",
								description: "Punjabi Chole + Dal Makani +3 Roti",
								imageId: "bdb880e04fe9e67676887c4f10c9c662",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002180",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.6",
										ratingCount: "30 ratings",
										ratingCountV2: "30",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475103",
								name: "Veg Thali",
								category: "Thalis",
								description:
									"Serves 1 | Aloo Mattar /Chana Masala + Dal Fry + 3 Chapati + Rice + Raita",
								imageId: "1b750926121175de9d856c29b081d8f4",
								inStock: 1,
								isVeg: 1,
								price: 24800,
								variants: {
									variantGroups: [
										{
											groupId: "26320431",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Chana Masala",
													default: 1,
													id: "83427867",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Aloo Matter",
													id: "83427868",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002071",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.5",
										ratingCount: "90 ratings",
										ratingCountV2: "90",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475107",
								name: "Dal Makhani Combo",
								category: "Swiggy Exclusive Combos",
								description:
									"Serves 1 | Dal Makhani + 2 Mini Laccha Paratha/2 Mini Naan.",
								imageId: "ca22c62fa7383066cbbd813ae8257f3b",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "26320434",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427873",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427874",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002188",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466338",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "302 ratings",
										ratingCountV2: "302",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475108",
								name: "Veg Biryani + Bundhi  Raita",
								category: "Swiggy Exclusive Combos",
								description:
									"Serves 1 | A Delightfully Wholesome Combo Of Aromatic Veg Biryani; Served Along With Raita.",
								imageId: "daef4a96b18ec74d7230028fde54e8a2",
								inStock: 1,
								isVeg: 1,
								price: 20700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002146",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466334",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "423 ratings",
										ratingCountV2: "423",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014810",
								name: "Rajma Chawal Combo",
								category: "Swiggy Exclusive Combos",
								imageId: "6c9a0f3250f6f06bb13c1d8c5fb0fb13",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.2",
										ratingCount: "11 ratings",
										ratingCountV2: "11",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705785",
								name: "Shahi Paneer Combo",
								category: "Swiggy Exclusive Combos",
								description: "Shahi Paneer (Small Portion)+ 2 Mini Naan.",
								imageId: "fw7sasltxgsyvealdqrd",
								inStock: 1,
								isVeg: 1,
								price: 19800,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002124",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "78 ratings",
										ratingCountV2: "78",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014822",
								name: "Malai Methi Matar With 2 Mirchi Paratha",
								category: "Best Price Combos",
								imageId: "73d6800befa9453d6b7f18cbd7c44f3c",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "12 ratings",
										ratingCountV2: "12",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014825",
								name: "Chole Rice Combo",
								category: "Best Price Combos",
								imageId: "83e62a8737a03ebf834788cbdc7d0422",
								inStock: 1,
								isVeg: 1,
								price: 15300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014823",
								name: "Spicy Punjabi Paneer With 2 Mini Junglee Paratha",
								category: "Best Price Combos",
								imageId: "5217b5b28e5267822f29c26f7d5af665",
								inStock: 1,
								isVeg: 1,
								price: 22500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "5 ratings",
										ratingCountV2: "5",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014824",
								name: "Chana Ki Dal Fry With 2 Paratha",
								category: "Best Price Combos",
								imageId: "0e91ca107da3e6e5236b41a279021970",
								inStock: 1,
								isVeg: 1,
								price: 14900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014826",
								name: "Punjabi Chole Dry With 3 Roti",
								category: "Best Price Combos",
								imageId: "f217f19ced1f4499d611748593eb8038",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475106",
								name: "Kadai Paneer",
								category: "Gyan Special Vegetables",
								description:
									"An irresistible preparation with paneer cooked in a perfectly seasoned onion-tomato gravy.",
								imageId: "v6qqr63vxwladp6ztzra",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951472",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878968",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878969",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002189",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "863 ratings",
										ratingCountV2: "863",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475109",
								name: "Indian Cheese Chilli",
								category: "Gyan Special Vegetables",
								description:
									"A refreshing and soothing made by stuffing overload of cheese ,chilli & veggies.",
								imageId: "hkqdmp6rtvlcdhrz8drg",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951473",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878970",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878971",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002185",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "685 ratings",
										ratingCountV2: "685",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475100",
								name: "Paneer Butter Masala ",
								category: "Gyan Special Vegetables",
								description: "Paneer butter masala",
								imageId: "646673b6dd6d2f90c9ab9a0722bf3f43",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951470",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878964",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878965",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002075",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "382 ratings",
										ratingCountV2: "382",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475111",
								name: "Paneer Bhurji",
								category: "Gyan Special Vegetables",
								imageId: "oudbhaz6l1drey9awqjb",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951474",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878972",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878973",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002183",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "247 ratings",
										ratingCountV2: "247",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475112",
								name: "Lemon Paneer",
								category: "Gyan Special Vegetables",
								description:
									"Made with a handful of pantry ingredients, this lemon paneer combo of perfect to have anytime in the day.",
								imageId: "cxi7zkbl2eyyp9pqknxv",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951475",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878974",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878975",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002179",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "441 ratings",
										ratingCountV2: "441",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475092",
								name: "Shahi Korma",
								category: "Gyan Special Vegetables",
								imageId: "chlxhrgrsehpgmmategg",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951467",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878958",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878959",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002197",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "298 ratings",
										ratingCountV2: "298",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475102",
								name: "Paneer Do Pyaza",
								category: "Gyan Special Vegetables",
								imageId: "tz7m7vtvtxle9eegh3oq",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951471",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878966",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878967",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002073",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "99 ratings",
										ratingCountV2: "99",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475113",
								name: "Punjabi Paneer",
								category: "Gyan Special Vegetables",
								imageId: "4d8bb08193663efa8cc1ce1f9941fa19",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951476",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878976",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878977",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002173",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "119 ratings",
										ratingCountV2: "119",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475097",
								name: "Mushroom Do Pyaza",
								category: "Gyan Special Vegetables",
								imageId: "ljkewrczgx9hjgrxhhtx",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951469",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878962",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878963",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002086",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "180 ratings",
										ratingCountV2: "180",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475089",
								name: "Mattar Malai Methi",
								category: "Gyan Special Vegetables",
								imageId: "fpxbdbrybp08vhrbr4to",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951466",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878956",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878957",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002201",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "156 ratings",
										ratingCountV2: "156",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475094",
								name: "Mushroom Masala",
								category: "Gyan Special Vegetables",
								imageId: "9dcdb58e7382fcbdb6f7ad6f8ed90889",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951468",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878960",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878961",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002195",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.0",
										ratingCount: "34 ratings",
										ratingCountV2: "34",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475122",
								name: "Shahi Paneer",
								category: "Veg Main Course",
								description:
									"A scrumptious combo of perfectly cooked shahi paneer made with lots with veggies and creme.",
								imageId: "vsbfwly2ey3owajtvycp",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {
									variantGroups: [
										{
											groupId: "2951480",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878984",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11700,
													id: "9878985",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002193",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "1756 ratings",
										ratingCountV2: "1756",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475125",
								name: "Cheese Tomato",
								category: "Veg Main Course",
								imageId: "fpi9ke5lb3mwzshshxhu",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "2951483",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878990",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878991",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002190",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "467 ratings",
										ratingCountV2: "467",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475124",
								name: "Mix Vegetable",
								category: "Veg Main Course",
								imageId: "krviqdciarzt6ln9nwda",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951482",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "26212725",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878988",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002191",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "489 ratings",
										ratingCountV2: "489",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475044",
								name: "Mattar Paneer",
								category: "Veg Main Course",
								imageId: "c11c66f9dde8f73d943ef204495b3c11",
								inStock: 1,
								isVeg: 1,
								price: 14000,
								variants: {
									variantGroups: [
										{
											groupId: "2951449",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878922",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 10800,
													id: "9878923",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002072",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "126 ratings",
										ratingCountV2: "126",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475046",
								name: "Palak Paneer",
								category: "Veg Main Course",
								imageId: "pn9lkyc0xyvzvfb58x2b",
								inStock: 1,
								isVeg: 1,
								price: 13100,
								variants: {
									variantGroups: [
										{
											groupId: "2951451",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878926",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 9000,
													id: "9878928",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002070",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "293 ratings",
										ratingCountV2: "293",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475061",
								name: "Rajma",
								category: "Veg Main Course",
								imageId: "451f6b42dc66356ca3a35e296007631a",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {
									variantGroups: [
										{
											groupId: "2951458",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878940",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5900,
													id: "9878941",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002106",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "77 ratings",
										ratingCountV2: "77",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475042",
								name: "Mushroom Mattar",
								category: "Veg Main Course",
								imageId: "jftbdnr5saqpszgfovfq",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951447",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878918",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12200,
													id: "9878919",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002074",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "102 ratings",
										ratingCountV2: "102",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "60312536",
								name: "Dum Aloo",
								category: "Veg Main Course",
								imageId: "5c3f0c0395ad898bd28744e3c89efd52",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "8062351",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "26966094",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "26966095",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002181",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.4",
										ratingCount: "46 ratings",
										ratingCountV2: "46",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475055",
								name: "Aloo Mattar",
								category: "Veg Main Course",
								imageId: "e197f347d8f40375b95fedbdad4ca568",
								inStock: 1,
								isVeg: 1,
								price: 11700,
								variants: {
									variantGroups: [
										{
											groupId: "2951456",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878936",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878937",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002206",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.7",
										ratingCount: "43 ratings",
										ratingCountV2: "43",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475127",
								name: "Palak Kofta",
								category: "Veg Main Course",
								imageId: "c2ddd99db9e851abeeeb603680294e23",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951485",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878994",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12200,
													id: "9878995",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002178",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.7",
										ratingCount: "17 ratings",
										ratingCountV2: "17",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475126",
								name: "Mattar Kofta",
								category: "Veg Main Course",
								imageId: "8b5f3dfd1edf8713ad1ad22a7fd66720",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951484",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878992",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878993",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002176",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "13 ratings",
										ratingCountV2: "13",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475057",
								name: "Aloo Palak",
								category: "Veg Main Course",
								imageId: "a988053af104eabb9be7e97ecb96953d",
								inStock: 1,
								isVeg: 1,
								price: 11700,
								variants: {
									variantGroups: [
										{
											groupId: "2951457",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878938",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878939",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002174",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.9",
										ratingCount: "12 ratings",
										ratingCountV2: "12",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475066",
								name: "Aloo Methi",
								category: "Seasonal Vegetables",
								description: "Aloo gobi\n",
								imageId: "559df59d55bac1224508ca9aecd113ea",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {
									variantGroups: [
										{
											groupId: "2951460",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878944",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878945",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002092",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "65 ratings",
										ratingCountV2: "65",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475072",
								name: "Jeera Aloo",
								category: "Seasonal Vegetables",
								imageId: "0ef4e88a0572678d716c6416055d4b25",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {
									variantGroups: [
										{
											groupId: "2951462",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878948",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878949",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002069",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "55 ratings",
										ratingCountV2: "55",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475120",
								name: "Dal Makhani",
								category: "Dal",
								description: "Serves 1 | Desi ghee +amul butter",
								imageId: "p0m1dl7ok6tf4vgan5nh",
								inStock: 1,
								isVeg: 1,
								price: 18900,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002066",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "1166 ratings",
										ratingCountV2: "1166",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475117",
								name: "Desi Ghee Dal Fry",
								category: "Dal",
								description: "Desi ghee(Serves 1).",
								imageId: "26374f4e89773b2b504318c907e1a225",
								inStock: 1,
								isVeg: 1,
								price: 14400,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002165",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "724 ratings",
										ratingCountV2: "724",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475119",
								name: "Dal Fry Yellow [Mongi Masri]",
								category: "Dal",
								description: "Desi ghee",
								imageId: "11a7bbcf2e943a543862a6d36333981e",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002137",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "142 ratings",
										ratingCountV2: "142",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475118",
								name: "Special Desi Ghee Chana Dal Fry",
								category: "Dal",
								description: "Desi ghee",
								imageId: "fa99c945866cd08042f424fc66423972",
								inStock: 1,
								isVeg: 1,
								price: 14400,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002152",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "97 ratings",
										ratingCountV2: "97",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475121",
								name: "Special Dal Creamy",
								category: "Dal",
								description: "Desi ghee +fresh cream",
								imageId: "e0cfea030503247c011bd5feee14ba49",
								inStock: 1,
								isVeg: 1,
								price: 20700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002194",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.6",
										ratingCount: "75 ratings",
										ratingCountV2: "75",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014807",
								name: "Vegetable Biryani",
								category: "Rice",
								imageId: "655ca551f96e350d5a3c923adf8ae2df",
								inStock: 1,
								isVeg: 1,
								price: 22500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.5",
										ratingCount: "6 ratings",
										ratingCountV2: "6",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475062",
								name: "Vegetable Pulao",
								category: "Rice",
								imageId: "209105c16a39f2cd5a7dee07a49ffb34",
								inStock: 1,
								isVeg: 1,
								price: 17600,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002105",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "75 ratings",
										ratingCountV2: "75",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475064",
								name: "Chinese Fried Rice",
								category: "Rice",
								imageId: "da53048d264314dc32595fbc0c35a57d",
								inStock: 1,
								isVeg: 1,
								price: 17600,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002104",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.7",
										ratingCount: "49 ratings",
										ratingCountV2: "49",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475059",
								name: "Jeera Rice",
								category: "Rice",
								imageId: "b78dd7162a318778271325e765746d79",
								inStock: 1,
								isVeg: 1,
								price: 11300,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002177",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "43 ratings",
										ratingCountV2: "43",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475058",
								name: "Plain Rice",
								category: "Rice",
								imageId: "ea3908bb6589ddbc38e5640a77c1140c",
								inStock: 1,
								isVeg: 1,
								price: 9900,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002175",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "56 ratings",
										ratingCountV2: "56",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475060",
								name: "Mattar Pulao",
								category: "Rice",
								imageId: "1083b8dd3703357032de2b406efd81d1",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002107",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.8",
										ratingCount: "31 ratings",
										ratingCountV2: "31",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626726",
								name: "Desi Ghee Butter Roti",
								category: "Breads",
								imageId: "dd280898e923b90065d57f90cd562596",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "3301 ratings",
										ratingCountV2: "3301",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475071",
								name: "Tawa Roti With Desi Ghee",
								category: "Breads",
								imageId: "093d3717973ad84565a513c19bfa0e33",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "1366 ratings",
										ratingCountV2: "1366",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626725",
								name: "Plain Roti",
								category: "Breads",
								imageId: "86f691646fcaab30fc8084847a83210d",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "511 ratings",
										ratingCountV2: "511",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475081",
								name: "Butter Naan",
								category: "Breads",
								description: "Amul butter and desi ghee.",
								imageId: "fb93a7b72ae984e7d878d3ebb8532dd2",
								inStock: 1,
								isVeg: 1,
								price: 5000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "627 ratings",
										ratingCountV2: "627",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475091",
								name: "Aloo Stuffed Paratha",
								category: "Breads",
								imageId: "0f211bbadf6cfb3cfb9f78c19c82204a",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "274 ratings",
										ratingCountV2: "274",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626727",
								name: "Cream Roti",
								category: "Breads",
								imageId: "dc1848e42efc5da7eb7d6948d47569a3",
								inStock: 1,
								isVeg: 1,
								price: 2300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "418 ratings",
										ratingCountV2: "418",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475084",
								name: "Garlic Naan",
								category: "Breads",
								imageId: "11b0c96747720c7af0370dba02e04a18",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "156 ratings",
										ratingCountV2: "156",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475076",
								name: "Missi Roti",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "f77e6ed4342a07f8a3e01d6d129ed1ba",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "138 ratings",
										ratingCountV2: "138",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475093",
								name: "Mixed Stuffed Paratha",
								category: "Breads",
								imageId: "ph0r3xncm4eizsuddin4",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "302 ratings",
										ratingCountV2: "302",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475088",
								name: "Onion Kulcha With Gravy",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "ipetbkklcfa6pkuahm4i",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "119 ratings",
										ratingCountV2: "119",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475075",
								name: "Dhaniya Mint Paratha",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "m0aood1dbd8llqdlkak4",
								inStock: 1,
								isVeg: 1,
								price: 5000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "150 ratings",
										ratingCountV2: "150",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475078",
								name: "Jungli Roti",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "wx0uhyjsvdxfagcdbohz",
								inStock: 1,
								isVeg: 1,
								price: 5400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "193 ratings",
										ratingCountV2: "193",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475086",
								name: "Cheese Naan",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "3277a5036038583e135f67063755d9bf",
								inStock: 1,
								isVeg: 1,
								price: 8900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "46 ratings",
										ratingCountV2: "46",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475079",
								name: "Plain Naan",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "c3b856d6b035d64cb9f3eb7314efbbf5",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "77 ratings",
										ratingCountV2: "77",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626729",
								name: "Onion Kulcha",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "13942c95cd6a6bf1ebb6b2dad5c6f8d6",
								inStock: 1,
								isVeg: 1,
								price: 5400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.1",
										ratingCount: "50 ratings",
										ratingCountV2: "50",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475095",
								name: "Stuffed Naan",
								category: "Breads",
								imageId: "1d9cfd06545fe4fe91c9a5269a2bf4f2",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "67 ratings",
										ratingCountV2: "67",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475082",
								name: "Cream Naan",
								category: "Breads",
								imageId: "2898b66ccd9d18f75729a534cfac9675",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "62 ratings",
										ratingCountV2: "62",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475043",
								name: "Boondi Raita",
								category: "Accompaniments",
								imageId: "d8249b64b457895aa9853467c8b71cc4",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {
									variantGroups: [
										{
											groupId: "2951448",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878920",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878921",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "144 ratings",
										ratingCountV2: "144",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475045",
								name: "Mixed Raita",
								category: "Accompaniments",
								imageId: "83586bed5c5ab2e37e52d325854b7539",
								inStock: 1,
								isVeg: 1,
								price: 6800,
								variants: {
									variantGroups: [
										{
											groupId: "2951450",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878924",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878925",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "150 ratings",
										ratingCountV2: "150",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475048",
								name: "Pineapple Raita",
								category: "Accompaniments",
								imageId: "5da9b2718391338dd2000267873ed3dc",
								inStock: 1,
								isVeg: 1,
								price: 7200,
								variants: {
									variantGroups: [
										{
											groupId: "2951453",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878930",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878931",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.4",
										ratingCount: "131 ratings",
										ratingCountV2: "131",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475047",
								name: "Aloo Raita",
								category: "Accompaniments",
								imageId: "a1f48bd5f7f4b88e3837ee7f2c3a001f",
								inStock: 1,
								isVeg: 1,
								price: 6800,
								variants: {
									variantGroups: [
										{
											groupId: "2951452",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878927",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878929",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "32 ratings",
										ratingCountV2: "32",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475054",
								name: "Sirka Pyaz",
								category: "Accompaniments",
								imageId: "d0bc7a925df79c6aa6c45b94bfcbd312",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "218 ratings",
										ratingCountV2: "218",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475041",
								name: "Green Salad",
								category: "Accompaniments",
								description: "Salad",
								imageId: "9b7192a77bd5280b8c4254418e6b66ce",
								inStock: 1,
								isVeg: 1,
								price: 9000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "131 ratings",
										ratingCountV2: "131",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475056",
								name: "Papad",
								category: "Accompaniments",
								imageId: "a9b1f3c6ed4450835f81db2cb96e9cbc",
								inStock: 1,
								isVeg: 1,
								price: 4100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "88 ratings",
										ratingCountV2: "88",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475053",
								name: "Jeera Lassi",
								category: "Beverages",
								imageId: "d8de9f31b612c79f9c4a6f3915260641",
								inStock: 1,
								isVeg: 1,
								price: 7600,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.6",
										ratingCount: "62 ratings",
										ratingCountV2: "62",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475098",
								name: "Kheer Kesari",
								category: "Desserts",
								description: "Serves 1",
								imageId: "qrwzcazs5qwedayp5xyh",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "520 ratings",
										ratingCountV2: "520",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014809",
								name: "Gulab Jamun (1 Pc)",
								category: "Desserts",
								description: "Serves 1",
								imageId: "95023e50aa81457820229d7ef1751996",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								showImage: true,
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.3",
										ratingCount: "5 ratings",
										ratingCountV2: "5",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
				type: "CATEGORY_TYPE_RECOMMENDED",
				showOutsidePanel: true,
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Thalis",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705787",
								name: "Kadhai Paneer Thali",
								category: "Thalis",
								description:
									"Serves 1 | Kadhai Paneer + Dal Fry + 2 Laccha Prantha.",
								imageId: "f0b67252fbfa092d9617cd7514237455",
								inStock: 1,
								isVeg: 1,
								price: 16500,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002202",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "709 ratings",
										ratingCountV2: "709",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705793",
								name: "Shahi Paneer Thali",
								category: "Thalis",
								description: "Shahi Paneer + Dal Makhani + 3 Roti",
								imageId: "tb7bzpscjybrdvszbdss",
								inStock: 1,
								isVeg: 1,
								price: 17500,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002199",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "1165 ratings",
										ratingCountV2: "1165",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475087",
								name: "Special Veg Thali",
								category: "Thalis",
								description:
									"Serves 1 | Shahi Paneer/Matar paneer/Cheese Tomato + dal + raita + rice + 3 roti.|CHEF'S SPECIAL |",
								imageId: "stbpk1r1kop6g70nok2x",
								inStock: 1,
								isVeg: 1,
								price: 22400,
								variants: {
									variantGroups: [
										{
											groupId: "26320430",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Shahi Paneer",
													default: 1,
													id: "83427864",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Matar Paneer",
													id: "83427865",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Cheese Tomato",
													id: "83427866",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002067",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466331",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "1539 ratings",
										ratingCountV2: "1539",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626733",
								name: "Economic Thali",
								category: "Thalis",
								description:
									"Mutter Paneer/Chana Paneer + Dal + Raita + Rice + 3 Roti.",
								imageId: "c6b731b7b45520f49a565cd42ba3d78a",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {
									variantGroups: [
										{
											groupId: "26320429",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Matter Paneer",
													default: 1,
													id: "83427862",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Chana Paneer",
													id: "83427863",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002134",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466335",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "360 ratings",
										ratingCountV2: "360",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705792",
								name: "Indian Style Cheese Chilli Thali",
								category: "Thalis",
								description: "Cheese Chilli +dal makhani + 2 laccha prantha",
								imageId: "58eaa59c47adc7f0b990f99e9d23d92e",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002204",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "349 ratings",
										ratingCountV2: "349",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "57426833",
								name: "Special Maharaja Thali",
								category: "Thalis",
								description:
									"Paneer Butter Masala + Dal Makhani + Mix Vegitable + Raita +Rice/Veg Puloa + Sweet+ 3 Roti",
								imageId: "1fa3eb5b49f23c9552ce8bf791686489",
								inStock: 1,
								isVeg: 1,
								price: 27000,
								variants: {
									variantGroups: [
										{
											groupId: "26320432",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Rice",
													default: 1,
													id: "83427869",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Pulao",
													id: "83427870",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002171",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "202 ratings",
										ratingCountV2: "202",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475085",
								name: "Mini Veg Thali",
								category: "Thalis",
								description:
									"Serves 1 | | 1 Veg dish(Aloo Matar/Chana Masala/Punjabi Chole dry)+Dal+Rice+3 Roti+Salad+pickle.",
								imageId: "gxyhzdias88hj6tpi4af",
								inStock: 1,
								isVeg: 1,
								price: 21200,
								variants: {
									variantGroups: [
										{
											groupId: "26320428",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Chana Masala",
													default: 1,
													id: "83427859",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Punjabi Chole Dry",
													id: "83427860",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Aloo Mutter",
													id: "83427861",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002068",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466629",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "455 ratings",
										ratingCountV2: "455",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "60684152",
								name: "Veg Deluxe Thali",
								category: "Thalis",
								description:
									"Serves 1 | Kadhai Paneer,Dal Makhani,Raita,Veg Pulao,2Prantha,Gulabjamun.",
								imageId: "10eed3d8037ff4c92b68875adcc8043c",
								inStock: 1,
								isVeg: 1,
								price: 25700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002169",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "285 ratings",
										ratingCountV2: "285",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705786",
								name: "Paneer Butter Masala Thali",
								category: "Thalis",
								description:
									"Paneer Butter Masala + Dal Makhani + 2 Plain Naan) (Serves 1)",
								inStock: 1,
								isVeg: 1,
								price: 19400,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002203",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "223 ratings",
										ratingCountV2: "223",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705790",
								name: "Chana Masala Thali",
								category: "Thalis",
								description: "Chana Panerr + Dal Makhani + 3 Roti",
								imageId: "dc638db06a3f478ff5a627fb77d4cdc8",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002196",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.6",
										ratingCount: "100 ratings",
										ratingCountV2: "100",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705788",
								name: "Mix Vegetable Thali ",
								category: "Thalis",
								description: "Mix Vegitable + Raita +3 Roti",
								imageId: "1fb6d0cbef1230bdd8881a1e667022bf",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002200",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "61 ratings",
										ratingCountV2: "61",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014808",
								name: "Gyan's Special Punjabi Thali With Gulab Jamun",
								category: "Thalis",
								description:
									"Serves 1 | Punjabi Paneer + Mix Veg + Dal Makhani + Raita + Gulab Jamun + 2 Jungli Roti.",
								imageId: "1fa3eb5b49f23c9552ce8bf791686489",
								inStock: 1,
								isVeg: 1,
								price: 27900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705789",
								name: "Punjabi Chole Thali ",
								category: "Thalis",
								description: "Punjabi Chole + Dal Makani +3 Roti",
								imageId: "bdb880e04fe9e67676887c4f10c9c662",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002180",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.6",
										ratingCount: "30 ratings",
										ratingCountV2: "30",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705791",
								name: "Mattar Paneer Thali",
								category: "Thalis",
								description: "Matar Paneer + Dal Makhani +3 Roti",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002198",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.5",
										ratingCount: "37 ratings",
										ratingCountV2: "37",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475103",
								name: "Veg Thali",
								category: "Thalis",
								description:
									"Serves 1 | Aloo Mattar /Chana Masala + Dal Fry + 3 Chapati + Rice + Raita",
								imageId: "1b750926121175de9d856c29b081d8f4",
								inStock: 1,
								isVeg: 1,
								price: 24800,
								variants: {
									variantGroups: [
										{
											groupId: "26320431",
											name: "Choice Of Main Course",
											variations: [
												{
													name: "Chana Masala",
													default: 1,
													id: "83427867",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Aloo Matter",
													id: "83427868",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002071",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.5",
										ratingCount: "90 ratings",
										ratingCountV2: "90",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Swiggy Exclusive Combos",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475107",
								name: "Dal Makhani Combo",
								category: "Swiggy Exclusive Combos",
								description:
									"Serves 1 | Dal Makhani + 2 Mini Laccha Paratha/2 Mini Naan.",
								imageId: "ca22c62fa7383066cbbd813ae8257f3b",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "26320434",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427873",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427874",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002188",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466338",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "302 ratings",
										ratingCountV2: "302",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475108",
								name: "Veg Biryani + Bundhi  Raita",
								category: "Swiggy Exclusive Combos",
								description:
									"Serves 1 | A Delightfully Wholesome Combo Of Aromatic Veg Biryani; Served Along With Raita.",
								imageId: "daef4a96b18ec74d7230028fde54e8a2",
								inStock: 1,
								isVeg: 1,
								price: 20700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002146",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
									{
										groupId: "16466334",
										groupName: "Addons",
										choices: [
											{
												id: "15865665",
												name: "Jeera Lassi",
												price: 7000,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "423 ratings",
										ratingCountV2: "423",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014810",
								name: "Rajma Chawal Combo",
								category: "Swiggy Exclusive Combos",
								imageId: "6c9a0f3250f6f06bb13c1d8c5fb0fb13",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.2",
										ratingCount: "11 ratings",
										ratingCountV2: "11",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "69853879",
								name: "Cheese Tomato Combo ",
								category: "Swiggy Exclusive Combos",
								description:
									"Cheese Tomato + 2 Mini Laccha Paratha/2 Mini Naan.",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "26320435",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427875",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427876",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002109",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "30 ratings",
										ratingCountV2: "30",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705781",
								name: "Mix Veg Combo",
								category: "Swiggy Exclusive Combos",
								description:
									"Mix Vegitable(Small Portion)+ 2 Mini Laccha Paratha/2 Mini Naan.",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "26320437",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427879",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427880",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002117",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "35 ratings",
										ratingCountV2: "35",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705785",
								name: "Shahi Paneer Combo",
								category: "Swiggy Exclusive Combos",
								description: "Shahi Paneer (Small Portion)+ 2 Mini Naan.",
								imageId: "fw7sasltxgsyvealdqrd",
								inStock: 1,
								isVeg: 1,
								price: 19800,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002124",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "78 ratings",
										ratingCountV2: "78",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705783",
								name: "Chana Paneer Masala Combo",
								category: "Swiggy Exclusive Combos",
								description:
									"Chana Paneer(Small Portion) + 2 Mini Laccha Paratha/2 Mini Naan.",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {
									variantGroups: [
										{
											groupId: "26320433",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427871",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427872",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002153",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "5.0",
										ratingCount: "14 ratings",
										ratingCountV2: "14",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014813",
								name: "Palak Paneer Combo ",
								category: "Swiggy Exclusive Combos",
								description: "Palak Paneer + 3 Roti.",
								inStock: 1,
								isVeg: 1,
								price: 20700,
								variants: {
									variantGroups: [
										{
											groupId: "26320438",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427881",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427882",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014812",
								name: "Mushroom Mutter Combo ",
								category: "Swiggy Exclusive Combos",
								description:
									"Mushroom Mutter + 2 Mini Laccha Paratha/2 Mini Naan.",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "26320436",
											name: "Choice Of Breads",
											variations: [
												{
													name: "2 Mini Naan",
													default: 1,
													id: "83427877",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "2 Mini Laccha Paratha",
													id: "83427878",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014811",
								name: "Dal Makhani Naan Combo",
								category: "Swiggy Exclusive Combos",
								description: "Serves 1",
								inStock: 1,
								isVeg: 1,
								price: 19800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "5.0",
										ratingCount: "3 ratings",
										ratingCountV2: "3",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014814",
								name: "Veg Pulao With Gravy Combo",
								category: "Swiggy Exclusive Combos",
								inStock: 1,
								isVeg: 1,
								price: 22100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Best Price Combos",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705780",
								name: "Kadhai Paneer Combo",
								category: "Best Price Combos",
								description:
									"Kadhai Paneer(Small Portion) + Plain Naan/ Laccha Prantha",
								inStock: 1,
								isVeg: 1,
								price: 19800,
								variants: {
									variantGroups: [
										{
											groupId: "26320439",
											name: "Choice Of Breads",
											variations: [
												{
													name: "Plain Naan",
													default: 1,
													id: "83427883",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Laccha Paratha",
													id: "83427884",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002113",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "237 ratings",
										ratingCountV2: "237",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014822",
								name: "Malai Methi Matar With 2 Mirchi Paratha",
								category: "Best Price Combos",
								imageId: "73d6800befa9453d6b7f18cbd7c44f3c",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "12 ratings",
										ratingCountV2: "12",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "56705779",
								name: "Paneer Butter Masala Combo",
								category: "Best Price Combos",
								description:
									"Paneer Butter Masala (Small Portion) + Plain Naan/ Laccha Paratha",
								inStock: 1,
								isVeg: 1,
								price: 20300,
								variants: {
									variantGroups: [
										{
											groupId: "26320440",
											name: "Choice Of Breads",
											variations: [
												{
													name: "Plain Naan",
													default: 1,
													id: "83427885",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Laccha Paratha",
													id: "83427886",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002130",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "47 ratings",
										ratingCountV2: "47",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014825",
								name: "Chole Rice Combo",
								category: "Best Price Combos",
								imageId: "83e62a8737a03ebf834788cbdc7d0422",
								inStock: 1,
								isVeg: 1,
								price: 15300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014823",
								name: "Spicy Punjabi Paneer With 2 Mini Junglee Paratha",
								category: "Best Price Combos",
								imageId: "5217b5b28e5267822f29c26f7d5af665",
								inStock: 1,
								isVeg: 1,
								price: 22500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "5 ratings",
										ratingCountV2: "5",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014824",
								name: "Chana Ki Dal Fry With 2 Paratha",
								category: "Best Price Combos",
								imageId: "0e91ca107da3e6e5236b41a279021970",
								inStock: 1,
								isVeg: 1,
								price: 14900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014826",
								name: "Punjabi Chole Dry With 3 Roti",
								category: "Best Price Combos",
								imageId: "f217f19ced1f4499d611748593eb8038",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Gyan Special Vegetables",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475106",
								name: "Kadai Paneer",
								category: "Gyan Special Vegetables",
								description:
									"An irresistible preparation with paneer cooked in a perfectly seasoned onion-tomato gravy.",
								imageId: "v6qqr63vxwladp6ztzra",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951472",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878968",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878969",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002189",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "863 ratings",
										ratingCountV2: "863",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475109",
								name: "Indian Cheese Chilli",
								category: "Gyan Special Vegetables",
								description:
									"A refreshing and soothing made by stuffing overload of cheese ,chilli & veggies.",
								imageId: "hkqdmp6rtvlcdhrz8drg",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951473",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878970",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878971",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002185",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "685 ratings",
										ratingCountV2: "685",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475100",
								name: "Paneer Butter Masala ",
								category: "Gyan Special Vegetables",
								description: "Paneer butter masala",
								imageId: "646673b6dd6d2f90c9ab9a0722bf3f43",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951470",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878964",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878965",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002075",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "382 ratings",
										ratingCountV2: "382",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475111",
								name: "Paneer Bhurji",
								category: "Gyan Special Vegetables",
								imageId: "oudbhaz6l1drey9awqjb",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951474",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878972",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878973",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002183",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "247 ratings",
										ratingCountV2: "247",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475112",
								name: "Lemon Paneer",
								category: "Gyan Special Vegetables",
								description:
									"Made with a handful of pantry ingredients, this lemon paneer combo of perfect to have anytime in the day.",
								imageId: "cxi7zkbl2eyyp9pqknxv",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951475",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878974",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878975",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002179",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "441 ratings",
										ratingCountV2: "441",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475092",
								name: "Shahi Korma",
								category: "Gyan Special Vegetables",
								imageId: "chlxhrgrsehpgmmategg",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951467",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878958",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878959",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002197",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "298 ratings",
										ratingCountV2: "298",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475102",
								name: "Paneer Do Pyaza",
								category: "Gyan Special Vegetables",
								imageId: "tz7m7vtvtxle9eegh3oq",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951471",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878966",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878967",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002073",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "99 ratings",
										ratingCountV2: "99",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475113",
								name: "Punjabi Paneer",
								category: "Gyan Special Vegetables",
								imageId: "4d8bb08193663efa8cc1ce1f9941fa19",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951476",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878976",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878977",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002173",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "119 ratings",
										ratingCountV2: "119",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475097",
								name: "Mushroom Do Pyaza",
								category: "Gyan Special Vegetables",
								imageId: "ljkewrczgx9hjgrxhhtx",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951469",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878962",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878963",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002086",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "180 ratings",
										ratingCountV2: "180",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475089",
								name: "Mattar Malai Methi",
								category: "Gyan Special Vegetables",
								imageId: "fpxbdbrybp08vhrbr4to",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951466",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878956",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878957",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002201",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "156 ratings",
										ratingCountV2: "156",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475094",
								name: "Mushroom Masala",
								category: "Gyan Special Vegetables",
								imageId: "9dcdb58e7382fcbdb6f7ad6f8ed90889",
								inStock: 1,
								isVeg: 1,
								price: 20800,
								variants: {
									variantGroups: [
										{
											groupId: "2951468",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878960",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12500,
													id: "9878961",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002195",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.0",
										ratingCount: "34 ratings",
										ratingCountV2: "34",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Veg Main Course",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475122",
								name: "Shahi Paneer",
								category: "Veg Main Course",
								description:
									"A scrumptious combo of perfectly cooked shahi paneer made with lots with veggies and creme.",
								imageId: "vsbfwly2ey3owajtvycp",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {
									variantGroups: [
										{
											groupId: "2951480",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878984",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11700,
													id: "9878985",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002193",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "1756 ratings",
										ratingCountV2: "1756",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475125",
								name: "Cheese Tomato",
								category: "Veg Main Course",
								imageId: "fpi9ke5lb3mwzshshxhu",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "2951483",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878990",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878991",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002190",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "467 ratings",
										ratingCountV2: "467",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475124",
								name: "Mix Vegetable",
								category: "Veg Main Course",
								imageId: "krviqdciarzt6ln9nwda",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951482",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "26212725",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878988",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002191",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "489 ratings",
										ratingCountV2: "489",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475044",
								name: "Mattar Paneer",
								category: "Veg Main Course",
								imageId: "c11c66f9dde8f73d943ef204495b3c11",
								inStock: 1,
								isVeg: 1,
								price: 14000,
								variants: {
									variantGroups: [
										{
											groupId: "2951449",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878922",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 10800,
													id: "9878923",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002072",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "126 ratings",
										ratingCountV2: "126",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475123",
								name: "Malai Kofta",
								category: "Veg Main Course",
								description:
									"A creamy dish with melt-in-the-mouth paneer and vegetable balls simmered in a tasty gravy.",
								imageId: "dqbvhiato5ohz6uaqjw7",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {
									variantGroups: [
										{
											groupId: "2951481",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878986",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878987",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002192",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "404 ratings",
										ratingCountV2: "404",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475046",
								name: "Palak Paneer",
								category: "Veg Main Course",
								imageId: "pn9lkyc0xyvzvfb58x2b",
								inStock: 1,
								isVeg: 1,
								price: 13100,
								variants: {
									variantGroups: [
										{
											groupId: "2951451",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878926",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 9000,
													id: "9878928",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002070",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "293 ratings",
										ratingCountV2: "293",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475061",
								name: "Rajma",
								category: "Veg Main Course",
								imageId: "451f6b42dc66356ca3a35e296007631a",
								inStock: 1,
								isVeg: 1,
								price: 17100,
								variants: {
									variantGroups: [
										{
											groupId: "2951458",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878940",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5900,
													id: "9878941",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002106",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "77 ratings",
										ratingCountV2: "77",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475042",
								name: "Mushroom Mattar",
								category: "Veg Main Course",
								imageId: "jftbdnr5saqpszgfovfq",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951447",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878918",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12200,
													id: "9878919",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002074",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "102 ratings",
										ratingCountV2: "102",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "60312536",
								name: "Dum Aloo",
								category: "Veg Main Course",
								imageId: "5c3f0c0395ad898bd28744e3c89efd52",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "8062351",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "26966094",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "26966095",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002181",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.4",
										ratingCount: "46 ratings",
										ratingCountV2: "46",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475055",
								name: "Aloo Mattar",
								category: "Veg Main Course",
								imageId: "e197f347d8f40375b95fedbdad4ca568",
								inStock: 1,
								isVeg: 1,
								price: 11700,
								variants: {
									variantGroups: [
										{
											groupId: "2951456",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878936",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878937",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002206",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.7",
										ratingCount: "43 ratings",
										ratingCountV2: "43",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475049",
								name: "Punjabi Chole Dry",
								category: "Veg Main Course",
								inStock: 1,
								isVeg: 1,
								price: 14000,
								variants: {
									variantGroups: [
										{
											groupId: "2951454",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878932",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 10800,
													id: "9878933",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002212",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "83 ratings",
										ratingCountV2: "83",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475127",
								name: "Palak Kofta",
								category: "Veg Main Course",
								imageId: "c2ddd99db9e851abeeeb603680294e23",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951485",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878994",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 12200,
													id: "9878995",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002178",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.7",
										ratingCount: "17 ratings",
										ratingCountV2: "17",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475126",
								name: "Mattar Kofta",
								category: "Veg Main Course",
								imageId: "8b5f3dfd1edf8713ad1ad22a7fd66720",
								inStock: 1,
								isVeg: 1,
								price: 15800,
								variants: {
									variantGroups: [
										{
											groupId: "2951484",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878992",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 11300,
													id: "9878993",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002176",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "13 ratings",
										ratingCountV2: "13",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475057",
								name: "Aloo Palak",
								category: "Veg Main Course",
								imageId: "a988053af104eabb9be7e97ecb96953d",
								inStock: 1,
								isVeg: 1,
								price: 11700,
								variants: {
									variantGroups: [
										{
											groupId: "2951457",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878938",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878939",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002174",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.9",
										ratingCount: "12 ratings",
										ratingCountV2: "12",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Seasonal Vegetables",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475066",
								name: "Aloo Methi",
								category: "Seasonal Vegetables",
								description: "Aloo gobi\n",
								imageId: "559df59d55bac1224508ca9aecd113ea",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {
									variantGroups: [
										{
											groupId: "2951460",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878944",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878945",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002092",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "65 ratings",
										ratingCountV2: "65",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475072",
								name: "Jeera Aloo",
								category: "Seasonal Vegetables",
								imageId: "0ef4e88a0572678d716c6416055d4b25",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {
									variantGroups: [
										{
											groupId: "2951462",
											name: "Quantity",
											variations: [
												{
													name: "Half (300Ml)",
													default: 1,
													id: "9878948",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full (500Ml)",
													price: 5400,
													id: "9878949",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								addons: [
									{
										groupId: "85002069",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "55 ratings",
										ratingCountV2: "55",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Dal",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475120",
								name: "Dal Makhani",
								category: "Dal",
								description: "Serves 1 | Desi ghee +amul butter",
								imageId: "p0m1dl7ok6tf4vgan5nh",
								inStock: 1,
								isVeg: 1,
								price: 18900,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002066",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "1166 ratings",
										ratingCountV2: "1166",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475117",
								name: "Desi Ghee Dal Fry",
								category: "Dal",
								description: "Desi ghee(Serves 1).",
								imageId: "26374f4e89773b2b504318c907e1a225",
								inStock: 1,
								isVeg: 1,
								price: 14400,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002165",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {
									text: "Bestseller",
									textColor: "#ffffff",
									topBackgroundColor: "#d53d4c",
									bottomBackgroundColor: "#b02331",
								},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								isBestseller: true,
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "724 ratings",
										ratingCountV2: "724",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475119",
								name: "Dal Fry Yellow [Mongi Masri]",
								category: "Dal",
								description: "Desi ghee",
								imageId: "11a7bbcf2e943a543862a6d36333981e",
								inStock: 1,
								isVeg: 1,
								price: 16200,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002137",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "142 ratings",
										ratingCountV2: "142",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475118",
								name: "Special Desi Ghee Chana Dal Fry",
								category: "Dal",
								description: "Desi ghee",
								imageId: "fa99c945866cd08042f424fc66423972",
								inStock: 1,
								isVeg: 1,
								price: 14400,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002152",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "97 ratings",
										ratingCountV2: "97",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475121",
								name: "Special Dal Creamy",
								category: "Dal",
								description: "Desi ghee +fresh cream",
								imageId: "e0cfea030503247c011bd5feee14ba49",
								inStock: 1,
								isVeg: 1,
								price: 20700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002194",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.6",
										ratingCount: "75 ratings",
										ratingCountV2: "75",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Rice",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014807",
								name: "Vegetable Biryani",
								category: "Rice",
								imageId: "655ca551f96e350d5a3c923adf8ae2df",
								inStock: 1,
								isVeg: 1,
								price: 22500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.5",
										ratingCount: "6 ratings",
										ratingCountV2: "6",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475062",
								name: "Vegetable Pulao",
								category: "Rice",
								imageId: "209105c16a39f2cd5a7dee07a49ffb34",
								inStock: 1,
								isVeg: 1,
								price: 17600,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002105",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "75 ratings",
										ratingCountV2: "75",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475064",
								name: "Chinese Fried Rice",
								category: "Rice",
								imageId: "da53048d264314dc32595fbc0c35a57d",
								inStock: 1,
								isVeg: 1,
								price: 17600,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002104",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.7",
										ratingCount: "49 ratings",
										ratingCountV2: "49",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475059",
								name: "Jeera Rice",
								category: "Rice",
								imageId: "b78dd7162a318778271325e765746d79",
								inStock: 1,
								isVeg: 1,
								price: 11300,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002177",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "43 ratings",
										ratingCountV2: "43",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475058",
								name: "Plain Rice",
								category: "Rice",
								imageId: "ea3908bb6589ddbc38e5640a77c1140c",
								inStock: 1,
								isVeg: 1,
								price: 9900,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002175",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "56 ratings",
										ratingCountV2: "56",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475060",
								name: "Mattar Pulao",
								category: "Rice",
								imageId: "1083b8dd3703357032de2b406efd81d1",
								inStock: 1,
								isVeg: 1,
								price: 16700,
								variants: {},
								variantsV2: {},
								addons: [
									{
										groupId: "85002107",
										groupName: "Accompaniments",
										choices: [
											{
												id: "70126609",
												name: "Mini Kheer",
												price: 4600,
												isVeg: 1,
												isEnabled: 1,
											},
											{
												id: "71893526",
												name: "Sirka Pyaz",
												price: 1700,
												inStock: 1,
												isVeg: 1,
												isEnabled: 1,
											},
										],
										maxAddons: -1,
										maxFreeAddons: -1,
									},
								],
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.8",
										ratingCount: "31 ratings",
										ratingCountV2: "31",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Breads",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626726",
								name: "Desi Ghee Butter Roti",
								category: "Breads",
								imageId: "dd280898e923b90065d57f90cd562596",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "3301 ratings",
										ratingCountV2: "3301",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475071",
								name: "Tawa Roti With Desi Ghee",
								category: "Breads",
								imageId: "093d3717973ad84565a513c19bfa0e33",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "1366 ratings",
										ratingCountV2: "1366",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626725",
								name: "Plain Roti",
								category: "Breads",
								imageId: "86f691646fcaab30fc8084847a83210d",
								inStock: 1,
								isVeg: 1,
								price: 1800,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "511 ratings",
										ratingCountV2: "511",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475081",
								name: "Butter Naan",
								category: "Breads",
								description: "Amul butter and desi ghee.",
								imageId: "fb93a7b72ae984e7d878d3ebb8532dd2",
								inStock: 1,
								isVeg: 1,
								price: 5000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "627 ratings",
										ratingCountV2: "627",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475091",
								name: "Aloo Stuffed Paratha",
								category: "Breads",
								imageId: "0f211bbadf6cfb3cfb9f78c19c82204a",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "274 ratings",
										ratingCountV2: "274",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626727",
								name: "Cream Roti",
								category: "Breads",
								imageId: "dc1848e42efc5da7eb7d6948d47569a3",
								inStock: 1,
								isVeg: 1,
								price: 2300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "418 ratings",
										ratingCountV2: "418",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475090",
								name: "Cheese Naan With Gravy",
								category: "Breads",
								description: "Desi ghee.",
								inStock: 1,
								isVeg: 1,
								price: 17600,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "55 ratings",
										ratingCountV2: "55",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475084",
								name: "Garlic Naan",
								category: "Breads",
								imageId: "11b0c96747720c7af0370dba02e04a18",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "156 ratings",
										ratingCountV2: "156",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475076",
								name: "Missi Roti",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "f77e6ed4342a07f8a3e01d6d129ed1ba",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "138 ratings",
										ratingCountV2: "138",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475093",
								name: "Mixed Stuffed Paratha",
								category: "Breads",
								imageId: "ph0r3xncm4eizsuddin4",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.8",
										ratingCount: "302 ratings",
										ratingCountV2: "302",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475088",
								name: "Onion Kulcha With Gravy",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "ipetbkklcfa6pkuahm4i",
								inStock: 1,
								isVeg: 1,
								price: 12200,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "119 ratings",
										ratingCountV2: "119",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475075",
								name: "Dhaniya Mint Paratha",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "m0aood1dbd8llqdlkak4",
								inStock: 1,
								isVeg: 1,
								price: 5000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.1",
										ratingCount: "150 ratings",
										ratingCountV2: "150",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475078",
								name: "Jungli Roti",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "wx0uhyjsvdxfagcdbohz",
								inStock: 1,
								isVeg: 1,
								price: 5400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "193 ratings",
										ratingCountV2: "193",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475086",
								name: "Cheese Naan",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "3277a5036038583e135f67063755d9bf",
								inStock: 1,
								isVeg: 1,
								price: 8900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "46 ratings",
										ratingCountV2: "46",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475079",
								name: "Plain Naan",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "c3b856d6b035d64cb9f3eb7314efbbf5",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "77 ratings",
										ratingCountV2: "77",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626729",
								name: "Onion Kulcha",
								category: "Breads",
								description: "Desi ghee.",
								imageId: "13942c95cd6a6bf1ebb6b2dad5c6f8d6",
								inStock: 1,
								isVeg: 1,
								price: 5400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.1",
										ratingCount: "50 ratings",
										ratingCountV2: "50",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475095",
								name: "Stuffed Naan",
								category: "Breads",
								imageId: "1d9cfd06545fe4fe91c9a5269a2bf4f2",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "67 ratings",
										ratingCountV2: "67",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475082",
								name: "Cream Naan",
								category: "Breads",
								imageId: "2898b66ccd9d18f75729a534cfac9675",
								inStock: 1,
								isVeg: 1,
								price: 5900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.9",
										ratingCount: "62 ratings",
										ratingCountV2: "62",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "34626728",
								name: "Kali Mirch Paratha",
								category: "Breads",
								description: "Desi ghee.",
								inStock: 1,
								isVeg: 1,
								price: 5000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.8",
										ratingCount: "41 ratings",
										ratingCountV2: "41",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "122573966",
								name: "Laccha Prantha",
								category: "Breads",
								inStock: 1,
								isVeg: 1,
								price: 6500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Accompaniments",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475043",
								name: "Boondi Raita",
								category: "Accompaniments",
								imageId: "d8249b64b457895aa9853467c8b71cc4",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {
									variantGroups: [
										{
											groupId: "2951448",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878920",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878921",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.4",
										ratingCount: "144 ratings",
										ratingCountV2: "144",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475045",
								name: "Mixed Raita",
								category: "Accompaniments",
								imageId: "83586bed5c5ab2e37e52d325854b7539",
								inStock: 1,
								isVeg: 1,
								price: 6800,
								variants: {
									variantGroups: [
										{
											groupId: "2951450",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878924",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878925",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.5",
										ratingCount: "150 ratings",
										ratingCountV2: "150",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475048",
								name: "Pineapple Raita",
								category: "Accompaniments",
								imageId: "5da9b2718391338dd2000267873ed3dc",
								inStock: 1,
								isVeg: 1,
								price: 7200,
								variants: {
									variantGroups: [
										{
											groupId: "2951453",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878930",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878931",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.4",
										ratingCount: "131 ratings",
										ratingCountV2: "131",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475047",
								name: "Aloo Raita",
								category: "Accompaniments",
								imageId: "a1f48bd5f7f4b88e3837ee7f2c3a001f",
								inStock: 1,
								isVeg: 1,
								price: 6800,
								variants: {
									variantGroups: [
										{
											groupId: "2951452",
											name: "Quantity",
											variations: [
												{
													name: "Half",
													default: 1,
													id: "9878927",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
												{
													name: "Full",
													price: 3600,
													id: "9878929",
													inStock: 1,
													isVeg: 1,
													isEnabled: 1,
												},
											],
										},
									],
								},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.0",
										ratingCount: "32 ratings",
										ratingCountV2: "32",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475054",
								name: "Sirka Pyaz",
								category: "Accompaniments",
								imageId: "d0bc7a925df79c6aa6c45b94bfcbd312",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "218 ratings",
										ratingCountV2: "218",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475041",
								name: "Green Salad",
								category: "Accompaniments",
								description: "Salad",
								imageId: "9b7192a77bd5280b8c4254418e6b66ce",
								inStock: 1,
								isVeg: 1,
								price: 9000,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.2",
										ratingCount: "131 ratings",
										ratingCountV2: "131",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475056",
								name: "Papad",
								category: "Accompaniments",
								imageId: "a9b1f3c6ed4450835f81db2cb96e9cbc",
								inStock: 1,
								isVeg: 1,
								price: 4100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.7",
										ratingCount: "88 ratings",
										ratingCountV2: "88",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Beverages",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475053",
								name: "Jeera Lassi",
								category: "Beverages",
								imageId: "d8de9f31b612c79f9c4a6f3915260641",
								inStock: 1,
								isVeg: 1,
								price: 7600,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "3.6",
										ratingCount: "62 ratings",
										ratingCountV2: "62",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Desserts",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "32475098",
								name: "Kheer Kesari",
								category: "Desserts",
								description: "Serves 1",
								imageId: "qrwzcazs5qwedayp5xyh",
								inStock: 1,
								isVeg: 1,
								price: 6300,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "520 ratings",
										ratingCountV2: "520",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "114014809",
								name: "Gulab Jamun (1 Pc)",
								category: "Desserts",
								description: "Serves 1",
								imageId: "95023e50aa81457820229d7ef1751996",
								inStock: 1,
								isVeg: 1,
								price: 4500,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
									portionSize: "Serves 1",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "2.3",
										ratingCount: "5 ratings",
										ratingCountV2: "5",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
				title: "Family Binge Combos",
				itemCards: [
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "61988564",
								name: "Dum Aloo (Half ) + Punjabi Paneer (Half) + Butter Roti (8 Pcs) + Raita (Boondi )",
								category: "Family Binge Combos",
								inStock: 1,
								isVeg: 1,
								price: 47400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "61988566",
								name: "Malai Kofta (Half) + Dal Makhani + Butter Roti ( 8 Pcs)",
								category: "Family Binge Combos",
								inStock: 1,
								isVeg: 1,
								price: 39900,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {
										rating: "4.3",
										ratingCount: "6 ratings",
										ratingCountV2: "6",
									},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "61988562",
								name: "Dal Makhani +Shahi Paneer (Half) + Butter Naan (2 Pcs) + Plain Roti (3 Pcs)",
								category: "Family Binge Combos",
								inStock: 1,
								isVeg: 1,
								price: 44400,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
					{
						card: {
							"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
							info: {
								id: "61988568",
								name: "Chinese Fried Rice + Shahi Korma (Half) + Mix Raita",
								category: "Family Binge Combos",
								inStock: 1,
								isVeg: 1,
								price: 41100,
								variants: {},
								variantsV2: {},
								itemAttribute: {
									vegClassifier: "VEG",
								},
								ribbon: {},
								type: "ITEM",
								itemBadge: {},
								badgesV2: {},
								ratings: {
									aggregatedRating: {},
								},
							},
							analytics: {},
							hideRestaurantDetails: true,
						},
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type":
					"type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
				title: "Breakfast",
				categories: [
					{
						title: "Breakfast Menu",
						itemCards: [
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "73793687",
										name: "Aloo Paratha  ",
										category: "Breakfast",
										imageId: "0f211bbadf6cfb3cfb9f78c19c82204a",
										isVeg: 1,
										price: 4500,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {
												rating: "2.8",
												ratingCount: "23 ratings",
												ratingCountV2: "23",
											},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "73793686",
										name: "Mixed Paratha  ",
										category: "Breakfast",
										imageId: "e138060e120196be4190dd3b0cd82b9e",
										isVeg: 1,
										price: 5400,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {
												rating: "3.0",
												ratingCount: "16 ratings",
												ratingCountV2: "16",
											},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014815",
										name: "Onion Kulche  ",
										category: "Breakfast",
										imageId: "13942c95cd6a6bf1ebb6b2dad5c6f8d6",
										isVeg: 1,
										price: 6800,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014819",
										name: "Cheese Naan Gravy",
										category: "Breakfast",
										isVeg: 1,
										price: 17100,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {
												rating: "3.4",
												ratingCount: "5 ratings",
												ratingCountV2: "5",
											},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014816",
										name: "Kalimirchi Parantha    ",
										category: "Breakfast",
										imageId: "e73720af01f10e44ff189e5680430ee4",
										isVeg: 1,
										price: 5400,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014817",
										name: "Dhania Mint Paratha  ",
										category: "Breakfast",
										isVeg: 1,
										price: 5400,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "73793692",
										name: "Lachha Paratha  ",
										category: "Breakfast",
										isVeg: 1,
										price: 4500,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {
												rating: "3.1",
												ratingCount: "13 ratings",
												ratingCountV2: "13",
											},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014818",
										name: "Junglee Roti",
										category: "Breakfast",
										imageId: "8434cf389d643ac6f0bf21ac62935c27",
										isVeg: 1,
										price: 5400,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014820",
										name: "Onion Kulche Gravy",
										category: "Breakfast",
										isVeg: 1,
										price: 13500,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
							{
								card: {
									"@type":
										"type.googleapis.com/swiggy.presentation.food.v2.Dish",
									info: {
										id: "114014821",
										name: "Namak Ajwain Tandoori Paratha",
										category: "Breakfast",
										isVeg: 1,
										price: 5900,
										variants: {},
										variantsV2: {},
										nextAvailableAtMessage:
											"Next available at 9:30 am, tomorrow",
										itemAttribute: {
											vegClassifier: "VEG",
										},
										ribbon: {},
										type: "ITEM",
										itemBadge: {},
										badgesV2: {},
										ratings: {
											aggregatedRating: {},
										},
									},
									analytics: {},
									hideRestaurantDetails: true,
								},
							},
						],
					},
				],
			},
		},
	},
	{
		card: {
			card: {
				"@type":
					"type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
				type: "FSSAI",
				imageId: "fssai_final_edss9i",
				text: ["License No. 12118441000170"],
			},
		},
	},
	{
		card: {
			card: {
				"@type":
					"type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
				name: "Gyan Vaishnav Dhaba",
				area: "Industrial Area",
				completeAddress:
					"Link Rd, Near Gill Chowk, Sewak Pura, Industrial Area-B, Ludhiana, Punjab 141003",
			},
		},
	},
];
