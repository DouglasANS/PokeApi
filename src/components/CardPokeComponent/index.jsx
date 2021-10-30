import react from "react";
import { Container, LogoPoke, StatusBar, NumberPoke, TextNumberPoke, ImgPokemon, TypePokemon, TypePokemonDiv, TypeNamePokemon,TypeImgPokemon } from './styles'

class CardPokeComponent extends react.Component {

    
    teste = () => {
        //var asd = document.getElementById('teste')  
       // console.log(asd.innerHTML) 
        //asd.style.cssText = 'height: 80%;';
    }
    
    render(){
        
    
        return(
            <div >
                <Container onMouseEnter={this.teste} >
                
                    <NumberPoke>
                        <TextNumberPoke>#001</TextNumberPoke>
                    </NumberPoke>
                    <StatusBar height="80%">
                        <ImgPokemon src="../001.png" alt="imgPokemon"></ImgPokemon>
                        <TypePokemonDiv>
                            <TypePokemon>
                                <TypeNamePokemon>Grass</TypeNamePokemon>
                                <TypeImgPokemon src="../grass.png" alt="imgPokemon"></TypeImgPokemon>
                            </TypePokemon>
                        </TypePokemonDiv>

                    </StatusBar>                    
                </Container>

                <LogoPoke>
                </LogoPoke>
            </div>
        )
    }
}

export default CardPokeComponent