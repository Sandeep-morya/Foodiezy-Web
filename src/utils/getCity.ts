const Cities = [
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

const getCity = (name: string | undefined) => {
	if (name) {
		for (const city of Cities) {
			if (city.toLowerCase() === name.toLowerCase()) {
				return city;
			}
		}
	}
	return undefined;
};

export default getCity;
