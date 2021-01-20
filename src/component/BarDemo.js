import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Data from '../data/data.json';

export default class BarDemo extends Component {
  render() {
    return (
      <div>
        <h2>Waste (4 month)</h2>
        <Bar
          data={Data}
          width={100}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }

}