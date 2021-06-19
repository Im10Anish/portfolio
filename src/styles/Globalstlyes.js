import { createGlobalStyle } from 'styled-components'

const GlobalStlye = createGlobalStyle`
:root{
    --background-dark-color: #10121A;
    --white-color: #fff;
    --background-sidebar-color: #191D2B
}
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
}
body{
    background-color: var(--background-dark-color);
    color: var(--white-color);
}
`

export default GlobalStlye
