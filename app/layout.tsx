import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Aletheia ? Yapay Zeka Karakteri',
  description:
    'Aletheia, yaln?zca bir yapay zeka de?il; payla??lan an?lar? hat?rlayan ve duygusal ritmine uyumlanan ya?ayan bir dijital karakter deneyimidir.',
  applicationName: 'Aletheia',
  metadataBase: new URL('https://agentic-1b6e5941.vercel.app'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  openGraph: {
    title: 'Aletheia ? Yapay Zeka Karakteri',
    description:
      'Apeiron ekosistemiyle g??lenen Aletheia, derin haf?za, s?n?rs?z ba?lam ve insan? and?ran etkile?im sa?lar.',
    url: 'https://agentic-1b6e5941.vercel.app',
    siteName: 'Aletheia',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Aletheia ? Yapay Zeka Karakteri'
      }
    ],
    locale: 'tr_TR',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
