import Link from "next/link";
import { Play } from "next/font/google";
import "../globals.css";
import { Button, Container } from "@mui/material";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export default function AdminLayout({ children }) {
  return (
    <>
      <Container sx={{ mt: 1 }} className={play.className}>
        <nav>
          <Link href="/admin">
            <Button>Мои клиенты</Button>
          </Link>
          <Link href="/admin/pages">
            <Button>Редактировать страниц</Button>
          </Link>
        </nav>
        <main>{children}</main>
      </Container>
    </>
  );
}
