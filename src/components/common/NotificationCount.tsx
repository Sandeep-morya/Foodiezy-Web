interface Props {
	count: number;
}
const NotificationCount = ({ count }: Props) => {
	return (
		<div className="absolute flex items-center justify-center w-4 text-xs text-white rounded-full shadow-md aspect-square bg-primary -top-1 -right-2 dark:text-dark">
			{count}
		</div>
	);
};

export default NotificationCount;
