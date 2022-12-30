import { styled } from "@stitches/react";

export const ButtonBagContainer = styled("button", {
  width: "3.5rem",
  height: "3.5rem",
  borderRadius: 6,
  cursor: "pointer",

  variants: {
    svgColor: {
      light: {
        svg: {
          color: "$gray100",
        },
        background: "$green500",
        "&:hover": {
          background: "$green300",
        },
      },

      dark: {
        width: "3rem",
        height: "3rem",
        svg: {
          color: "$gray400",
        },
        background: "$gray800",
        "&:hover": {
          svg: {
            color: "$gray300",
          },
        },
      },
    },
  },

  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$white',
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: '$green300',
    borderRadius: '50%',
    padding: 0,
    position: 'absolute',
    right: -4,
    top: 165,
    gap: 8,

    fontSize: '1rem',
    fontWeight: 700,
  }
});
