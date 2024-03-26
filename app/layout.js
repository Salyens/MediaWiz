import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CustomNavBar from "@components/CustomNavBar";
import Footer from "@components/Footer";
import "../styles/globals.css";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CustomNavBar />
            <main style={{ flexGrow: 1 }}>{children}</main>
            <div style={{ mt: "auto" }}>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
