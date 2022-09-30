import React from 'react';
import home1 from '../img/home1.png'
import styled from 'styled-components';

export function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photograph or videography ideas that you have.</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with camera"/>
            </Image>

        </About>
    )
}


//Styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;

`