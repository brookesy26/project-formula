import "./globals.css";
import NavBar from "./components/navBar"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--bebas',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: "Formula S concept racing sport",
  description: "Formula S is a concept racing sport developed for a final year, web design and development project: the web is boring breaking the mould",
};

// next layout page that wraps each page.js, nav bar included here as it is present on each page and does not require re-rendering
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
