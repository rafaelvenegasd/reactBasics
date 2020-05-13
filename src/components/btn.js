import React from "react";

class Btn extends React.Component{
    render(){
        return (
            <button className="btn btn-dark">{this.props.label}</button>
        )
    }
}

export default Btn;
