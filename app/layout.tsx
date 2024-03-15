import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beanie',
  description: 'A portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
