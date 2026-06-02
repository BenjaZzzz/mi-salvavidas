import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mi Salvavidas ❤️",
  description:
    "Dos años de amor, recuerdos y momentos inolvidables. Una historia dedicada a Dineysi.",

  keywords: [
    "amor",
    "aniversario",
    "dineysi",
    "mi salvavidas",
    "2 años",
    "historia de amor",
  ],

  authors: [
    {
      name: "Felix Benjamin Ogando Peguero",
    },
  ],

  openGraph: {
    title: "Mi Salvavidas ❤️",
    description:
      "Aunque hoy nos separen kilómetros, sigues siendo mi lugar favorito.",
    type: "website",
    locale: "es_DO",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mi Salvavidas ❤️",
    description:
      "Aunque hoy nos separen kilómetros, sigues siendo mi lugar favorito.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          min-h-screen
          bg-black
          text-white
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}