'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d9a97e;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 60px;
  z-index: 2;
`;
const SubTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
`;
const About = () => {
  return (
    <Wrapper>
      <Title>О магазине</Title>
    </Wrapper>
  );
};

export default About;
