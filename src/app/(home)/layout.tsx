import Footer from "@components/footer";
import Navbar from "@components/navbar";
import AOSInit from "app/aos-init";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AOSInit />

      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
}
