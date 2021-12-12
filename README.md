## Introdução

Este projeto foi desenvolvido como um teste pratico para a vaga de Desenvolvedor Front end Junior na Brisanet

## Tecnologias Usadas

- NextJs
- React
- JavaScript
- Sass
- MUI (Material UI)
- Styled components
- Axios

## Descrição

O projeto foi desenvolvido visando apresentar de maneira mais abrangente possível meus conhecimentos e preocupações com performance e SEO, justamente por causa dessas características ele foi desenvolvido usando NextJS, que possibilita a criação de paginas por meio do server side rendering, onde toda a criação da pagina é feita no lado servidor facilitando drasticamente a atuação dos motores de busca, além de a partir de uma primeira renderização criar uma versão estática em CDN que será acessada pelos demais usuarios, tornando a pagina muito mais performatica, mas sem eliminar o dinamismo pois foi setado um "revalidate" e acada 60 segundos a pagina faz uma nova requisição a api e atualiza os dados em tela. 
Vale ressaltar que o MUI foi escolhido para ser usado na estilização da página pois em situação real de trabalho dificilmente se uda CSS puro, a não ser em pequenas ocasiões, e nesse projeto não foi diferente.
Contudo, o MUI não se da muito bem com o Sass por isso acabei fazendo uso da versão do styled components do MUI inline e quando possível apliquei sass no restante.

Ele foi hospedado na Versel e você pode acessa-lo [Por Aqui](https://react-marvel-comics-tau.vercel.app)
### OBS

Um dos requisitos do teste era a implementação e uso da API do Google Maps, contudo, para poder acessar a api de forma efetiva é necessário a utilização de um cartão e eu infelizmente não tinha nenhum em mãos para poder libera-la, então não foi possível usa-la de maneira realmente eficiente.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.