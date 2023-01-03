import { styled } from "@stitches/react";

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: 'flex',
  alignItems: 'center',

  button: {
      marginLeft: 'auto',
  },

  variants:{
    isSuccess: {
      true: {
        justifyContent: 'center',
      }
    }
  }
});
