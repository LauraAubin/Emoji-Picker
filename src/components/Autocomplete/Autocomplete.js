import React from 'react';
import { TextField, Stack } from '@shopify/polaris';

//exports to all of application
export default class Autocomplete extends React.Component {
  // state = object
  state = {
    value: '',
  };

  handleClick = (value) => {
    this.setState({value}); //value: value
    console.log(this.state.value);
  }

  render() {
    return (
      <Stack vertical>
        <TextField
          placeholder="Search"
          value={this.state.value}
          onChange={this.handleClick}
        />
      </Stack>
    );
  }
}
