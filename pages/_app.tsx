import { AppProps } from 'next/app'
import '~/styles/index.css'
import { ThemeProvider } from 'next-themes'
import { useProgress } from '@akrc/next-progress'

export default function MyApp({ Component, pageProps }: AppProps) {
  useProgress()
  return (
    <ThemeProvider attribute="class" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
