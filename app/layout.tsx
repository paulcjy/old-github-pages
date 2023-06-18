'use client';

import '#/styles/globals.css';
import GlobalNav from './GlobalNav';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     default: 'Next.js App Router',
//     template: '%s | Next.js App Router',
//   },
//   description:
//     'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-900">
        {/* <GlobalNav /> */}
        <div className="text-gray-300">{children}</div>
      </body>
    </html>
  );
}
