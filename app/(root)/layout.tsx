import '../globals.css';

export const  metadata={
  title: 'Banking App',
  description: 'A simple banking app',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <h1>SIDEBAR</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
