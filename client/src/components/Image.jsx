import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { FaSistrix } from 'react-icons/fa';

//search icon
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
`
//counter when screen is sized down
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
  font-size: 13px;
  line-height: 24px;
  z-index: 1;

`
//images of the product
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 1s,transform 1s cubic-bezier(.395,.005,.19,1),filter 1s;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`
//mp4 video of the product
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
//outermost div
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
//wraps img only
const ImgContainer = styled.div`
  border-radius: 5px;
  display: flex;
  flex: 1 0 40%;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 10px;
  &&:hover ${Icon} {
    opacity: 1;
  }
`
//video container
const VideoContainer = styled(ImgContainer)`
  justify-content: left;
`

//img hover only
const ImgHoverContainer = styled.div`
  position: absolute;
  z-index: 5;
  display: grid;
  /* grid-template-rows: 5fr 1fr; */
  &&:hover ${Icon} {
    opacity: 1;
  }
`
//svg only
const SVGContainer = styled.div`
  position: flex;
  align-items: center;
  justify-content: center;
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

    const oneImg = 
      <ImgContainer>
        <Picture src={`https://${images[0]}`} alt="" key={0}/>
          <ImgHoverContainer>
            <SVGContainer>
              <Icon><FaSistrix size='1.25rem' fontWeight='bold' background='transparent' /></Icon>
            </SVGContainer>
          </ImgHoverContainer>
          <Counter>1/{images.length}</Counter>
      </ImgContainer>

    const allImgs = images.map((image, index) => {
      if (index < 4 && this.state.windowSize > 768) {
        return (
          <ImgContainer>
            <Picture src={`https://${image}`} alt="" key={index}/>
              <ImgHoverContainer>
                <SVGContainer>
                  <Icon><FaSistrix size='1.25rem' fontWeight='bold' background='transparent' /></Icon>
                </SVGContainer>
              </ImgHoverContainer>
          </ImgContainer>
        )
      } else {
        return (
          <VideoContainer>
            <Video
              muted
              loop={true}
              autoPlay={true}
              src={`https://${image}`}
              key={index}
            />
          </VideoContainer>
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

