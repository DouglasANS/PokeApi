import react from "react";
import CardPokeComponent from "../../components/CardPokeComponent"
import { Container } from './styles'
import axios from "axios";

class Home extends react.Component{

    state = { allPokemons: [] };

    dataPokemons = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/generation/1')
        let pokemons = [];

        const promisseMap = data.pokemon_species.map(async pokemon => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            pokemons.push(res.data);
        });
        await Promise.all(promisseMap);

        this.setState({allPokemons: pokemons.sort(function (a,b) {
            if (a.id > b.id) {
              return 1
            }
            if (a.id < b.id) {
              return -1
            }
            return 0
          })})    
    }

    componentWillMount(){
        this.dataPokemons()

    }

    


    render(){
        return(
            <>
            <Container>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-around", background: "#ebebeb"}}>
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
                <a href="#" ><button>Go top</button></a>
            </Container>
            </>
        )
    }
}

export default Home