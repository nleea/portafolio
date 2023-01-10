import { createContext } from "react";

export const themes = {
    dark: "dark-theme",
    light: "light-theme",
};

const ThemeContext = createContext<any>({
    theme: themes.light,
    change: () => { }
});

export { ThemeContext }