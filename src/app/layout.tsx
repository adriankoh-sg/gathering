import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "@/app/globals.css";
import { APP_CONFIG } from "@/lib/constants";

const lusitana = Lusitana({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
