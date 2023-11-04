import useTheme from "../../hook/useTheme";
import "./ThemeToggleButton.css";
// import {useState} from 'react'

const ThemeToggleButton = () => {
	const { colorMode, toggleTheme } = useTheme();

	return (
		<div className="checkbox-wrapper-54">
			<label className="switch">
				<input
					type="checkbox"
					checked={colorMode === "dark"}
					onChange={toggleTheme}
				/>
				<span className="slider"></span>
			</label>
		</div>
	);
};

export default ThemeToggleButton;
