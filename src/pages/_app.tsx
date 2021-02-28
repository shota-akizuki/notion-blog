import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { ThemeProvider } from 'next-themes'

export default ({ Component, pageProps }) => (
  <>
    <ThemeProvider>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
)
