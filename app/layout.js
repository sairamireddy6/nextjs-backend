"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/navBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <NavBar/>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
