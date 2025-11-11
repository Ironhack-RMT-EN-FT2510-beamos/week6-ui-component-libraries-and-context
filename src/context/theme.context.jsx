import { createContext, useState } from "react";

// first component (the one that shares the states)
const ThemeContext = createContext()

// second component (the one that holds the states)
function ThemeWrapper(props) {

  // here we add the states, functions, variables to transmit through our app
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const passedContext = {
    isDarkTheme,
    setIsDarkTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}