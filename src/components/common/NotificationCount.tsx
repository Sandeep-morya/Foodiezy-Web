interface Props {
	count: number;
}
const NotificationCount = ({ count }: Props) => {
	return (
		<div className="w-4 text-xs aspect-square bg-[#7ed957] flex justify-center items-center rounded-full text-white shadow-md absolute -top-1 -right-2">
			{count}
		</div>
	);
};

export default NotificationCount;
