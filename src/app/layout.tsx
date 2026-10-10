import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/site/page-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PAWLIYO | Pet Essentials · Everyday Care",
    template: "%s · PAWLIYO",
  },
  description:
    "Discover thoughtful pet essentials designed to make everyday care easier for dogs, cats, and their people.",
  keywords: [
    "pet essentials",
    "dog care",
    "cat care",
    "pet products",
    "everyday pet care",
    "PAWLIYO",
  ],
  authors: [{ name: "PAWLIYO" }],
  creator: "PAWLIYO",
  publisher: "PAWLIYO",
  applicationName: "PAWLIYO",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "PAWLIYO | Pet Essentials · Everyday Care",
    description:
      "Discover thoughtful pet essentials designed to make everyday care easier for dogs, cats, and their people.",
    url: siteUrl,
    siteName: "PAWLIYO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 720,
        alt: "A calm dog and cat resting together in a warm, sunlit minimalist home.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAWLIYO | Pet Essentials · Everyday Care",
    description:
      "Thoughtful essentials for happier pets and easier everyday care.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          display.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased"
        )}
      >
        <PageShell>{children}</PageShell>
        <Toaster />
      </body>
    </html>
  );
}
