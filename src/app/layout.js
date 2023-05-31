import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: { default: "Amazona", template: "%s - Amazona" },
  description: "A sua loja virtual!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="w-full m-auto mt-4 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
