import { Header } from 'styles/components/header'
import Image from 'next/image'

import logoImg from 'assets/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import ButtonBag from 'components/ButtonBag'
import BagModal from 'components/BagModal'

export default function HeaderComponent() {
    const { pathname } = useRouter()

    const isRouteProduct = !pathname.includes('success')

    return (
        <Header>
            <Link href="/">
                <Image src={logoImg} alt="logo" />
            </Link>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    {isRouteProduct && 
                        <ButtonBag svgColor="dark" hasQuantity />
                    }
                </Dialog.Trigger>
                <BagModal />
            </Dialog.Root>
        </Header>
    )
}