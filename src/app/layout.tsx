import type { Metadata } from "next";
import { Fraunces, Playpen_Sans } from "next/font/google"; 
import "./globals.css";

const fontFraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// Gunakan Playpen_Sans dan ubah variable jadi huruf kecil
const fontPlaypenSans = Playpen_Sans({
  variable: "--font-playpen-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaron's Portfolio",
  description: "Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontFraunces.variable} ${fontPlaypenSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
      
    </html>
  );
}