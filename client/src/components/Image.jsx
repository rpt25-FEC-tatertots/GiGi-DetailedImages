import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { FaSistrix } from 'react-icons/fa';

const Icon = styled.div`
  opacity: 0;
  transition: opacity .3s cubic-bezier(.235,0,.05,.95);
  background-color: rgb(255 255 255 / 0.4);
  border-radius: 1000px;
  font-weight: bold;
  width: 3.1rem;
  height: 3.1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  left: calc(50%);
  top: calc(50%);
`

const Icon1 = styled(Icon)`
  position: absolute;
`
const Counter = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #fff;
  height: 24px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 12px;
  padding: 0 12px;
  font-size: 12px;
  line-height: 24px;
  z-index: 1;
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
  width: 50%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`
//wraps the entire images and mp4 section
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
  &&:hover ${Icon1} {
    opacity: 1;
  }
`

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: window.innerWidth
    }
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ windowSize: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', null);
  }

  render() {
    const { images } = this.props;
    const { windowSize } = this.state;

    let oneImg = <Container>
      <Icon1><FaSistrix size='1.25rem' fontWeight='bold' background='transparent' /></Icon1>
      <Picture src={`https://${images[0]}`} alt="" />
      <Counter>1/{images.length}</Counter>
    </Container>

    let allImgs = images.map((image, index) => {
      if (index < 4 && this.state.windowSize > 768) {
        return (
          <Container>
            <Icon><FaSistrix size='1.25rem' fontWeight='bold' background='transparent' /></Icon>
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

    let display = '';
    windowSize > 768 ? display = allImgs : display = oneImg;

    return (
      <Wrapper>
        {display}
      </Wrapper>
    )
  };
};

export default Image;

