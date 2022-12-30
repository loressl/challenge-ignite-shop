import { Header } from 'styles/components/header'
import Image from 'next/image'

import logoImg from 'assets/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ButtonBag from 'components/ButtonBag'

export default function HeaderComponent() {
    const { pathname } = useRouter()

    const isRouteProduct = !pathname.includes('success')

    return (
        <Header>
            <Link href="/">
                <Image src={logoImg} alt="logo" />
            </Link>

            {isRouteProduct && 
                <ButtonBag svgColor="dark" hasQuantity />
            }
        </Header>
    )
}