import React, { Component } from "react";
import { Link } from "react-router-dom";

class Test extends Component {

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>It is the Validation page</h1>
                    <p>Instruction: Please enter your email so that we can check before your vote
                    </p>
                    <button onClick={this.startValid}>Confirm</button>
                    <Link to="/"> -Go Back Home-  </Link>

                    <Link to="/vote"> -Vote- </Link>
                </div>
            </div>

        )
    }
}

export default Test;
