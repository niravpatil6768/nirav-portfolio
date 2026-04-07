import type { Metadata } from 'next';
import { Space_Grotesk, Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/layout/SmoothScroller';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nirav | Full Stack Developer',
  description: 'Portfolio of Nirav, a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${plusJakartaSans.variable} font-sans bg-background text-foreground antialiased`}
      >
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
