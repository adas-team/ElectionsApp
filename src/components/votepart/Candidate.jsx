import React, { Component } from "react";
import { Card, Image, Checkbox } from "semantic-ui-react";

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      selected: false
    };
  }

  handleSelect = (e, { checked }) => {
    const color = checked ? "green" : null;
    this.setState({
      color,
      selected: checked
    });
  };

  render() {
    // TODO: Add this.props.years as label
    const { image, name, preferences } = this.props;
    const { color, selected } = this.state;
    return (
      <Card color={color}>
        <Card.Content>
          <Image floated="right" size="mini" src={image} />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            Preferences:
            <ol>
              <li>{preferences[0]}</li>
              <li>{preferences[1]}</li>
              <li>{preferences[2]}</li>
            </ol>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Checkbox radio onChange={this.handleSelect} checked={selected} />
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
