import { ComponentProps } from "@stitches/react";
import { Handbag } from "phosphor-react";
import { ButtonBagContainer } from "styles/components/buttonBag";

type ButtonBagProps = ComponentProps<typeof ButtonBagContainer> & {
    hasQuantity: boolean
}

export default function ButtonBag({hasQuantity, ...props}: ButtonBagProps) {
    return(
        <ButtonBagContainer {...props}>
            <Handbag size={32} />
            {hasQuantity && <span>2</span>}
        </ButtonBagContainer>
    )
}