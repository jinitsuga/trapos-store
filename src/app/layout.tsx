import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trapos Locos tienda",
  description: "La tienda de estampado y diseño que siempre buscaste.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen bg-trapo-black text-trapo-green`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
