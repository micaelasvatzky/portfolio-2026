import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Micaela Svatzky | Portfolio",
  description: "Frontend Developer - Building high-performance digital products",
  icons: {
    icon: "/logo.png",
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