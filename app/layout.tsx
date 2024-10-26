import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "@/components/Home/Nav";
import Footer from "@/components/Home/Footer";
import StoreProvider from "@/StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";
import ImportBsJS from "@/components/Helper/importBsJS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "picnpick | best place to find your need",
  description: "A  e-commerce Peoject",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
          <ImportBsJS />
            <Nav/>
            {children}
            <Toaster />
            </body>
            <Footer />
        </html>
    </StoreProvider>
  );
}
