"use client";

import Providers from "../store/Providers";
import "./globals.css";

// Root layout for the project
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
