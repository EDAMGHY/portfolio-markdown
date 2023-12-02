import type { Metadata } from "next";
import { Inter, Eczar } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const eczar = Eczar({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eczar",
});

export const metadata: Metadata = {
  title: "Abdellah DAMRI",
  description: "This is Abdellah DAMRI's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${eczar.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
