import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";
import { Navigate, useSearchParams } from "react-router-dom";
import withNavbar from "../hocs/withNavbar";
import useGetRestaurantData from "../hook/useGetRestaurantData";
import { useQuery } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { GET_RESTAURANT } from "../utils/resolvers";
import { ORIGINAL_IMG_LINK } from "../utils/links";
import Pill from "../components/common/Pill";
import { twMerge } from "tailwind-merge";
import {
	MdDeliveryDining,
	MdKeyboardArrowDown,
	MdRestaurant,
	MdStar,
} from "react-icons/md";
import MenuContent from "../components/restaurant/MenuContent";
import { addInitialMenu } from "../redux/menuSlice";
import MenuList from "../components/restaurant/MenuList";
import { MenuCard } from "../types";

const RestaurantPage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const [searchParams] = useSearchParams();
	const [tabIndex, setTabIndex] = useState(0);
	const dispatch = useAppDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = useCallback(() => {
		setShowMenu((e) => !e);
	}, []);

	const variables = { id: searchParams.get("id") };
	const args = {
		restaurantId: searchParams.get("restaurantId"),
		lat: serviceArea?.lat,
		lng: serviceArea?.lng,
	};

	const [isLoading, isError, menuData] = useGetRestaurantData(args);
	const { loading, error, data } = useQuery(GET_RESTAURANT, { variables });

	useEffect(() => {
		if (Array.isArray(menuData) && menuData.length > 0) {
			const data = [...menuData] as { card: { card: MenuCard } }[];
			const menu = data
				.slice(1, -3)
				.map((e) => e.card.card)
				.filter(
					(e) =>
						e.title !== "Breakfast" &&
						e.title !== "Lunch" &&
						e.title !== "Dinner",
				);
			dispatch(addInitialMenu(menu));
		}
	}, [dispatch, menuData]);

	if (!serviceArea || !serviceArea.lat || !serviceArea.lng) {
		return <Navigate to="/" />;
	}

	if (error || isError) {
		return <Navigate to="*" state={"503-Internal Server Error"} />;
	}

	if (loading || isLoading) {
		return <>Loading...</>;
	}

	return (
		<div className="flex w-full h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)] flex-col gap-3 p-2 lg:flex-row lg:gap-4 overflow-auto lg:overflow-hidden md:px-10 xl:px-6 2xl:px-44">
			<div className="w-full h-auto vanish-scroll-bar flex flex-col gap-2 lg:w-[420px] lg:h-full lg:overflow-y-scroll">
				{/*---:: Card ::---*/}
				<div className="w-full h-[200px] min-h-[200px] relative rounded-lg border overflow-hidden shadow-xl ">
					<img
						className="w-[100%] h-[100%] object-cover"
						src={ORIGINAL_IMG_LINK + data.restaurant.imageId}
						alt=""
					/>

					<div
						style={{
							background: "linear-gradient(to right, #fffe 60%, transparent)",
						}}
						className="absolute inset-0 flex flex-col p-2">
						<div className="p-2 text-lightblack ">
							<h1 className="font-medium text-xl">{data.restaurant.name}</h1>
							<p className="text-sm">
								{data.restaurant.areaName + ", " + data.restaurant.locality}
							</p>
						</div>
						<div className="flex items-center justify-between px-2">
							<div className="flex items-center gap-2 text-lg font-medium text-lightblack">
								<MdDeliveryDining />
								<p>{data.restaurant.delivery.duration}</p>
							</div>

							<div className="backdrop-blur-sm bg-black/30 rounded overflow-hidden p-2 flex flex-col items-center divide-y font-medium text-white text-xs">
								<div className="flex items-center gap-1">
									<p>{data.restaurant.rating}</p>
									<MdStar />
								</div>
								<p>{data.restaurant.votesString}</p>
							</div>
						</div>
						<div className="border-dashed border-t border-lightblack my-2 flex gap-2 pt-4">
							{data.restaurant.cuisines.map((title: string, index: number) => (
								<Pill key={title + index} title={title} color="bg-primary" />
							))}
						</div>
					</div>
				</div>

				{/*---:: Menu ::---*/}
				<div>
					{/*---:: Menu Heading ::---*/}
					<div className="flex justify-between items-center text-xl font-bold text-lightblack uppercase tracking-wider mt-6">
						<div className="flex gap-2 items-center">
							<MdRestaurant />
							<h1>Menu</h1>
						</div>

						<div
							className={twMerge(
								"text-3xl block transition lg:hidden",
								showMenu ? "rotate-180" : "rotate-0",
							)}
							onClick={toggleMenu}>
							<MdKeyboardArrowDown />
						</div>
					</div>
					<div
						className={twMerge(
							"h-0 opacity-0 transition-all lg:h-auto lg:opacity-100",
							showMenu && "h-full opacity-100",
						)}>
						<MenuList {...{ tabIndex, setTabIndex, toggleMenu }} />
					</div>
				</div>
			</div>
			<MenuContent tabIndex={tabIndex} />
		</div>
	);
};

const Restaurant = withNavbar(RestaurantPage);
export default Restaurant;
