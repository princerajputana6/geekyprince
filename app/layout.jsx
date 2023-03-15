"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { AuthContextProvider } from '@/context/AuthContext'

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "../styles/custom.css"

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      
      <body className="dark:bg-black">
      <AuthContextProvider>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
