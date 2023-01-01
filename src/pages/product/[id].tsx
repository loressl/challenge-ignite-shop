import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next"
import Image from 'next/image'
import Head from "next/head";
import { ImageContainer, ProductContainer, ProductDetails } from "styles/pages/product";
import { useState, MouseEvent } from "react";
import Stripe from "stripe";
import { stripe } from "lib/stripe";
import { IProduct, useCart } from "hooks/useCart";

interface ProductProps {
    product: IProduct
}

export default function Product({ product }: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
    const { addProduct, disabledButtonAdd } = useCart()

    function handleBuyButton(event: MouseEvent<HTMLButtonElement>, product: IProduct) {
        event.preventDefault()
        addProduct(product)
    }

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button disabled={disabledButtonAdd(product.id)} onClick={(e) => handleBuyButton(e, product)}>
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // pesquisar os produtos mais acessados e pegar apenas os ids dele
    return {
        paths: [
            { params: { id: 'prod_N2REiE2S9OUpBa' } },
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params ? params.id:'';

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount && new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1 // 1 hours
    }
}