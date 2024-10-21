# Conclusão do Projeto React com Validação de Formulário

## Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de criar um formulário de registro com validação utilizando React, `useForm` e `Yup`. A aplicação permite que os usuários insiram dados e valide essas entradas antes do envio do formulário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **useForm**: Hook do React Hook Form para gerenciar o estado do formulário.
- **Yup**: Biblioteca de validação para criação de esquemas de validação de formulário.

## Funcionalidades

- Validação em tempo real das entradas do formulário.
- Mensagens de erro específicas para cada campo.
- Submissão de formulário somente se todas as validações forem satisfeitas.

## Sobre useForm

O `useForm` é um hook fornecido pelo React Hook Form que simplifica a gestão do estado de formulários em aplicações React. Ele permite:

- Criar e registrar campos de formulário.
- Gerenciar o estado de cada campo, incluindo valores, erros e estado de validação.
- Integrar-se facilmente com outras bibliotecas de validação, como `Yup`.

## Sobre Yup

O `Yup` é uma biblioteca de validação JavaScript que permite definir esquemas de validação. Com `Yup`, você pode:

- Criar esquemas de validação para diferentes tipos de dados (strings, números, objetos, arrays, etc.).
- Definir regras de validação complexas e personalizadas.
- Gerar mensagens de erro amigáveis e específicas.

## Rodando o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/RRDMELO/trilha-react-desafio-4.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd trilha-react-desafio-4
    ```

3. Instale as dependências necessárias:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run start
    ```

Após esses passos, o projeto estará rodando localmente e você poderá acessá-lo pelo navegador em `http://localhost:3000`.

## Conclusão

O uso de `useForm` junto com `Yup` permitiu a criação de um sistema de validação robusto e eficiente para nosso formulário de registro. Essas ferramentas não só simplificaram o gerenciamento de estados e validações no formulário, mas também melhoraram a experiência do usuário com mensagens de erro claras e validação em tempo real.
