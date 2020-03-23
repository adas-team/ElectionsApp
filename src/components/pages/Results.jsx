import _ from "lodash";
import { resultCards } from "../constants";
import style from "styled-components";
import React, { Component, Fragment } from "react";
import { Card, Divider, Image, Placeholder } from "semantic-ui-react";

const ResultsHeader = style.h1`
  font-size: 80px !important;
  text-align: center;
`;

const Subheader = style.h2`
  text-align: center;
  padding-bottom: 30px;
`;

const PlaceholderContainer = style(Placeholder)`
  max-width: 500px !important;
  height: 400px !important;
`;

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  handleLoadingClick = () => {
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 3000);
  };

  render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <ResultsHeader>Results</ResultsHeader>
        <Subheader>
          We're still counting. Come back soon to see the new executive team for
          2020-21!
        </Subheader>
        <Divider />

        <Card.Group doubling itemsPerRow={5} stackable>
          {_.map(resultCards, card => (
            <Card key={card.header}>
              {loading ? (
                <PlaceholderContainer>
                  <Placeholder.Image square />
                </PlaceholderContainer>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="medium" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
    );
  }
}

export default Results;
