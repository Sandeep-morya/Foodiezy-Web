import { useLayoutEffect } from "react";
import { useAppDispatch } from "./hook/reduxHooks";
import AllRoutes from "./routes";
import { loadFromLocalStorage } from "./redux/deviceSlice";

const App = () => {
	const dispatch = useAppDispatch();
	useLayoutEffect(() => {
		dispatch(loadFromLocalStorage());
	}, [dispatch]);
	return <AllRoutes />;
};

export default App;
