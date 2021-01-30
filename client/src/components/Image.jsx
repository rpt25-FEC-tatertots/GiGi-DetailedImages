import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  /* height: 50%; */
  max-width: 100%;
  max-height: 100%;
  padding: 15px;
  border-radius: 20px;
`
const Video = styled.video`
  /* height: 50%; */
  max-width: 100%;
  max-height: 100%;
  padding: 15px;
  border-radius: 20px;
`
const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  overflow: hidden;
`

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    let test = images.map((image, index) => {
      if (index < 4) {
        return (
          <Picture src={`https://${image}`} alt="" key={index} /> 
        )
      } else {
        return (
          <Video
            muted
            loop='true'
            autoPlay='true'
            src={`https://${image}`}
            key={index}
          />
        )
      }
    })

    return (
      <Wrapper>
        {test}
      </Wrapper>
    )
  };
};

export default Image;
