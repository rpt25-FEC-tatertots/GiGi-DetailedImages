import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Image from './components/Image.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
    this.getProductImages = this.getProductImages.bind(this);
  }

  getProductImages() {

    axios.get(`/photos?product_id=${1}`)
      .then(response => this.setState({ images: response.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getProductImages();
  }

  render() {
    return (
      <div>
        <h1>Detailed Images</h1>
        <Image images={this.state.images}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('detailed-images'));