import React, { Component } from "react";
import Candidate from "./Candidate";
import { getCandidateList } from "../helper";
import { Form, Card } from "semantic-ui-react";
import { reelectedCandidates } from "../constants";

let COUNTER = 0;

class ListCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: {},
      currSelection: "",
    };
  }

  componentDidMount() {
    this.setCandidateList();
  }

  setCandidateList = async () => {
    const candidates = await getCandidateList();
    this.setState({ candidates });
  };

  onSelect = (name) => {
    const { updateVote, position } = this.props;
    this.setState({ currSelection: name });
    updateVote({ position, candidateName: name });
  };

  renderCandidates = (position) => {
    const { reelect } = this.props;
    const { candidates } = this.state;
    let currCandidates;
    if (reelect) {
      currCandidates = reelectedCandidates;
    } else if (candidates[position]) {
      currCandidates = candidates[position];
    }

    const { currSelection } = this.state;
    if (currCandidates) {
      return Object.keys(currCandidates).map((candidateName) => (
        <Candidate
          position={position}
          key={`${candidateName}${COUNTER++}`}
          candidateName={candidateName}
          currSelection={currSelection}
          onSelect={this.onSelect}
          reelect={reelect}
        />
      ));
    }
  };

  render() {
    const { position } = this.props;
    return (
      <Form>
        <Form.Group grouped widths="equal">
          <Card.Group stackable itemsPerRow={3}>
            {this.renderCandidates(position)}
          </Card.Group>
        </Form.Group>
      </Form>
    );
  }
}

export default ListCandidates;
