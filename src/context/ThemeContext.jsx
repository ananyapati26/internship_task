
import { createContext, Context } from "react";



const defaultValue = {
  currentTheme: "light",
  changeCurrentTheme: (newTheme) => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;