import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, Close, Box, ListProductBagContainer, CardProductBag, ContainerImage, ContainerInfo } from 'styles/components/badModal'
import { X } from 'phosphor-react'
import { useCart } from 'hooks/useCart'
import Image from 'next/image'

export default function BagModal() {
    const { items } = useCart()

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Close>
                        <X size={24} weight="bold"/>
                    </Close>
                    <Box>
                        <h2>Sacola de Compras</h2>
                        <ListProductBagContainer>
                            {items.map((product) => (
                                <CardProductBag key={product.id}>
                                    <ContainerImage>
                                        <Image src={product.imageUrl}  height={93} width={101} alt={product.name}/>
                                    </ContainerImage>
                                    <ContainerInfo>
                                        <span>{product.name}</span>
                                        <strong>{product.price}</strong>
                                    </ContainerInfo>
                                </CardProductBag>
                            ))}
                        </ListProductBagContainer>
                    </Box>

                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}