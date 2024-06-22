// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import { Providers } from './Providers';
import SessionWrapper from "../components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieReview",
  description: "Review your favorite movies and TV shows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>


      </html>
    </SessionWrapper>
  );
}
