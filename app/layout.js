import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "African Children Bar",
  description: "Rhumerie - Cocktails",
};

export default function RootLayout({ children }) {
  const bg = "header.jpg";
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main>
          <Header bg={bg} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
