export const getItem = (key: string) => {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};

export const setItem = <T>(key: string, value: T) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => localStorage.removeItem(key);
