import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container, LoginContainer } from "../Login/styles";

export default function HomePage() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/");
  };
  return (
    <Container>
      <LoginContainer>
        <div>
          <h1>Autenticação e validação dentro do React</h1>
          <Button title="Voltar" onClick={handleBackButton} />
        </div>
      </LoginContainer>
    </Container>
  );
}
