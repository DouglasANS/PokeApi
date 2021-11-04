import react from "react";
import { Container, LogoPoke,DivArrowUp, StatusBar,InfoPoke, InfoPokeLine, ButtonArrowUp, InfoPokeName, InfoPokeValue, InfoPokeDiv, NumberPoke, TitlePokemon, TextNumberPoke, ImgPokemon, TypePokemon, TypePokemonDiv, TypeNamePokemon,TypeImgPokemon } from './styles'
import { SetTypeColor } from "../../utils/SetTypeColor";
import { SetTypeImage } from "../../utils/SetTypeImage";
class CardPokeComponent extends react.Component {

    state = { 
        CardClick: false, 
        StatusBarHeight: "55%",
        ImgPoke: { 
            height: "100px",
            width: "100px",
            left: "60px",
        },

        TableInfo: { 
            TableTitleOne: "Experience",
            TableTitleTwo: "Height",
            TableTitleThree: "width",
            TableInfoOne: `${this.props.experience}`,
            TableInfoTwo: `${this.props.height}`,
            TableInfoThree: `${this.props.weight}`,
        },
        TypeDiv: "flex", 
        TitlePoke: "0",
    
    };


    statusPoke = () =>{
        if(this.state.CardClick === false){
            this.setState({
                CardClick: true, 
                StatusBarHeight: "97.5%",
                ImgPoke: { 
                    height: "150px",
                    width: "150px",
                    left: "35px",
                },
                TableInfo: { 
                    TableTitleOne: "HP",
                    TableTitleTwo: "Attack",
                    TableTitleThree: "Defense",
                    TableInfoOne: `${this.props.hp}`,
                    TableInfoTwo: `${this.props.attack}`,
                    TableInfoThree: `${this.props.defense}`,
                },
                TypeDiv: "none",
                TitlePoke: "190px",
            })
        }
        
        if(this.state.CardClick === true){
            this.setState({
                CardClick: false, 
                StatusBarHeight: "55%",
                ImgPoke: { 
                    height: "100px",
                    width: "100px",
                    left: "60px",
                },

                TableInfo: { 
                    TableTitleOne: "Experience",
                    TableTitleTwo: "Height",
                    TableTitleThree: "width",
                    TableInfoOne: `${this.props.experience}`,
                    TableInfoTwo: `${this.props.height}`,
                    TableInfoThree: `${this.props.weight}`,
                },
                TypeDiv: "flex",
                TitlePoke: "0",
            })
        }
        
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
                        <ImgPokemon ImgPoke={this.state.ImgPoke} src={this.props.imgpokemon} alt="imgPokemon"></ImgPokemon>
                        
                            <DivArrowUp>
                                <ButtonArrowUp onClick={this.statusPoke}></ButtonArrowUp>
                            </DivArrowUp>
                            <TitlePokemon TitlePoke={this.state.TitlePoke}>{this.props.namePokemon}</TitlePokemon>
                            <TypePokemonDiv TypeDiv={this.state.TypeDiv} >    
                            
                            {this.props.types.map((val)=>{
                                return(
                                    <div key={val.type.name}>
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
                                    <InfoPokeName>{this.state.TableInfo.TableTitleOne}:</InfoPokeName>
                                    <InfoPokeValue>{this.state.TableInfo.TableInfoOne}</InfoPokeValue>
                                    
                                </InfoPoke>
                                <InfoPokeLine></InfoPokeLine>
                                <InfoPoke>
                                    <InfoPokeName>{this.state.TableInfo.TableTitleTwo}:</InfoPokeName>
                                    <InfoPokeValue>{this.state.TableInfo.TableInfoTwo}</InfoPokeValue>
                                </InfoPoke>
                                <InfoPokeLine></InfoPokeLine>
                                <InfoPoke>
                                    <InfoPokeName>{this.state.TableInfo.TableTitleThree}:</InfoPokeName>
                                    <InfoPokeValue>{this.state.TableInfo.TableInfoThree}</InfoPokeValue>
                                </InfoPoke>

                            </InfoPokeDiv>

                    </StatusBar>                    
                </Container>
                
            </>
        )
    }
}

export default CardPokeComponent