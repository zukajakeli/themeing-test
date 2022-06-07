import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import ThemeContextProvider from "./context/ThemeContext";

import Layout from "./components/layout/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
