import React, { Component } from "react";
import Candidate from "./Candidate";
import { getCandidateList } from "../helper";
import { Form, Card } from "semantic-ui-react";

class ListCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: {},
      currSelection: ""
    };
  }

  componentDidMount() {
    this.setCandidateList();
  }

  setCandidateList = async () => {
    const candidates = await getCandidateList();
    this.setState({ candidates });
  };

  onSelect = name => {
    const { updateVote, position } = this.props;
    this.setState({ currSelection: name });
    updateVote({ position, candidateName: name });
  };

  renderCandidates = position => {
    const { candidates, currSelection } = this.state;
    if (candidates[position]) {
      const currCandidates = candidates[position];
      return Object.keys(currCandidates).map(candidateName => (
        <Candidate
          position={position}
          key={candidateName}
          candidateName={candidateName}
          currSelection={currSelection}
          onSelect={this.onSelect}
        />
      ));
    }
  };

  render() {
    const { position } = this.props;
    return (
      <Form>
        <Form.Group grouped widths="equal">
          <Card.Group itemsPerRow={5}>
            {this.renderCandidates(position)}
          </Card.Group>
        </Form.Group>
      </Form>
    );
  }
}

export default ListCandidates;
