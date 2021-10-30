import { Component } from "react";


class ClassComponent extends Component{
    render(){
        return(
            <button>
                {this.props.name}
            </button>
        )
    }
}

export default ClassComponent