import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'PAWLIYO | Pet Essentials · Everyday Care',
    template: '%s | PAWLIYO',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'PAWLIYO | Pet Essentials · Everyday Care',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><ellipse cx='20' cy='26' rx='9' ry='7.5' fill='%23171717'/><ellipse cx='10' cy='13' rx='4' ry='5' fill='%23171717'/><ellipse cx='30' cy='13' rx='4' ry='5' fill='%23171717'/><ellipse cx='15.5' cy='8' rx='3.5' ry='4.5' fill='%23171717'/><ellipse cx='24.5' cy='8' rx='3.5' ry='4.5' fill='%23171717'/></svg>"
          type="image/svg+xml"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
