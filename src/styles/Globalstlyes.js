import { createGlobalStyle } from 'styled-components'

const GlobalStlye = createGlobalStyle`
:root{
    --background-dark-color: #10121A;
    --white-color: #fff;
    --background-sidebar-color: #191D2B;
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --font-light-color: #a4acc4;
    --font-dark-color: #151515;
    --sidebar-dark-color: #191D28;
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
    color: var(--font-light-color);
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}
`

export default GlobalStlye
