"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  console.log(ThemeProvider)
  return (
    <ThemeProvider attribute="class" enableSystem="false" >
      {children}
    </ThemeProvider>
  );
}
