import { Link } from "react-router-dom";
import { useAppSelector } from "../hook/reduxHooks";

const ErrorPage = () => {
	const { geo_location } = useAppSelector((store) => store.device);
	const city = geo_location?.address?.city;
	const district = geo_location?.address?.state_district;
	return (
		<section className="py-10 px-0 bg-white w-screen h-screen flex flex-col justify-center">
			<div className="flex flex-col">
				<h1 className="text-center text-8xl text-primary font-bold">404</h1>
				<h2 className="text-center text-2xl text-black/50 font-bold">
					Not Found
				</h2>
			</div>

			<div className="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[400px] bg-center bg-no-repeat"></div>

			<div className="flex flex-col justify-center items-center gap-5">
				<div className="text-center grid gap-2">
					<h3 className="text-2xl font-bold">Look like you're lost</h3>

					<p className="text-sm">The page you are looking for not avaible!</p>
				</div>

				<Link
					to={`/${city || district}`}
					className="bg-primary text-white px-10 py-2 rounded-sm hover:bg-[#4f973b]">
					Go to Home
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
