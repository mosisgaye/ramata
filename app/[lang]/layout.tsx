import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from "@/components/navigation/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { i18n } from '@/next-i18next.config'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Ramata GAYE - Portfolio',
  description: 'Expert en Finance et Gestion',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}