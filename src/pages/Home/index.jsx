import react, { useEffect } from "react";
import CardPokeComponent from "../../components/CardPokeComponent"
import { Container } from './styles'
import axios from "axios";

class Home extends react.Component{

    state = { allPokemons: [] };

    

    dataPokemons = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/generation/1')
        let pokes = [];

        const promisseMap = data.pokemon_species.map(async pokemon => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            pokes.push(res.data);
        });
        console.log('1', this.state.allPokemons)
        await Promise.all(promisseMap);
        this.setState({allPokemons: pokes})
        
        
    }

    componentWillMount(){
        this.dataPokemons()
    }


    teste = () => {
        console.log(this.state.allPokemons)
        
    }

    render(){
        return(
            <>
            <button onClick={this.teste}>ASDASDA</button>
            <Container>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                { this.state.allPokemons.map((val)=>{
                    return(
                        <div key={val.id}>
                            <CardPokeComponent 
                            id_Poke={val.id}
                            namePokemon={val.species.name} 
                            imgpokemon={val.sprites.other["official-artwork"].front_default}
                            types={val.types}
                            experience={val.base_experience}
                            height={val.height}
                            weight={val.weight}
                            hp={val.stats[0].base_stat}
                            attack={val.stats[1].base_stat}
                            defense={val.stats[2].base_stat}
                            />
                        </div>
                    )
                })

                }
                </div>
            </Container>
            </>
        )
    }
}

export default Home