import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import CustomNavBar from "../components/CustomNavBar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  const { children } = props;
  return (
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
  );
}
