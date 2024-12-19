import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Home - CCI Global - Africa's BPO",
  description:
    "CCI Global is the Top Tier BPO provider in Africa, servicing the USA, UK, Australia, Canada and New Zealand from across the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body
          className={`${montserrat.variable} antialiased overflow-x-hidden`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ReactLenis>
  );
}
