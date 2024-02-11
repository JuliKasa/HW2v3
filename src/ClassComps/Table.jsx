import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%'
    };
  }

  chnWidth = () => {
    this.setState({ width: '50%' });
  };

  chnSecWidth = () => {
    this.setState({ width: '100%' });
  }

  render() {
    return (
      <>
        <p style={{ fontSize: '200%', fontWeight: 'bold' }}>Q3</p>

        <div id="divTable" style={{ border: 'solid orange 2px' }}>
          <table style={{ width: this.state.width, borderCollapse: 'collapse' }}
           onClick={this.chnWidth}
           onDoubleClick={this.chnSecWidth}>
            <tbody>
              <tr>
                <th style={{ backgroundColor: 'lightblue', color: 'white', padding: '10px' }}>Column 1</th>
                <th style={{ backgroundColor: 'lightblue', color: 'white', padding: '10px' }}>Column 2</th>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 1, Cell 1</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 1, Cell 2</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 2, Cell 1</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 2, Cell 2</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 3, Cell 1</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Row 3, Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
