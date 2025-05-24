import React from "react";
import styled, { keyframes } from "styled-components";
import abcImage from "../../public/abc.jpg"; // Ensure abc.jpg is in your src/ folder or adjust the path

// Animation for a gentle zoom-in effect
const zoomIn = keyframes`
  from {
    transform: scale(0.9) rotate(-2deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

const PhotoFrame = styled.div`
  display: inline-block;
  padding: 16px;
  border-radius: 24px;
  background: linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%);
  box-shadow: 0 8px 24px rgba(67, 198, 172, 0.15);
  margin: 40px auto;
  animation: ${zoomIn} 1s cubic-bezier(0.23, 1, 0.32, 1);
`;

const AnimatedPhoto = styled.img`
  display: block;
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  border: 6px solid #fff;
  box-shadow: 0 4px 16px rgba(67, 198, 172, 0.12);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s;
  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 8px 32px rgba(67, 198, 172, 0.25);
  }
`;

const PhotoDecorate = () => (
  <PhotoFrame>
    <AnimatedPhoto src={abcImage} alt="Decorated" />
  </PhotoFrame>
);

export default PhotoDecorate;
