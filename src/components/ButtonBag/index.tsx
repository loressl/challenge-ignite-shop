import { ComponentProps } from "@stitches/react";
import { useCart } from "hooks/useCart";
import { Handbag } from "phosphor-react";
import { ButtonBagContainer } from "styles/components/buttonBag";

type ButtonBagProps = ComponentProps<typeof ButtonBagContainer> & {
    hasQuantity: boolean
}

export default function ButtonBag({hasQuantity, ...props}: ButtonBagProps) {
    const { bagQuantity } = useCart()
    
    return(
        <ButtonBagContainer disabled={bagQuantity ===0} {...props}>
            <Handbag size={32} />
            {(hasQuantity && bagQuantity > 0) && <span>{bagQuantity}</span>}
        </ButtonBagContainer>
    )
}