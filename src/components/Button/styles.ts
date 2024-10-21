import styled from "styled-components";

export const ButtonContainer = styled.button.attrs((props) => ({
  type: "button",
}))<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
        background-color: #ccc; /* cor de fundo quando desabilitado */
        color: #666; /* cor do texto quando desabilitado */
        cursor: not-allowed; /* cursor não permitido quando desabilitado */
        opacity: 0.5; /* opacidade reduzida quando desabilitado */
    }
`;
