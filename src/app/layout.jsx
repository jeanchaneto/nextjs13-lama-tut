import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 13 Tut",
  description: "Follow along project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
