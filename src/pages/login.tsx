import {
  ForgotPasswordModalTrigger,
  ImageContainer,
  LoginContainer,
} from "../styles/pages/login";

import Image from "next/image";

import imgLogin from "../assets/admin-login-image.png";
import { Title } from "../components/Header/styles";
import { Input, InputContainer } from "../components/Input";
import { Form } from "../components/Form";

import { At, Key, SignIn } from "phosphor-react";
import { Button } from "../components/Button";
import { ModalLink } from "../components/ModalLink";

export default function Login() {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image
          src={imgLogin}
          alt=""
          priority
          objectFit="fill"
          width={300}
          height={300}
        />
      </ImageContainer>
      <Title>Faça seu login!</Title>
      <Form>
        <InputContainer>
          <label htmlFor="email">E-mail</label>
          <Input
            id="email"
            name="email"
            type={"email"}
            maxLength={50}
            autoComplete="off"
            placeholder="seuemail@email.com"
          />
          <At size={28} weight="light" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            name="password"
            type={"password"}
            maxLength={50}
            autoComplete="off"
            placeholder="*******************"
          />
          <Key size={28} weight="light" />
        </InputContainer>
        <InputContainer>
          <Button>
            Entrar
            <SignIn size={28} weight="fill" />
          </Button>
        </InputContainer>
      </Form>
      <ForgotPasswordModalTrigger>
        <ModalLink>Esqueci minha senha? clique aqui...</ModalLink>
      </ForgotPasswordModalTrigger>
    </LoginContainer>
  );
}
