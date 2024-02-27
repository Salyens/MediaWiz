import Link from "next/link";
import { Inter } from "next/font/google";
import "../globals.css";
import { Button, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <>
      <Container sx={{mt:1}} className={inter.className}>
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
