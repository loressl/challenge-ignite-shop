import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'

import { Container } from 'styles/pages/app'

import HeaderComponent from 'components/Header'

const roboto = Roboto({
  weight: ["400" , "700"],
  style: ["normal"]
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <HeaderComponent />

      <Component {...pageProps} />
    </Container>
  )
}
