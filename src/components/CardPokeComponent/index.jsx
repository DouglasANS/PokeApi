import react from "react";
import { Container, LogoPoke,DivArrowUp, StatusBar,InfoPoke, InfoPokeLine, ButtonArrowUp, InfoPokeName, InfoPokeValue, InfoPokeDiv, NumberPoke, TitlePokemon, TextNumberPoke, ImgPokemon, TypePokemon, TypePokemonDiv, TypeNamePokemon,TypeImgPokemon } from './styles'
import { SetTypeColor } from "../../utils/SetTypeColor";
import { SetTypeImage } from "../../utils/SetTypeImage";
class CardPokeComponent extends react.Component {

    state = { 
        idPokemon: this.props.id_Poke,
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
            TableInfoTwo: `${(parseFloat(this.props.height)/10)}m`,
            TableInfoThree: `${(parseFloat(this.props.weight)/10)}kg`,
        },
        TypeDiv: "flex", 
        TitlePoke: { 
            mtop: "0px", 
            transition: "0.5s linear"
        },
        ButtonArrow: { 
            transform: "rotate(0deg)", 
        },
        IdPoke: { 
            display: "inline", 
        },
    
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
                TitlePoke: { 
                    mtop: "190px", 
                    transition: "0.5s linear"
                },
                ButtonArrow: { 
                    transform: "rotate(180deg)", 
                },
                IdPoke: { 
                    display: "none", 
                },
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
                TitlePoke: { 
                    mtop: "0px", 
                    transition: "none",
                },
                ButtonArrow: { 
                    transform: "rotate(0deg)", 
                },
                IdPoke: { 
                    display: "inline", 
                },
            })
        }
        
    }

    idPokemonStyle = (id) => {
        if(id <= 9){
          return `00${id}`
        }
        if(id <= 99){
            return `0${id}`
          }else{
            return id
          }
    }
    
    
    render(){
        
    const cardBackgroundColor = `${SetTypeColor(this.props.types[0].type.name)}90`;
    const IdcardBackgroundColor = `${SetTypeColor(this.props.types[0].type.name)}80`;

    const resultID = this.idPokemonStyle(this.props.id_Poke)
        
    //style={{marginRight: spacing + 'em'}}
    //style={{background: '#ffffff76'}} onMouseOut={this.cardEfectOut}
        return(
            <>
                <Container cardBackgroundColor={cardBackgroundColor} >
                    <LogoPoke>
                    
                    </LogoPoke>
                    <NumberPoke BackgroundTypeColor={IdcardBackgroundColor} IdPoke={this.state.IdPoke} >
                        <TextNumberPoke>#{resultID}</TextNumberPoke>
                    </NumberPoke>
                    <div></div>
                    <StatusBar height={this.state.StatusBarHeight}>
                        <ImgPokemon ImgPoke={this.state.ImgPoke} src={this.props.imgpokemon} alt="imgPokemon"></ImgPokemon>
                        
                            <DivArrowUp>
                                <ButtonArrowUp ButtonArrow={this.state.ButtonArrow} onClick={this.statusPoke}></ButtonArrowUp>
                            </DivArrowUp>
                            <TitlePokemon TitlePoke={this.state.TitlePoke}>{this.props.namePokemon}</TitlePokemon>
                            <TypePokemonDiv TypeDiv={this.state.TypeDiv} >    
                            
                            {this.props.types.map((val)=>{
                                return(
                                    <div key={val.type.name}>
                                        <TypePokemon BackgroundTypeColor={SetTypeColor(val.type.name)} >
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