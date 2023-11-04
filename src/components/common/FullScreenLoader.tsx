const FullScreenLoader = () => {
	return (
		<div className="w-screen h-screen bg-white center dark:bg-dark">
			<img
				className="w-[100px] h-[100px] object-contain animate-bounce drop-shadow-lg"
				src="/logo.svg"
				alt=""
			/>
		</div>
	);
};

export default FullScreenLoader;
