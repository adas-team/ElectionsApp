import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {

    constructor(){
        super();
        this.state = {

        };

    };

    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Welcome to Ada's Team Elections</h2>
                    <h4>WHO ARE WE? Ada's Team! </h4>
                    <h4>WHAT DO WE DO? Promote diversity! </h4>
                    <h4>WHERE DO WE DO IT? In technology!</h4>
                    <Link to="valid">Valid First</Link>
                </div>
            </div>
        )
    }
}

export default Main;
