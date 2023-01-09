import { ThemeProvider } from "styled-components";
import { theme } from "../public/styles/theme";
import GlobalStyle from "../public/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )  
};

