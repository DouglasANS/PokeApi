import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
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

    
`;
