import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ColorSchemeScript } from "@mantine/core";
import TopBar from "../components/TopBar";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ClientOnly } from "../components/ClientOnly";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "To Do App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientOnly>
          <ThemeProvider>
              <TopBar />
              {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
