import '../globals.css';
import Sidebar from '@/components/Sidebar'; // Adjust the path if needed

export const metadata = {
  title: 'Banking App',
  description: 'A simple banking app',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logIn = { firstName: 'nishant', lastName: 'singh' };

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen w-full font-inter">
          <Sidebar user={logIn} />
          {children}
        </main>
      </body>
    </html>
  );
}
