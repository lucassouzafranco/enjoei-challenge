## 📑 Sobre o Projeto

Este projeto consiste em uma plataforma de marketplace desenvolvida como desafio técnico da Enjoei. Este desafio foi desenvolvido por 1 pessoa (front-end) e, posteriormente, enviado para lideranças técnicas da organização.

O objetivo principal do projeto é construir uma aplicação com algumas das principais funcionalidades de marketplaces, como a busca de produtos e tags. 

## 💼 Regras de Negócio

O aplicativo deve exibir e sinalizar ao usuário produtos que estejam em promoção através de tags com a porcentagem de desconto, valor atual e anterior do produto. 
![pricetags](https://github.com/lucassouzafranco/enjoei-challenge/blob/main/pricetags.png)

## ✨ Decisões Tomadas

Durante o desenvolvimento do projeto, foram tomadas algumas decisões importantes para garantir a qualidade, organização e eficiência do código. Abaixo estão as decisões tomadas e o motivo pelo qual foram escolhidas.
     
### 1. JSON-SERVER:
   - JSON Server é uma biblioteca que simplifica a criação de uma API REST simulada, permitindo que os desenvolvedores criem rapidamente um servidor falso com endpoints personalizados. No contexto deste projeto, o JSON Server foi utilizado para simular uma API que fornece dados de produtos. Essa abordagem é particularmente útil durante o desenvolvimento front-end, pois permite que os desenvolvedores trabalhem com dados reais ou simulados sem a necessidade de uma API completa.

     
### 2. Busca ao clicar Enter:
   - Ao receber um protótipo de tela que continha uma tela de feedback de "Produto Não Encontrado" e sem botão de "enviar" na barra de pesquisa, percebi que uma técnica de pesquisa, como "debouncing search" não seria a melhor escolha. A fim de evitar uma experiência frustrante em que o usuário visse repetidamente a tela de feedback "Produto Não Encontrado" a cada nova tecla digitada, utilizei uma técnica de controle de exibição. Enquanto o usuário estiver digitando na barra de pesquisa, a tela de feedback não será mostrada instantaneamente. Em vez disso, ela só será exibida após o usuário pressionar a tecla "Enter" e a busca for realizada. 

![productnotfound](https://github.com/lucassouzafranco/enjoei-challenge/blob/main/ProductNotFound.gif)

### 2. Styled-Components:
  - Através da utilização do Styled-Components, cada componente possui seu próprio estilo encapsulado, o que evita conflitos de nomenclatura de classes e garante maior coesão visual. Além disso, a integração direta do CSS com o código JavaScript torna a escrita dos estilos mais intuitiva e flexível, permitindo a utilização de propriedades dinâmicas baseadas em estados e props.

  - A biblioteca também oferece suporte para a criação de componentes estilizados condicionais, permitindo a adaptação visual de acordo com diferentes estados do componente. Isso foi especialmente útil para implementar recursos como a estilização diferenciada de elementos em dispositivos de tela pequena.

### 3. Utilização do React.js:
   - O React.js é uma biblioteca JavaScript para a construção de interfaces de usuário. Ele permite a criação de componentes reutilizáveis e a fácil manipulação do DOM. Além disso a bilbioteca possui a capacidade de criar interfaces interativas e responsivas, como a desse projeto.

### 3. Criação do projeto com Vite:
   - O Vite é um bundler e build tool que se destaca por sua abordagem de desenvolvimento rápido e configuração minimalista.
   - A decisão de criar o projeto utilizando a ferramenta Vite foi motivada pela busca por uma configuração de desenvolvimento moderna, eficiente e que proporcionasse um processo de construção de aplicativos React mais ágil e performático. Com a combinação do Vite e do React, conseguimos criar um fluxo de trabalho eficiente para desenvolvimento e construção, resultando em uma aplicação mais performática e uma experiência de desenvolvimento mais fluida.
     ![toast](https://github.com/lucassouzafranco/desafio-frontend-oliveira-trust/blob/master/toastfy.gif)



## 📚 Organização do Código

A estrutura de pastas do projeto é organizada da seguinte forma:

├── public

│   └── ...

│

└── src

   ├── assets

   │   

   │   

   ├── components

Na pasta public, encontramos os arquivos estáticos relacionados à aplicação, como o nome da aplicação e o favicon. Todos esses arquivos são acessíveis publicamente.

Dentro da pasta src, encontramos a pasta que contém os componentes da aplicação e as mídias.


## 💻 Instruções de Instalação e de Uso

Para começar a usar o servidor JSON localmente, você precisa ter o `json-server` instalado em seu ambiente de desenvolvimento. Caso ainda não tenha, você pode instalá-lo usando o seguinte comando no terminal:

```bash
npm install -g json-server
```

Também será necessário instalar as dependências do projeto executando:
```bash
npm install
```

Após a instalação, você pode usar o comando a seguir para iniciar o servidor JSON e observar as alterações em um arquivo de dados específico (data.json)

```bash
json-server --watch src/api/data.json
```

Isso iniciará o servidor JSON e o vinculará ao arquivo data.json localizado na pasta api. O servidor estará disponível em http://localhost:3000/products por padrão.

Após ter a API em execução, você pode prosseguir com a execução da aplicação que consome os dados fornecidos pela API. Opte sempre por esta ordem de execução: API e projeto.   

```bash
npm run dev
```

A aplicação em React.js no endereço:

http://localhost:5173


## 🤴🏾 Autor

Nome: Lucas Souza

E-mail: lucassouzafranco1@gmail.com

Perfil no GitHub: https://github.com/lucassouzafranco

Perfil no LinkedIn: https://www.linkedin.com/in/lucas-souza-franco/
