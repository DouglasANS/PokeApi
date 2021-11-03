import styled from 'styled-components';

export const Container = styled.div`
    background-color:  ${props => props.cardBackgroundColor};
    height: 350px;
    width: 220px;
    border-radius: 16px;
    position: relative;
    margin: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 8px  #00000070;
    &:hover{
        box-shadow: 1px 1px 8px  black;
    }
  //background: url('../assets/simbolpoke.webp'); #C233A5

`
export const NumberPoke = styled.div`
    margin-top: 10px;
    height: 25px;
    width: 60px;
    background: #fff;
    border-radius: 16px;
    text-align: center;
    position: absolute;
    z-index: 10;
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

    z-index: 1;
   
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
    align-items: center;
`
export const TypePokemon = styled.div`
    height: 35px;
    width: 90px;
    border-radius: 2px;
    background-color: ${props => props.BackgroundTyprColor};;
    display: flex;
    flex-direction: row;
    margin: 5px;
    //justify-content: center;
    //align-items: center;
    
`
export const NamePokemon = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Orienta', sans-serif;
    text-transform: capitalize;
`
export const TypeNamePokemon = styled.h2`
    margin: auto;
    text-align: center;
    width: 60%;  
    font-size: 13px;
    font-weight: 600;
    font-family: 'Orienta', sans-serif;
    text-transform: capitalize;
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
    top: 20px;
    left: 10px;
    z-index: 0;
`
export const DivArrowUp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
`
export const ButtonArrowUp = styled.button`
    height: 25px;
    width: 25px;
    margin: 6px 6px 0 0;
    background: url('../ArrowUP.png');
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    
`
export const InfoPokeDiv = styled.div`
    width: 100%;
    padding: 0 10px 0 10px;
    margin-top: 20px;
`
export const InfoPoke = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`

export const InfoPokeName = styled.h2`
    font-size: 15px;
    font-weight: 400;
    font-family: 'Orienta', sans-serif;
    text-transform: capitalize;
`
export const InfoPokeValue = styled.h2`
    font-size: 15px;
    font-weight: 400;
    font-family: 'Orienta', sans-serif;

`
export const InfoPokeLine = styled.div`
    border-bottom: solid 1px #00000025;

`



;
