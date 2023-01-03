import { styled } from "styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  width: "100%",
  height: "100vh",
  inset: "100vh",
});

export const Close = styled(Dialog.Close, {
  background: "none",
  border: "none",
  width: "1.5rem",
  height: "1.5rem",
  margin: "1.5rem 0 1.5rem 0",

  svg: {
    color: "$gray400",
  },
});

export const ListProductBagContainer = styled("div", {
  display: "inherit",
  flexDirection: "inherit",
  gap: 24,
});

export const CardProductBag = styled("div", {
  display: "flex",
  gap: 20,
});

export const ContainerImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  img: {
    objectFit: "fill",
  },
});

export const ContainerInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    fontWeight: 400,
    fontSize: "1.125rem",
    color: "$gray300",
    lineHeight: 1.6,
    marginBottom: 2,
  },

  strong: {
    fontWeight: 400,
    fontSize: "1.125rem",
    lineHeight: 1.6,
    color: "$gray100",
  },

  button: {
    background: "none",
    border: "none",
    width: "4.063rem",
    height: "1.625rem",
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.6,
    color: "$green500",
    margin: 0,
    marginLeft:'0 !important',
    marginTop: 8,
    cursor: 'pointer',

    "&:hover": {
      color: "$green300",
    },
  },
});

export const DetailsContainer = styled('div', {
  width: '100%',
  marginTop: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 7,

  div: {
    display: 'inherit',
    justifyContent: 'inherit',
    lineHeight: 1.6,

    '.title-quantity': {
      fontSize: '1rem',
      fontWeight: 400,
      color: '$gray100',
    },

    '.value-quantity':{
      fontSize: '1.125rem',
      fontWeight: 400,
      color: '$gray300',
    },

    '.title-total':{
      fontSize: '1.125rem',
      fontWeight: 700,
      color: '$gray100',
    },

    '.value-total':{
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '$gray100',
      lineHeight: 1.4,
    }
  }
})


export const NavContainer = styled('nav', {
  display: "flex",
  flexDirection: "column",
  width: "30rem",
  background: "$gray800",
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  padding: '0 3rem',

  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  header: {
    display: 'inherit',
    flexDirection: 'inherit',

    h2: {
      fontWeight: 700,
      fontSize: "1.25rem",
      color: "$gray100",
      marginBottom: "2rem",
    },
  
    button: {
      marginLeft: "auto",
    },
  }
})

export const FinishBuy = styled('button', {
  padding: '1.25rem 2rem',
  margin: '3rem 0 3rem 0',
  gap: 10,
  borderRadius: 8,
  background: '$green500',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '$white',
  cursor: 'pointer',
})
