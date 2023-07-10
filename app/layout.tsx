import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RUC | PY',
  description:
    'Aplicación para consultar datos sobre contribuyentes registrados en la SET'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex flex-col min-h-screen justify-between text-gray-700`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
