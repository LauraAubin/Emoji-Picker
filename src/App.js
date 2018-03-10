import React, { Component } from 'react';
import { Page, Card } from '@shopify/polaris';

import Autocomplete from './components/Autocomplete/';

class App extends Component {
  render() {
    return (
      <Page title="Emoji Picker">
        <Card title="Emojis are the best 🎉">
          <Card.Section>
            <Autocomplete />
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

export default App;
