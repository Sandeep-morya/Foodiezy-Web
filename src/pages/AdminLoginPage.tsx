//
import Login from '../components/admin/Login';
import Logo from '../components/common/Logo';

const AdminLoginPage = () => {
	return (
		<div className="w-screen h-screen overflow-hidden bg-[url('/admin-login-bg.avif')] bg-right bg-cover bg-no-repeat flex justify-center items-center relative xl:justify-start xl:pl-20 2xl:pl-40">
			<div className="absolute top-8 left-0 w-full  flex items-center justify-center gap-2 md:left-8 md:justify-start">
				<Logo />
				<h1 className="text-white/75 text-md font-semibold uppercase">Admin</h1>
			</div>
			<Login />
		</div>
	);
};

export default AdminLoginPage;
