import { useState, useEffect, useRef, KeyboardEvent } from "react";

import Input from "../common/Input";
import { PiMicrophone } from "react-icons/pi";
import { MdSend } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import ListItem from "./ListItem";

import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import {
	addClientMessage,
	resetMessages,
} from "../../redux/slices/chatbotSlice";

const BotDrawerContent = () => {
	const [clientMessage, setClientMessage] = useState("");
	const lastMessageRef = useRef<HTMLDivElement>(null);
	const { messages } = useAppSelector((store) => store.chatbot);
	const dispatch = useAppDispatch();

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
	}, []);

	return (
		<div className="w-full h-[calc(100%-80px)] flex flex-col gap-2">
			<div className="flex flex-col gap-2 pr-2 grow overflow-y-scroll small-scroll-bar">
				{messages.slice(1).map(({ content, links, role }, index) => (
					<div
						key={v4()}
						ref={index === messages.length - 2 ? lastMessageRef : null}
						className={twMerge(
							"p-2 max-w-[90%] rounded flex flex-col gap-2",
							role === "user" ? "ml-auto bg-primary text-white" : "mr-auto",
						)}>
						<p className="text-sm">{content}</p>
						{links && links.length > 0 && (
							<ul className="flex gap-2">
								{links.map((title) => (
									<ListItem key={v4()} title={title} link />
								))}
							</ul>
						)}
					</div>
				))}
			</div>

			<ul className="w-full h-[45px] flex items-center gap-2 flex-wrap">
				<ListItem title={"Help!"} />
				<ListItem link title={"Find Restaurant"} />
				<div className="hidden md:block">
					<ListItem link title={"Find recipie"} />
				</div>
				<ListItem onClick={handleResetMessages} title={"Restart"} />
			</ul>

			<div onKeyDown={onKeyDown}>
				<Input
					leftIcon={<PiMicrophone size={20} />}
					rightIcon={
						<div onClick={handleAddClientMessage} className="text-xl">
							<MdSend size={20} />
						</div>
					}
					placeholder={"How can i help you?"}
					value={clientMessage}
					onChange={(e) => setClientMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default BotDrawerContent;
