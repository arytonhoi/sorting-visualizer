import React from 'react';
import './SortingVisualizer.css';
import { mergeSort } from "../sortingAlgorithms/sortingAlgorithms"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  mergeSort() {
    let sortedArray = mergeSort(this.state.array);
    console.log(sortedArray);
    this.setState({ array: sortedArray });
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}>
          </div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
      </div>
    )
  }
}

