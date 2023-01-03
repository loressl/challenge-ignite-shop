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
import { useMemo } from 'react'

export default function BagModal() {
    const { items, buyProduct, removeProduct } = useCart()

    const total = useMemo(() =>  items.reduce((sumTotal, product) => {
        sumTotal = sumTotal + product.numberPrice
        return sumTotal
    }, 0), [items])

    const handleBuyProduct = () =>{
        buyProduct()
    }

    const handleRemoveProduct = (productId: string) => {
        removeProduct(productId)
    }

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

                                    <button onClick={() => handleRemoveProduct(product.id)}>
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
                    <FinishBuy onClick={handleBuyProduct}>Finalizar Compra</FinishBuy>
            
                </NavContainer>
            </Overlay>
        </Dialog.Portal>
    )
}