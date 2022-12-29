import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'

import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.svg'

const roboto = Roboto({
  weight: ["400" , "700"],
  style: ["normal"]
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt="logo"/>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
