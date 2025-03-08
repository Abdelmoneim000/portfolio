import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "../styles/globals.css";
import "../styles/Components.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abdel-Moneim Arabi - Full Stack Developer",
  description: "Portfolio of Abdel-Moneim Arabi, a Full Stack Developer from Egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
