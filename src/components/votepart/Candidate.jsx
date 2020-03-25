import React, { Component } from "react";
import { Card, Image, Radio } from "semantic-ui-react";

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
    // TODO: image, preferences, and speech props
    const { name } = this.props;
    const { color, selected } = this.state;
    return (
      <Card color={color}>
        <Card.Content>
          <Image floated="right" size="mini" />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            Preferences:
            <ol>
              {/* TODO */}
              {/* <li>{preferences[0]}</li>
              <li>{preferences[1]}</li>
              <li>{preferences[2]}</li> */}
            </ol>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Radio
            value={name}
            onChange={this.handleSelect}
            checked={selected}
          ></Radio>
        </Card.Content>
      </Card>
    );
  }
}

export default Candidate;
