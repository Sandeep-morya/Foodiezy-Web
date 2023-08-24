const FullScreenLoader = () => {
	return (
		<div className="bg-white w-screen h-screen center">
			<img
				className="w-[100px] h-[100px] object-contain animate-bounce drop-shadow-lg"
				src="/logo.svg"
				alt=""
			/>
		</div>
	);
};

export default FullScreenLoader;
