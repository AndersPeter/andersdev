import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anders Sørensen — React & React Native Developer",
  description:
    "App and web developer specialising in React and React Native. Based in Denmark. Great deals for new clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-[#0b0f19] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
