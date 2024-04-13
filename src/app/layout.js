import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formula S concept racing sport",
  description: "Formula S is a concept racing sport developed for a final year, web design and development project: the web is boring breaking the mould",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
