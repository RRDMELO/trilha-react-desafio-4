import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  
  const navigate = useNavigate();

  const {
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const form = watch();
  console.log(form);

const handleLogin = () => {
navigate("/home")
}

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!isValid} onClick={handleLogin} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
