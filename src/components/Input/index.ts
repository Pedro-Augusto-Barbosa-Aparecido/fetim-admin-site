import { styled } from "../../styles";

export const Input = styled("input", {
  width: "100%",
  height: 50,

  border: 0,
  borderRadius: 2,

  outline: "none",

  padding: "0 10px",

  fontFamily: "$roboto",
  fontSize: "1rem",
  fontWeight: "normal",

  backgroundColor: "$gray800",
  color: "$gray300",
});

export const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  width: "100%",

  label: {
    fontFamily: "$roboto",
    fontSize: "$lg",
  },

  gap: "0.5rem",

  position: "relative",

  "& > svg": {
    color: "$gray300",

    position: "absolute",
    right: -10,
    bottom: 12,
  },

  "&::placehoder": {
    color: "$gray100",
  },
});
