import { FC, useRef, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/reduxHooks";
import { PiPackage, PiSignOut, PiUserGear } from "react-icons/pi";
import type { IconType } from "react-icons";
import { removeItem } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { setServiceArea } from "../../redux/slices/deviceSlice";

interface Props {
	toggle: () => void;
}
interface LiProps {
	title: string;
	css: string;
	Icon: IconType;
	onClick?: () => void;
}
const ListItem: FC<LiProps> = ({ title, css, Icon, onClick }) => {
	return (
		<li
			onClick={onClick}
			className={`flex items-center gap-3 p-2 text-sm xl:text-base font-medium rounded active:scale-95 hover:text-secondary ${css}`}>
			<div className="text-xl">
				<Icon />
			</div>
			{title}
		</li>
	);
};
const UserAfterLogin: FC<Props> = ({ toggle }) => {
	const { about } = useAppSelector((store) => store.user);
	const modalRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				toggle();
			}
		},
		[toggle],
	);

	const logout = () => {
		removeItem("current_user_id");
		removeItem("foodiezy-redux-store-local-storage-key");
		dispatch(setServiceArea(null));
		navigate("/");
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	if (!about) {
		return <></>;
	}

	return (
		<div
			ref={modalRef}
			// onMouseLeave={}
			className={
				"absolute top-0 right-0 w-[200px] shadow-xl rounded-lg border bg-white/50 backdrop-blur-md p-2 transition-all animate-zero"
			}>
			<div className="w-full flex items-center gap-4 p-2">
				<img
					className="w-[40px] aspect-square rounded-full object-cover"
					src={about.image}
					alt={about.name}
				/>
				<div className="grid gap-0">
					<h2 className="text-lg xl:text-xl font-semibold tracking-wider">
						Hello!
					</h2>
				</div>
			</div>
			<p className="text-md xl:text-lg font-medium p-2 border-t">
				{about.name}
			</p>
			<ul className="divide-y">
				<ListItem
					title="Your Account"
					Icon={PiUserGear}
					css="hover:bg-lightblack"
				/>
				<ListItem
					title="Your Orders"
					Icon={PiPackage}
					css="hover:bg-lightblack"
				/>
				<ListItem
					title="Logout"
					Icon={PiSignOut}
					css="hover:bg-red-600 text-red-600"
					onClick={logout}
				/>
			</ul>
		</div>
	);
};

export default UserAfterLogin;
