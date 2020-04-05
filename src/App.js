import React, { Component } from 'react';
import './App.css';

const API = 'https://api.randomuser.me/?nat=US&results=5'
// const DEFAULT_QUERY = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ results: data.results }))
      .catch(err => console.error(`There has been an error with your fetch operation ${err.message}`));
  }

  render() {
    const { results } = this.state;
    const staticResults = results;
    return (
      <ul>
        {staticResults.map(result =>
          <li key={result.id.value}>
            <ul>
              <li>{`${result.name.last}, ${result.name.first}`}</li>
              <li>{result.email}</li>
              <br></br>
            </ul>
          </li>
        )}
      </ul>
    );
  }

}
  
// const Headline = ({ dummyData }) => {
//   console.log({dummyData})
//   return (
//     dummyData.map(items => 
//       <p>{items.results}</p>
//     )
//   )
// }

 

export default App;
