import react from "react";
import { Container, LogoPoke,DivArrowUp, StatusBar,InfoPoke, InfoPokeLine, ButtonArrowUp, InfoPokeName, InfoPokeValue, InfoPokeDiv, NumberPoke, NamePokemon, TextNumberPoke, ImgPokemon, TypePokemon, TypePokemonDiv, TypeNamePokemon,TypeImgPokemon } from './styles'
import { SetTypeColor } from "../../utils/SetTypeColor";
import { SetTypeImage } from "../../utils/SetTypeImage";
class CardPokeComponent extends react.Component {

    state = { CardClick: false, StatusBarHeight: "55%" };


    statusPoke = () =>{
        this.setState({StatusBarHeight: "97.5%"})
    }
    
    
    render(){
        
    const cardBackgroundColor = `${SetTypeColor(this.props.types[0].type.name)}90`;
        
    //style={{marginRight: spacing + 'em'}}
    //style={{background: '#ffffff76'}} onMouseOut={this.cardEfectOut}
        return(
            <>
                <Container cardBackgroundColor={cardBackgroundColor} >
                    <LogoPoke>
                    
                    </LogoPoke>
                    <NumberPoke >
                        <TextNumberPoke>#{this.props.id_Poke}</TextNumberPoke>
                    </NumberPoke>
                    <div></div>
                    <StatusBar height={this.state.StatusBarHeight}>
                        <ImgPokemon  src={this.props.imgpokemon} alt="imgPokemon"></ImgPokemon>
                        
                            <DivArrowUp>
                                <ButtonArrowUp onClick={this.statusPoke}></ButtonArrowUp>
                            </DivArrowUp>
                            <NamePokemon>{this.props.namePokemon}</NamePokemon>
                            <TypePokemonDiv >    
                            
                            {this.props.types.map((val)=>{
                                return(
                                    <div>
                                        <TypePokemon BackgroundTyprColor={SetTypeColor(val.type.name)} >
                                            <TypeNamePokemon >{val.type.name}</TypeNamePokemon>
                                            <TypeImgPokemon  src={SetTypeImage(val.type.name)} alt="imgPokemon"></TypeImgPokemon>
                                        </TypePokemon>
                                    </div>
                                )
                            })

                            }
                            </TypePokemonDiv>
                            <InfoPokeDiv >
                                <InfoPoke>
                                    <InfoPokeName>Experience:</InfoPokeName>
                                    <InfoPokeValue>{this.props.experience}</InfoPokeValue>
                                    
                                </InfoPoke>
                                <InfoPokeLine></InfoPokeLine>
                                <InfoPoke>
                                    <InfoPokeName>Height:</InfoPokeName>
                                    <InfoPokeValue>{this.props.height}</InfoPokeValue>
                                </InfoPoke>
                                <InfoPokeLine></InfoPokeLine>
                                <InfoPoke>
                                    <InfoPokeName>Weight:</InfoPokeName>
                                    <InfoPokeValue>{this.props.weight}</InfoPokeValue>
                                </InfoPoke>

                            </InfoPokeDiv>

                    </StatusBar>                    
                </Container>
                
            </>
        )
    }
}

export default CardPokeComponent