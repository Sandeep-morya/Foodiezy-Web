import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<section className="flex flex-col justify-center w-screen h-screen px-0 py-10 bg-white">
			<div className="flex flex-col">
				<h1 className="font-bold text-center text-8xl text-primary">404</h1>
				<h2 className="text-2xl font-bold text-center text-black/50">
					Not Found
				</h2>
			</div>

			<div className="bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')] h-[400px] bg-center bg-no-repeat"></div>

			<div className="flex flex-col items-center justify-center gap-5">
				<div className="grid gap-2 text-center">
					<h3 className="text-2xl font-bold">Look like you're lost</h3>

					<p className="text-sm">The page you are looking for not avaible!</p>
				</div>

				<Link
					to={`/`}
					className="bg-primary text-white px-10 py-2 rounded-sm hover:bg-[#4f973b]">
					Go to Home
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
