import React from 'react';
import { Count } from './SampleData';
export class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      Text: 'Deva',
      Status: true,
    };
  }
  changename() {
    if (this.state.Status === false) {
      this.setState({ Status: true });
      this.setState({ Text: 'Deva' });
    } else {
      this.setState({ Status: false });
      this.setState({ Text: 'Roy' });
    }
  }
  namechange() {
    this.setState({ Text: 'deva' });
  }
  render() {
    return (
      <div style={{ margin: '50px' }}>
        test data
        <Count
          roy="55"
          text={this.state.Text}
          changename={this.changename.bind(this)}
          namechange={this.namechange.bind(this)}
        />
      </div>
    );
  }
}
