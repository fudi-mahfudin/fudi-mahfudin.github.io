import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Mahfudin Fudi | Full Stack Developer From Jakarta, ID.";
const description =
  "A collaborative Developer specializing in user-centric applications. Expertise in Next.js, React Native, Laravel, and AI-powered to optimize code and accelerate development workflows.";
const url = "https://fudi-mahfudin.github.io";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Full Stack Developer", "Next.js", "React Native", "Laravel"],
  creator: "Mahfudin Fudi",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: "https://fudi-mahfudin.github.io/images/open-graph-fudi.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
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
