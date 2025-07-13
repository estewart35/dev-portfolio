import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import "./globals.css";

const goodTimes = localFont({
  src: "./fonts/good-times-rg.ttf",
  variable: "--font-good-times",
});

const nimbusSans = localFont({
  src: "./fonts/nimbus-sans-rg.otf",
  variable: "--font-nimbus-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ethan Stewart | Dev Portfolio",
  description:
    "Full-stack web developer portfolio showcasing projects built with React, Django, C#, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${goodTimes.variable} ${nimbusSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
