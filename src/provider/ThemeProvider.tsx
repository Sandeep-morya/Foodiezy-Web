import {
	useState,
	useEffect,
	useCallback,
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
} from "react";

type ColorModes = "light" | "dark";

interface ThemeContextProps {
	colorMode: ColorModes;
	setColorMode: Dispatch<SetStateAction<ColorModes>>;
	toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }: PropsWithChildren) => {

	const initialMode = localStorage.getItem("theme") as ColorModes | "light";

	const [colorMode, setColorMode] = useState<ColorModes>(initialMode);

	const toggleTheme = useCallback(() => {
		setColorMode((mode) => (mode === "light" ? "dark" : "light"));
	}, []);

	useEffect(() => {
		if (colorMode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		localStorage.setItem("theme", colorMode);
	}, [colorMode]);

	return (
		<ThemeContext.Provider value={{ colorMode, setColorMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
