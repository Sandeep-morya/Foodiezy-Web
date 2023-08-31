const SyncLoader = () => {
	return (
		<div className="h-[28px] w-[32px] flex justify-between items-center">
			<div className="bg-primary rounded-full w-2 h-2 bounce" />
			<div
				style={{ animationDelay: "0.2s" }}
				className="bg-red-500 rounded-full w-2 h-2 bounce "
			/>
			<div
				style={{ animationDelay: "0.3s" }}
				className="bg-teal-500 rounded-full w-2 h-2 bounce"
			/>
		</div>
	);
};

export default SyncLoader;
