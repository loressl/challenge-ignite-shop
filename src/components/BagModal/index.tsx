import * as Dialog from '@radix-ui/react-dialog'
import { 
    Overlay, 
    Close, 
    ListProductBagContainer, 
    CardProductBag, 
    ContainerImage, 
    ContainerInfo, 
    DetailsContainer, 
    NavContainer, 
    FinishBuy 
} from 'styles/components/badModal'
import { X } from 'phosphor-react'
import { useCart } from 'hooks/useCart'
import Image from 'next/image'
import { formatPrice } from 'utils/format'

export default function BagModal() {
    const { items } = useCart()

    const total = items.reduce((sumTotal, product) => {
        sumTotal = sumTotal + product.numberPrice
        return sumTotal
    }, 0)

    return (
        <Dialog.Portal>
            <Overlay>
                <NavContainer>
                    <header>
                        <Close>
                            <X size={24} weight="bold" />
                        </Close>
                        <h2>Sacola de Compras</h2>
                    </header>
                    <ListProductBagContainer>
                        {items.map((product) => (
                            <CardProductBag key={product.id}>
                                <ContainerImage>
                                    <Image src={product.imageUrl} height={93} width={101} alt={product.name} />
                                </ContainerImage>
                                <ContainerInfo>
                                    <span>{product.name}</span>
                                    <strong>{product.price}</strong>

                                    <button>
                                        Remover
                                    </button>
                                </ContainerInfo>
                            </CardProductBag>
                        ))}
                    </ListProductBagContainer>
                    <DetailsContainer>
                        <div>
                            <span className='title-quantity'>Quantidade</span>
                            <span className='value-quantity'>{items.length} itens</span>
                        </div>
                        <div>
                            <strong className='title-total'>Valor total</strong>
                            <strong className='value-total'>{formatPrice(total)}</strong>
                        </div>

                    </DetailsContainer>
                    <FinishBuy>Finalizar Compra</FinishBuy>
            
                </NavContainer>
            </Overlay>
        </Dialog.Portal>
    )
}