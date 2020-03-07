import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
let time;

class VotePart extends Component {

    constructor(props){
        super(props);
        this.state = {
            level: 1,
            score: 0,
            currentParaNum: 0,
            maxNumOfCan: 4,
            currPara: "It is the current position A",
            currParaArray: [],
            length: 0,
            readDone: false,
            answerred: false,
            paragraphs: [
                "Position A",
                "Position B",
                "Position C",
                "Position D",
            ],
            questions: ["Who you wanna vote?"],
            choices: [["AAA", "BBB", "CCC", "DDD"]],
            answers: ["AAA"],
            youtAnswer: null
        };

    };

    componentDidMount = async() => {
        this.startReading()
    }

    startReading = async() => {
        let index = 0;
        await setTimeout(() => {
            this.setState({ readDone: true})
            //we can write description or add link button here for change to vote
        }, 1000)//it is the time for auto change to the vote
    };

    checkAnswer = async(e) => {
        this.setState({ answerred: true})
    }

    changeQuestion = async () => {//still need debug
        await this.setState({
            currentParaNum: this.state.currentParaNum + 1,
            currPara: this.state.paragraphs[this.state.currentParaNum],
            readDone: false,
            answerred: false
        });
        this.startReading();
    }

    render(){
        return(
            <div>
                {this.state.readDone
                ?
                    this.state.answerred
                    ?
                        this.state.currentParaNum < this.state.maxNumOfCan
                        ?
                        <button onClick={this.changeQuestion}>Next VOTE </button>
                        :
                        <div>
                            <h2>You have finish all the VOTE!</h2>
                            <Link to="/user">Go Back Home</Link>
                        </div>
                    :
                    <div>
                        {/* TODO : update the database and use <h3>{this.state.questions[this.state.currentParaNum]}</h3> */}
                        <h3>{this.state.questions[0]}</h3>
                        {/* TODO : update the database and use this.state.choices[this.state.currentParaNum].map(choice => ( */}
                        {this.state.choices[0].map(choice => (
                            <div>
                                <input type="radio" value={choice} defaultChecked={false} onClick={this.checkAnswer} />
                                {choice}
                            </div>

                        ))}
                    </div>
                :
                <div>
                    {this.state.currParaArray
                    ?
                        <div className="row" style={{paddingLeft:30, fontSize: 20}}>
                        {this.state.currParaArray.map( word => (
                            <div className={word}>&nbsp;{word}</div>
                        ))}
                        </div>
                    :
                        <p>wait for a sec ...</p>
                    }
                </div>
                }
                <br/>The process: {this.state.currentParaNum + 1} / {this.state.maxNumOfCan + 1}
            </div>
        )
    }
}

export default VotePart;
