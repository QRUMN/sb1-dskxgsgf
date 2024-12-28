import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { Toaster } from '@/components/ui/toaster';
import { HeaderWrapper } from '@/app/components/header-wrapper';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World Trade Compliance Training',
  description: 'Global platform for international trade regulations and compliance training',
  openGraph: {
    title: 'World Trade Compliance Training',
    description: 'Global platform for international trade regulations and compliance training',
    images: [
      {
        url: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aerial view of cargo ship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Trade Compliance Training',
    description: 'Global platform for international trade regulations and compliance training',
    images: ['https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg'],
    creator: '@yourtwitterhandle',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg" />
        <meta property="og:image:alt" content="Aerial view of cargo ship" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <HeaderWrapper />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}