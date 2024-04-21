import "./globals.css";
import NavBar from "./components/navBar"


export const metadata = {
  title: "Formula S concept racing sport",
  description: "Formula S is a concept racing sport developed for a final year, web design and development project: the web is boring breaking the mould",
};

// next layout page that wraps each page.js, nav bar included here as it is present on each page and does not require re-rendering
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
