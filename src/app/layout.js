import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Micaela Svatzky | Portfolio",
  description: "Frontend Developer - Building high-performance digital products",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000'/><text x='50' y='72' font-family='Arial Black,sans-serif' font-size='50' font-weight='900' fill='white' text-anchor='middle'>MS</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="text-black dark:text-white min-h-screen flex flex-col bg-white dark:bg-black">
        <div className="ambient-blob" />
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
          </ThemeProvider>
        </LanguageProvider>
        <Footer />
      </body>
    </html>
  );
}