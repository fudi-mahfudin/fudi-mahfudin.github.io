import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Mahfudin Fudi | Web Developer From Jakarta, ID.";
const description =
  "A self-praclaimed designer who specializes in frontend development (React.js), from Jakarta, ID";
const url = "https://fudi-mahfudin.github.io";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer"],
  creator: "Mahfudin Fudi",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/open-graph-fudi.png",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth light" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
