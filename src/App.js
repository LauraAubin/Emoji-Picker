import React, { Component } from 'react';
import { Page, Card } from '@shopify/polaris';

class App extends Component {
  render() {
    return (
      <Page title="Emoji Picker">
        <Card title="Emojis are the best 🎉">
          <Card.Section>
            This is gonna be niiiiiice!!
          </Card.Section>
        </Card>
      </Page>
    );
  }
}

export default App;
