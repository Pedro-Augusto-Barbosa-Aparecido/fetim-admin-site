import { styled } from "../../styles";

export const Button = styled("button", {
  width: "calc(100% + 20px)",
  height: 50,

  position: "relative",

  backgroundColor: "$green700",

  border: 0,
  borderRadius: 4,

  outline: "none",

  fontSize: "1rem",
  fontFamily: "$roboto",
  fontWeight: "bold",

  color: "$gray300",

  cursor: "pointer",

  transition: "background-color 0.5s",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "1rem",

  "&:hover": {
    backgroundColor: "$green500",
  },
});
