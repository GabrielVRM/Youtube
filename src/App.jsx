import React, {useState} from "react";
import { createTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import { Header } from "./Components/Header";
import ListVideo from "./Components/ListVideo";




export default function App() {

  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    spacing:4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#42a5f5",
        light: "#212529",
      },
      secondary: {
        main: "#6c757d",
      },
      success:{
        main: "#388e3c",
      },
      background: {
        default: darkMode ? 'rgba(33, 33, 33, 0.98)' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? 'rgba(33, 33, 33, 0.98)' : '#FFF',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div style={{height:'auto'}}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ListVideo  darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
    </ThemeProvider>
  );
}
