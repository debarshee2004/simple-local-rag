export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen p-4">
        {children}
      </body>
    </html>
  );
}
