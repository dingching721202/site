import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TLI Connect - 華語影音課程使用說明書',
  description: 'TLI 華語影音學習課程是專為華語學習者設計的線上互動資源，結合教學影片、AI實境對話、單元測驗與真人團班課程。',
  keywords: ['華語學習', 'TLI', '中文課程', '線上學習', 'AI對話', '華語教學'],
  openGraph: {
    title: 'TLI Connect - 華語影音課程',
    description: '專為華語學習者設計的線上互動學習平台',
    type: 'website',
    locale: 'zh_TW',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}