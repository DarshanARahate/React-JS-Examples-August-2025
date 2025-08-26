import { createContext, useState , useContext} from 'react'
import './App.css'

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light")


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'light' ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme
    </button>
  );
}


export default App
