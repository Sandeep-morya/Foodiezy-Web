﻿// import React from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { Info } from "../../types";
import { MD_IMG_LINK } from "../../utils/links";
import Pill from "../common/Pill";
import { PiCheckSquareOffsetFill, PiShoppingBag } from "react-icons/pi";

const DishCard = (card: Info) => {
	const src = card.imageId ? MD_IMG_LINK + card.imageId : "/sample.png";
	return (
		<div className="relative dish-card w-full h-[240px] border rounded-lg overflow-hidden group">
			<img
				className="w-full h-full scale-100 transition-all duration-300 object-cover group-hover:scale-125"
				src={src}
				alt=""
			/>
			<div className="dish-card-overlay absolute bottom-0  left-0 w-full h-[90px] p-3 duration-300 flex flex-col justify-center items-start group-hover:h-full group-hover:justify-start text-secondary transition-all">
				<div className="flex flex-col items-start  gap-1">
					<Pill
						title={card.isVeg ? "Pure Veg" : "Non-Veg"}
						color={card.isVeg ? "bg-teal-500" : "bg-red-500"}
					/>
					<h3 className=" font-medium text-lg tracking-wider">{card.name}</h3>
				</div>

				<div className=" w-full mt-0.5 flex-col drop-shadow-md hidden group-hover:flex flex-1">
					{/* <h3 className="underline font-medium">Description</h3> */}
					<h3 className="text-xl font-bold">
						₹{(card.price / 100).toFixed(2)}
					</h3>
					<p className=" text-sm tracking-wider">{card.description}</p>

					<div className="flex-1 w-full flex items-end">
						<div className="w-full h-[40px] flex items-center gap-2">
							<button className="flex-1 text-center rounded  font-medium  bg-primary flex h-[35px] items-center justify-center gap-3 active:scale-95">
								<div className="text-xl">
									<PiShoppingBag />
								</div>
								Add to bag
							</button>
							<div className="w-[35px] aspect-square flex justify-center items-center text-3xl rounded-md text-amber-500">
								<MdFavoriteBorder />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute top-2 right-2 text-2xl text-white">
				<PiCheckSquareOffsetFill
					style={{ filter: "drop-shadow(0 0 5px #0005)" }}
				/>
			</div>
		</div>
	);
};

export default DishCard;

/*
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
							}
 */