import React, { Component } from "react";
import { AppBar, List, ListItem, Divider, FontIcon } from "material-ui";

export default class Countrer extends Component {
  constructor() {
    super();
  }

  render() {
    const iconStyles = {
      marginTop: 12,
      marginRight: 24,
      marginLeft: "auto",
    };

    return (
      <div>
        <AppBar title="React Boilerplate" iconElementRight={<FontIcon className="fa fa-github" style={iconStyles} color={"#fff"} />} />
        <List>
          <ListItem primaryText={this.props.count.toString()} />
          <Divider />
          <ListItem primaryText="+1" onClick={() => this.props.dispatch("increment", 1)} rightIcon={<FontIcon className="muidocs-icon-custom-github" style={iconStyles} />}/>
          <Divider />
          <ListItem primaryText="-1" onClick={() => this.props.dispatch("decrement", 1)} />
          <Divider />
          <ListItem primaryText="+100" onClick={() => this.props.dispatch("increment", 100)} />
          <Divider />
          <ListItem primaryText="-100" onClick={() => this.props.dispatch("decrement", 100)} />
          <Divider />
        </List>
      </div>
    );
  }
}
