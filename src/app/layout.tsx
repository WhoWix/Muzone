'use client';

import { GlobalStyle } from '../styles/global-styles';
import { Header } from './components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  );
}
