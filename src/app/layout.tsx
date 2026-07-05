import type { Metadata } from "next";
import { Fraunces, Playpen_Sans } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontFraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

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
      suppressHydrationWarning
      className={`${fontFraunces.variable} ${fontPlaypenSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}