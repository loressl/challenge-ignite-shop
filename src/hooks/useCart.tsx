import { createContext, ReactNode, useMemo, useState, useContext} from "react";
import { toast } from 'react-toastify'

interface ICartProviderProps {
    children: ReactNode
}

export interface IProduct {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    numberPrice: number
}

interface ICartData {
    items: IProduct[]
    bagQuantity: number
    addProduct: (product: IProduct)=> void
    disabledButtonAdd: (idProduct: string) => boolean
}

export const CartContext = createContext({} as ICartData)

const nameLocalStorage = '@RocketProduct:product'

export function CartProvider({ children }: ICartProviderProps){
    const [items, setItems] = useState<IProduct[]>(() => {

        //this condition is necessary cause Next.js performs a server render before the client render
        if(typeof window !== 'undefined') {
            const storagedProduct = localStorage.getItem(nameLocalStorage)
    
            if(storagedProduct) {
                return JSON.parse(storagedProduct)
            }
        }
        return []
    })
    
    const bagQuantity = useMemo(() => items.length,[items])

    const addProduct =(product: IProduct) => {
        try {
            let listProduct = [...items] as IProduct[]
            listProduct.push(product)
            setItems(listProduct)
            localStorage.setItem(nameLocalStorage, JSON.stringify(listProduct))
        } catch (error) {
            toast.error('Erro na adição do produto')
        }
    }

    const disabledButtonAdd = (idProduct: string):boolean => {
        return items.some((product) => product.id === idProduct)
    }

    return(
        <CartContext.Provider
            value={{
                items,
                bagQuantity,
                addProduct,
                disabledButtonAdd
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart= (): ICartData => useContext(CartContext)