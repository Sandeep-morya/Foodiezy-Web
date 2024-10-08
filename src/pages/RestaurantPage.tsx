﻿import { useState, useEffect, useCallback } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { MdKeyboardArrowDown, MdRestaurant } from "react-icons/md";
import { twMerge } from "tailwind-merge";

// :: Type Imports ::
// import type { MenuCard } from "../types";

// :: Redux Imports ::
import { addInitialMenu } from "../redux/slices/menuSlice";
import { useAppDispatch, useAppSelector } from "../hook/reduxHooks";

// :: Apollo Client Imports ::
import { useQuery/* useLazyQuery */ } from "@apollo/client";
import { GET_RESTAURANT /* GET_IMAGE */ } from "../graphql/resolvers";

// :: Custom Hooks ::
// import useGetRestaurantData from "../hook/useGetRestaurantData";

// :: Custom Components ::
import RestrotantFaceCardSkeleton from "../components/restaurant/Skeletons/RestrotantFaceCardSkeleton";
import RestrautantFaceCard from "../components/restaurant/RestrautantFaceCard";
import MenuListSkeleton from "../components/restaurant/Skeletons/MenuListSkeleton";
import MenuContentSkeleton from "../components/restaurant/Skeletons/MenuContentSkeleton";
import MenuList from "../components/restaurant/MenuList";
import MenuContent from "../components/restaurant/MenuContent";

// :: Higher Order Component Import
import withNavbar from "../hocs/withNavbar";
import { dummyData } from "../utils/constants";
// import { dummyData } from "../utils/constants";
// import { MenuCard } from "../types";

const RestaurantPage = () => {
	const { serviceArea } = useAppSelector((store) => store.device);
	const { restaurants } = useAppSelector(store => store.restaurants)
	const [searchParams, setSearchParams] = useSearchParams();
	const intialTabIndex = searchParams.get("menu")
		? Number(searchParams.get("menu"))
		: 0;
	const [tabIndex, setTabIndex] = useState(intialTabIndex);
	const dispatch = useAppDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = useCallback(() => {
		setShowMenu((e) => !e);
	}, []);

	const restaurantId = searchParams.get("restaurantId");
	const id = searchParams.get("id");

	// const args = {
	// 	restaurantId,
	// 	lat: serviceArea?.lat,
	// 	lng: serviceArea?.lng,
	// };

	// const [isLoading, isError, menuData] = useGetRestaurantData(args);
	const { loading, error, data } = useQuery(GET_RESTAURANT, {
		variables: { id },
	});
	// 	const [getImage, { loading: isLoading }] = useLazyQuery(GET_IMAGE);

	// 	const handleAdd = async() => {
	// 		try {
	// 			const data = await getImage({
	// 				variables: {serviceAreaId:id,limit:20},
	// })
	// 		} catch (error) {

	// 		}
	// }

	// useEffect(() => {
	// 	if (Array.isArray(menuData) && menuData.length > 0) {
	// 		const data = [...menuData] as { card: { card: MenuCard } }[];
	// 		let index = 0;
	// 		for (const card of data) {
	// 			if (card.card.card.title === "Recommended") {
	// 				break;
	// 			}
	// 			index++;
	// 		}
	// 		const menu = data.slice(index, -3).map((e) => e.card.card);
	// 		dispatch(addInitialMenu(menu));
	// 	}
	// }, [dispatch, menuData]);




	useEffect(() => {

		const menu_images = restaurants.map(r => r.imageId)
		if (menu_images.length > 0) {
			const data = structuredClone(dummyData)
			for (const image of menu_images) {
				for (let i = 0; i < data.length; i++) {
					for (let j = 0; i < data[i].itemCards.length; i++) {
						data[i].itemCards[j].card.info.imageId = image
					}
				}
			}
			dispatch(addInitialMenu(data))

		} else {
			dispatch(addInitialMenu(dummyData))
		}



	}, [dispatch, restaurants])

	useEffect(() => {
		setSearchParams((prev) => ({ ...prev, id, restaurantId, menu: tabIndex }));
	}, [tabIndex, setSearchParams, id, restaurantId]);

	if (!serviceArea || !serviceArea.lat || !serviceArea.lng) {
		return <Navigate to="/" />;
	}

	if (error /* || isError */) {
		return <Navigate to="*" state={"503-Internal Server Error"} />;
	}

	return (
		<main className="flex w-full h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)] flex-col gap-3 p-2 lg:flex-row lg:gap-4 overflow-auto lg:overflow-hidden md:px-10 xl:px-6 2xl:px-44">
			<article className="w-full h-auto vanish-scroll-bar flex flex-col gap-2 lg:w-[420px] lg:h-full lg:overflow-y-scroll">
				{/*---:: Card ::---*/}

				{loading /* || isLoading  */ ? (
					<RestrotantFaceCardSkeleton />
				) : (
					<RestrautantFaceCard {...data.restaurant} />
				)}

				{/*---:: Menu ::---*/}
				<section>
					{/*---:: Menu Heading ::---*/}
					<div className="flex items-center justify-between mt-6 text-xl font-bold tracking-wider uppercase text-lightblack dark:text-lightwhite">
						<div className="flex items-center gap-2">
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
						{loading /* || isLoading  */ ? (
							<MenuListSkeleton />
						) : (
							<MenuList {...{ tabIndex, setTabIndex, toggleMenu }} />
						)}
					</div>
				</section>
			</article>
			{loading /* || isLoading  */ ? (
				<MenuContentSkeleton />
			) : (
				<MenuContent
					tabIndex={tabIndex}
					restaurantId={data.restaurant.restaurantId}
					restaurantName={data.restaurant.name}
				/>
			)}
		</main>
	);
};

const Restaurant = withNavbar(RestaurantPage);
export default Restaurant;
