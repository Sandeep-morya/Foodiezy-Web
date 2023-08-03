import { useRef } from "react";

export default function useThrottle() {
	const lastTime = useRef(Date.now());
	return (func: () => void, delay: number) => {
		if (Date.now() - lastTime.current >= delay) {
			func();
			lastTime.current = Date.now();
		}
	};
}
