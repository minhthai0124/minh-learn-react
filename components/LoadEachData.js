import React from 'react';
import axios from 'axios';

class LoadEachData extends React.Component {

  constructor (props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);

    this.state = {
      quote: {}
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote () {
    axios.get('https://jsonplaceholder.typicode.com/users', )
        .then(response => {
        console.log(response.data[0])
        this.setState({
            quote: response.data[0]
        });
    })
  }

  render() {
    return (
      <div>
            <h1>{this.state.quote.name}</h1>
            <p>{this.state.quote.email}</p>
            <button onClick={this.getQuote}>next</button>
      </div>     
    );
  }
}

export default LoadEachData