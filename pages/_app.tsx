import '@/styles/globals.css'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'

const sfmedium = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '400'
    }
  ],
  variable: '--font-sfmedium'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
