import React, { Component } from "react";
import Candidate from "./Candidate";
import { getCandidateList } from "../helper";
import { Form, Card } from "semantic-ui-react";
import { reelectedCandidates } from "../constants";

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

  onSelect = (name) => {
    const { updateVote, position, reelect } = this.props;
    const candidateName = reelect ? Object.keys(name) : name;
    const candidateRanking = reelect ? Object.values(name) : null;
    this.setState({ currSelection: name });
    updateVote({ position, candidateName, candidateRanking });
  };

  renderCandidates = (position) => {
    const { reelect, voteMethod } = this.props;
    const { candidates, currSelection } = this.state;
    let currCandidates;
    if (reelect) {
      currCandidates = reelectedCandidates;
    } else if (candidates[position]) {
      currCandidates = candidates[position];
    }

    if (currCandidates) {
      const entries = Object.entries(currCandidates);
    
      // Separate "Abstain" from other candidates
      const nonAbstainEntries = entries.filter(
        ([, candidateObj]) => candidateObj.name !== "Abstain"
      );
      const abstainEntry = entries.find(
        ([, candidateObj]) => candidateObj.name === "Abstain"
      );
    
      // Sort the non-Abstain candidates by key (alphabetical)
      const sortedCandidates = nonAbstainEntries.sort();
    
      // Map to components
      const candidateComponents = sortedCandidates.map(([candidateName]) => (
        <Candidate
          position={position}
          key={candidateName}
          candidateName={candidateName}
          currSelection={currSelection}
          onSelect={this.onSelect}
          reelect={reelect}
          voteMethod={voteMethod}
        />
      ));
    
      // Add Abstain candidate at the end if it exists
      if (abstainEntry) {
        const [abstainName] = abstainEntry;
        candidateComponents.push(
          <Candidate
            position={position}
            key={abstainName}
            candidateName={abstainName}
            currSelection={currSelection}
            onSelect={this.onSelect}
            reelect={reelect}
            voteMethod={voteMethod}
          />
        );
      }
    
      return candidateComponents;
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
