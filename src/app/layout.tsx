import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RakshaRoots - Handmade Natural Skincare',
  description: 'Discover RakshaRoots, your home for artisanal, handmade skincare products crafted with natural ingredients. Rooted in tradition, made with love.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
