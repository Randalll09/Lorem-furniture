import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}
li {
  list-style: none;
}

button{
  cursor: pointer;
  background: none;
  border: none;
}
input{
  border: none;
  &:focus{
    outline: none;
    &::placeholder{
      opacity: 0;
    }
  }
}

textarea{
  &:focus{
    &::placeholder{
      opacity: 0;
    }
  }
}
img{
  object-fit: cover;
}

body {
  overflow-x: hidden;
  -ms-overflow-style: none;
  // scrollbar-width: none;
}

`;
export default GlobalStyle;
