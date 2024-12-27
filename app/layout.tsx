import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World Trade Compliance Training',
  description: 'Global platform for international trade regulations and compliance training',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a client component for conditional header rendering
  const HeaderWrapper = () => {
    const pathname = usePathname();
    const isAdminOrMember = pathname?.startsWith('/admin') || pathname?.startsWith('/member');
    
    if (isAdminOrMember) {
      return null;
    }
    
    return <Header />;
  }

  return (
    <html lang="en" suppressHydrationWarning>
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