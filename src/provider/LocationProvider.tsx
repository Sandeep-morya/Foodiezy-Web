import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { setServiceArea } from "../redux/deviceSlice";

const data = [
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

const LocationProvider = ({ children }: { children: JSX.Element }) => {
	const { serviceAreaName } = useParams();
	const { serviceArea } = useAppSelector((store) => store.device);
	const dispatch = useAppDispatch();

	console.log("ser-b", serviceArea);

	if (serviceArea?.name?.toLowerCase() === serviceAreaName?.toLowerCase()) {
		return children;
	}

	console.log("executed");
	if (serviceAreaName) {
		for (const x of data) {
			if (x.toLowerCase() === serviceAreaName.toLowerCase()) {
				dispatch(setServiceArea({ name: x }));
				return children;
			}
		}
		alert(`Our services are not in ${serviceAreaName}`);
	}
	return <Navigate to={"/"} />;
};

export default LocationProvider;
