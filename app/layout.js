import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CustomNavBar from "./components/CustomNavBar/CustomNavBar";
import Footer from "./components/Footer/Footer";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CustomNavBar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
