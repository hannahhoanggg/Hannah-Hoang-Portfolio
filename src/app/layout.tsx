import "./globals.css";

export const metadata = {
  title: 'Hannah Hoang Portfolio',
  description: 'Portfolio showcasing my skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
