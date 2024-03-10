import MainLayout from "../app/layout/MainLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
