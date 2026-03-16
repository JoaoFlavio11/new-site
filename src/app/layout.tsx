import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/layout/Footer";
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
        {/* <Header /> */}

        {children}
        <Footer />
        {/* Ruído de fundo (Grain texture) - dá uma cara de "papel" ou material físico */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}
