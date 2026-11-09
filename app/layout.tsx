import type { Metadata } from 'next';
import '../src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Youwe',
  description: 'Youwe website, built from the Youwe design system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
