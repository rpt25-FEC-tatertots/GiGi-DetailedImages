import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    const { images } = this.state;
    let display = images.map(image => {
      console.log(image)
      return <img src={`https://${image}`}></img>
      // return <img src={image}></img>
    })
    return (
      <div>
        <h1>Detailed Images</h1>
        {display}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('detailed-images'));