import styled from 'styled-components';

export const Container = styled.div`
    background-color: #C2FFA5;
    height: 350px;
    width: 220px;
    border-radius: 16px;
    position: relative;
    margin: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  //background: url('../assets/simbolpoke.webp');

`
export const NumberPoke = styled.div`
    margin-top: 10px;
    height: 25px;
    width: 60px;
    background: #fff;
    border-radius: 16px;
    text-align: center;
` 
export const TextNumberPoke = styled.h3`
    margin-top: 3px;
` 

export const StatusBar = styled.div`
    height: ${props => props.height};
    width: 210px;
    background: #ffffff76;
    border-radius: 16px;
    margin: 0 5px 5px 5px;

    transition-property: height;
    transition-duration: 1s;

   
`
export const ImgPokemon = styled.img`
    height: 100px;
    width: 100px;
    z-index: 1;
    position: absolute;
    bottom: 170px;
    left: 60px;
`

export const TypePokemonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const TypePokemon = styled.div`
    height: 35px;
    width: 90px;
    border-radius: 2px;
    background-color: #6AE95F;
    display: flex;
    flex-direction: row;
    margin: 5px;
    //justify-content: center;
    //align-items: center;
    
`
export const TypeNamePokemon = styled.h2`
    margin: auto;
    text-align: center;
    font-size: 15px;
    width: 60%;
    
    
`
export const TypeImgPokemon = styled.img`

    padding: 5px;
    width: 40%;
    height: 100%;
`


export const LogoPoke = styled.div`
    height: 200px;
    width: 200px;
    background: url('../simbolpoke.webp');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.3;
    top: 30px;
    left: 35px;
    z-index: 0;
`


;
