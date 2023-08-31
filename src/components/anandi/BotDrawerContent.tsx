import { useState, useEffect, useRef, KeyboardEvent } from "react";

import Input from "../common/Input";
// import { PiMicrophone } from "react-icons/pi";
import { MdSend } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import ListItem from "./ListItem";

import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import {
	addClientMessage,
	askAnandi,
	resetMessages,
} from "../../redux/slices/chatbotSlice";
import SyncLoader from "./SyncLoader";

const BotDrawerContent = () => {
	const [clientMessage, setClientMessage] = useState("");
	const lastMessageRef = useRef<HTMLDivElement>(null);
	const { messages, loading } = useAppSelector((store) => store.chatbot);
	const dispatch = useAppDispatch();
	const { about } = useAppSelector((store) => store.user);

	const handleResetMessages = () => dispatch(resetMessages());
	const handleAddClientMessage = () => {
		dispatch(addClientMessage(clientMessage));
		setClientMessage("");
	};

	const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter") {
			handleAddClientMessage();
		}
	};

	useEffect(() => {
		const element = lastMessageRef.current;
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	useEffect(() => {
		const isNewUserMessage = messages.at(-1)?.role === "user";

		if (isNewUserMessage) {
			let conversationHistory = [...messages];
			if (conversationHistory.length > 6) {
				const context = conversationHistory[0];
				const lastFourConverstions = conversationHistory.slice(-4);
				conversationHistory = [context, ...lastFourConverstions];
			}
			const simplifiedHistory = conversationHistory.map(
				({ role, content }) => ({
					role,
					content,
				}),
			);
			dispatch(askAnandi(simplifiedHistory));
		}
	}, [messages, dispatch]);

	return (
		<div className="w-full h-[calc(100%-80px)] flex flex-col gap-2 p-1">
			<div className="flex flex-col pr-2 grow overflow-y-scroll small-scroll-bar gap-6 pb-4 pl-1">
				{messages.slice(1).map(({ content, links, role }, index) => (
					<div key={v4()} className="flex items-start  gap-2">
						{role === "user" && (
							<div className="w-[30px] min-w-[30px] h-[30px] bg-secondary  rounded-full overflow-hidden shadow-md shadow-black/50">
								<img
									className="w-full h-full"
									src={about?.image || "/user.png"}
									alt={about?.name || "unknown-user"}
									onError={(e) => {
										e.currentTarget.src = "/user.png";
									}}
								/>
							</div>
						)}
						<div
							ref={index === messages.length - 2 ? lastMessageRef : null}
							className={twMerge(
								"w-max py-1 flex flex-col",
								role === "user"
									? " bg-primary rounded-r-lg rounded-tl-lg px-3  text-secondary char-shadow ml-2 shadow-md shadow-black/20"
									: "bg-none px-2",
							)}>
							<div className="text-sm">
								{content.split("\n").map((line) => (
									<p key={v4()}>{line}</p>
								))}
							</div>
							{links && links.length > 0 && (
								<ul className="flex gap-2 mt-2">
									{links.map((title) => (
										<ListItem key={v4()} title={title} link />
									))}
								</ul>
							)}
						</div>
					</div>
				))}
			</div>

			<ul className="w-full h-[45px] flex items-center gap-2 flex-wrap">
				<ListItem title={"Need a help!"} />

				{messages.length > 3 && (
					<ListItem
						onClick={handleResetMessages}
						title={"Clear Conversations"}
					/>
				)}
			</ul>

			<div onKeyDown={onKeyDown}>
				<Input
					leftIcon={
						<img
							className="w-[20px] aspect-square object-contain brightness-0"
							src="/only-smile.png"
							alt="foodiezy-smiley"
						/>
					}
					rightIcon={
						loading ? (
							<SyncLoader />
						) : (
							<div onClick={handleAddClientMessage} className="text-xl">
								<MdSend size={20} />
							</div>
						)
					}
					placeholder={loading ? "Generating" : "How can i help you?"}
					value={clientMessage}
					onChange={(e) => setClientMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default BotDrawerContent;
