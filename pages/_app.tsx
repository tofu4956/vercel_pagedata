import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/index.css'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) : JSX.Element{
  return (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
