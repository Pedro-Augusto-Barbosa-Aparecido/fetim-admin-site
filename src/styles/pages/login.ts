import { styled } from "..";

export const LoginContainer = styled("main", {
  maxWidth: 1100,
  width: "100%",
  height: 576,

  backgroundColor: "transparent",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "1rem",
});

export const ImageContainer = styled("span", {
  width: 60,
  height: 60,

  borderRadius: "50%",
  borderWidth: 2,
  borderColor: "$white",
});

export const ForgotPasswordModalTrigger = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  width: 460,
});
