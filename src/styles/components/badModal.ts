import { styled } from "styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  width: "100%",
  height: "100vh",
  inset: "100vh",
});

export const Content = styled(Dialog.Content, {
  display: "flex",
  flexDirection: "column",
  width: "30rem",
  background: "$gray800",
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,

  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  h2: {
    fontWeight: 700,
    fontSize: "1.25rem",
    color: "$gray100",
    marginBottom: "2rem",
  },

  button: {
    marginLeft: "auto",
  },
});

export const Close = styled(Dialog.Close, {
  background: "none",
  border: "none",
  width: "1.5rem",
  height: "1.5rem",
  margin: "1.5rem 1.5rem 1.5rem 0",

  svg: {
    color: "$gray400",
  },
});

export const Box = styled("div", {
  display: "inherit",
  flexDirection: "inherit",
  margin: "0 3rem",
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
    objectFit: 'fill'
  }
});

export const ContainerInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    span: {
        fontWeight: 400,
        fontSize: '1.125rem',
        color: '$gray300',
        lineHeight: 1.6,
        marginBottom: 2,
    },

    strong:{
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: '$gray100',
    }
})
