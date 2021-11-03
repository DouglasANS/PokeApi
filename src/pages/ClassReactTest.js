
import React, { Component }  from "react";
import ClassComponent from "../components/ClassComponent";

class ClassReactTest extends Component{

        state = {
            message: 'Aprendendo State',
            teste: 'teste'
        }

        componentWillMount(){

        }
        
    clgTeste =() => {
        this.setState({
            message: 'Mudei'
        })
        console.log('teste')
    }
    
    render(){
   
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.clgTeste}> asd </button>
                <ClassComponent name="btn1" />
            </>
        )
    }
}

export default ClassReactTest