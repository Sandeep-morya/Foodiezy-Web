import { useState, useEffect, useRef } from "react";

import Input from "../common/Input";
import { PiMicrophone } from "react-icons/pi";
import { MdSend } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import ListItem from "./ListItem";
import { useAppSelector } from "../../hook/reduxHooks";

const BotDrawerContent = () => {
	const [text, setText] = useState("");
	const { messages } = useAppSelector((store) => store.chatbot);
	const lastMessageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = lastMessageRef.current;
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div className="w-full h-[calc(100%-80px)] flex flex-col gap-2">
			<div className="flex flex-col gap-2 pr-2 grow overflow-y-scroll small-scroll-bar">
				{messages.slice(1).map((message, index) => (
					<div
						key={v4()}
						ref={index === messages.length - 2 ? lastMessageRef : null}
						className={twMerge(
							"p-2 max-w-[90%] rounded",
							message.role === "user"
								? "ml-auto bg-primary text-white"
								: "mr-auto",
						)}>
						<p className="text-sm">{message.content}</p>
					</div>
				))}
			</div>
			<ul className="w-full h-[45px] flex items-center gap-1">
				<ListItem title={"Help!"} />

				<ListItem title={"Find Restaurant"} />

				<ListItem title={"Find recipie"} />

				<ListItem title={"Restart"} />
			</ul>
			<div>
				<Input
					leftIcon={<PiMicrophone size={20} />}
					rightIcon={
						<div className="text-xl">
							<MdSend size={20} />
						</div>
					}
					placeholder={"How can i help you?"}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default BotDrawerContent;
