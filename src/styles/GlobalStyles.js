import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    #root {
        height: 100vh;
    }
    
    ul, li{
        list-style: none
    }
    body{
        background-color: #EDEDED;
    }
    button{
        cursor: pointer;
    }

    
    :root {

    --button-login-Register: #623D63;
    --button-login-Register-hover: #621233;
    --login-Register-shadow: #623d63; 
    --border-bottom-login: #9e9e9e;
    --login-text-info: #E1E1E1;
    --button-text-login: #E1E1E1;
    --login-focus-shadow: #623d63;

    }
`;
