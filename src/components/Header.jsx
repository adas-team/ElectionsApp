import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import AdaBotHead from "../assets/AdaBotHead.png";

const ACTIVE_ITEM_PATHS = {
  home: "/",
  candidates: "/candidates",
  results: "results"
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: undefined,
      activeItemPath: "",
      redirect: false
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      activeItemPath: ACTIVE_ITEM_PATHS[name],
      redirect: true
    });
  };

  render() {
    const { activeItem, redirect, activeItemPath } = this.state;

    if (redirect) {
      this.setState({ redirect: false });
      return <Redirect to={activeItemPath} />;
    }

    return (
      <Menu size="massive" stackable inverted>
        <Menu.Item href="https://adas-team.github.io/" target="_blank">
          <img src={AdaBotHead} alt="Ada's Bot Head" />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="candidates"
          active={activeItem === "candidates"}
          onClick={this.handleItemClick}
        >
          Candidates
        </Menu.Item>

        <Menu.Item
          name="results"
          active={activeItem === "results"}
          onClick={this.handleItemClick}
        >
          Results
        </Menu.Item>
        <Menu.Item
          position="right"
          href="https://github.com/adas-team/ElectionsApp"
          target="_blank"
        >
          {/* <img src={AdaBotHead} alt="Ada's Bot Head" /> */}
          <Icon name="github" size="large" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
