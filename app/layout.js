import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CustomNavBar from "./components/CustomNavBar/page";
import Footer from "./components/Footer/Footer";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body style={{}}>
        <ThemeProvider theme={theme}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CustomNavBar />
            <main style={{ flexGrow: 1, backgroundColor: "#1A1A1A" }}>
                {children}
              </main>
            <div style={{ mt: "auto" }}>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
