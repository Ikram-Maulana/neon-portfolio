import { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import Header from "@/components/Header";
import FooTer from "@/components/FooTer";

export const metadata: Metadata = {
  title: "Ikram Maulana",
  description:
    "Discover the personal portfolio of Ikram Maulana, a Full Stack Web Developer. This portfolio is built with Next.js, and Tailwind CSS with Neon theme.",
  applicationName: "Ikram Maulana Neon Portfolio",
  keywords: [
    "Ikram Maulana",
    "Ikram Maulana Neon Portfolio",
    "Ikram Maulana Website",
    "Ikram Maulana Full Stack Web Developer",
    "Full Stack Web Developer",
    "React Developer",
  ],
  authors: [
    {
      name: "Ikram Maulana",
      url: "https://ikrammaulana.my.id",
    },
  ],
  creator: "Ikram Maulana",
  openGraph: {
    type: "website",
    title: "Ikram Maulana Neon Portfolio",
    description:
      "Discover the personal portfolio of Ikram Maulana, a Full Stack Web Developer. This portfolio is built with Next.js, and Tailwind CSS with Neon theme.",
    url: "https://ikrammaulana.my.id",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="h-screen antialiased font-content">
        <Header />
        {children}
        <FooTer />
      </body>
      <Script
        src="https://analytics.ikrammaulana.my.id/script.js"
        strategy="lazyOnload"
        data-website-id="1cb44e5a-3b77-4ae1-afde-2b83d57eaaa0"
      />
    </html>
  );
}
