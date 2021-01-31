import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { FaSistrix } from 'react-icons/fa';

const Icon = styled.div`
  opacity: 0;
  transition: opacity .3s cubic-bezier(.235,0,.05,.95);
  background-color: rgb(255 255 255 / .2);
  border-radius: 1000px;
  font-weight: bold;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  left: calc(50%);
  top: calc(50%);
  /* &&:hover {
    opacity: 1;
  } */
  `

const Picture = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 1s,transform 1s cubic-bezier(.395,.005,.19,1),filter 1s;
  overflow: hidden;

  &&:hover {
    transform: scale(1.05);
  }
`
const Video = styled.video`
  /* max-width: 50%; */
  width: 50%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 5px 10px 5px;
  width: 100%;
  flex: 1 0 40%;
  &&:hover ${Icon} {
    opacity: 1;
  }
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
          <Container>
            <Icon><FaSistrix size='1.25rem' fontWeight='bold' background='transparent'/></Icon>
            <Picture src={`https://${image}`} alt="" key={index} />
          </Container>
        )
      } else {
        return (
          <Container>
            <Video
              muted
              loop='true'
              autoPlay='true'
              src={`https://${image}`}
              key={index}
            />
          </Container>
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

