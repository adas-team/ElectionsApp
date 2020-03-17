import React, { Component } from "react";
import VotePart from "../components/votepart/votepart";
class Vote extends Component {

    constructor(){
        super();
        this.state = {
            startVote: false,
            quesNum: 1,
        };

    };

    startVote = () => {
        this.setState({ startVote: true });
    }


    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>It is the vote page</h1>
                    {
                        this.state.startVote
                        ?
                        <VotePart />
                        :
                        <button onClick={this.startVote} >Start Vote!</button>
                    }
                </div>
            </div>
        )
    }
}

export default Vote;
