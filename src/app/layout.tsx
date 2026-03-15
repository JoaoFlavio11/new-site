import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Flávio | Programador Fullstack",
  description:
    "Construindo aplicações escaláveis, APIs robustas e soluções Web.",
  keywords: [
    "Software Engineer",
    "Cloud Developer",
    "Backend",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "DevOps",
    "Portfólio",
  ],
  authors: [{ name: "João Flávio", url: "https://joaoflavio.cloud" }],
  openGraph: {
    title: "João Flávio | Programador Fullstack",
    description:
      "Construindo aplicações escaláveis, APIs robustas e soluções Web.",
    url: "https://joaoflavio.cloud",
    siteName: "joaoflavio.cloud",
    // images: [
    //   {
    //     url: "/og-image.png", // Dica: coloque uma imagem de 1200x630px chamada og-image.png na pasta public
    //     width: 1200,
    //     height: 630,
    //     alt: "João Flávio Portfolio Preview",
    //   },
    // ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background Pattern: Malha de arquitetura sutil com fade-out nas bordas */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}