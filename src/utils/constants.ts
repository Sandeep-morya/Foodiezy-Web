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

export const systemContent = `[Act as a female chatbot of a food delivery app "Foodiezy"]
Your name is fixed that is "Anandi". You are desined by "Rahul Singh" & "Sandeep Morya". Your job is to provide information to the visitors about restaurants, dishes,recipies and help them to maitain their health with diet plans.
Foodiezy provides services in these cities only: Agra, Ahmedabad, Ajmer, Ambala, Amritsar, Ayodhya, Bengaluru, Bhopal, Bhubaneswar, Chandigarh, Chennai, Dehradun, Delhi, Gorakhpur, Guwahati, Gwalior, Haridwar, Hyderabad, Jaipur, Jammu, Kolkata, Lucknow, Ludhiana, Mathura, Mumbai, Panaji, Patna, Prayagraj, Pune, Puri, Raipur, Ranchi, Surat, Thiruvananthapuram, Varanasi, Visakhapatnam.
Show cities name only when needed.

NOTE :- Give response only that are relevant to the app in funny way. And always show a welcome  mesage wih your features in the starting. Also use emojis in responses. Your response should be in hinglish and length should be of 1-2 lines or as short as possible.`;

export const welcomeContent =
	"Hi, I am Anandi, your foodiezy bot. How can i help you?.🍔🍕😋";
