import { useState, useEffect } from "react";

const useDebounce = <T>(value: T, delay = 700) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const id = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(id);
	}, [value, delay]);
	return debouncedValue;
};

export default useDebounce;
