import Link from "next/link";
import { Play } from "next/font/google";
import "@styles/globals.css";
import { Box, Button, Container } from "@mui/material";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export default function AdminLayout({ children }) {
  return (
    <>
      <Box
        sx={{ mt: 13, color: "white", maxWidth: 1512, ml: "auto", mr: "auto" }}
        className={play.className}
      >
        <nav style={{ display: "flex", color: "white" }}>
          <Link href="/admin">
            <Button sx={{ display: "flex", fontSize: 20, mr: 2 }}>
              Мои клиенты
            </Button>
          </Link>
          <Link href="/admin/pages">
            <Button sx={{ display: "flex", fontSize: 20, mr: 2 }}>
              Редактировать страниц
            </Button>
          </Link>
        </nav>
        <main style={{ minHeight: "calc(100vh - 250px)", margin: 5}}>
          {children}
        </main>
      </Box>
    </>
  );
}
