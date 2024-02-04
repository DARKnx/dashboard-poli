import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
 scroll-behavior: smooth;
}
p, a, h1 {
  color: ${({theme}) => theme.colors.text};
}
body {
  font-family: 'Ubuntu', sans-serif;
  background: ${({theme}) => theme.colors.background};

}
::-webkit-scrollbar-track {
    background-color: #363636;
}
::-webkit-scrollbar {
    width: 6px;
  
   
}
::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.text};
    border-radius: 6px;
}
.border-container {
box-sizing: border-box;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    padding: 5% 8%;
}

.term-container {
    border-radius: 20px;
    padding: 10px;
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 5% 8%;
}

h2 {
margin: 10px 0;
}
h2, p {
color: black;
}
`

export default GlobalStyle