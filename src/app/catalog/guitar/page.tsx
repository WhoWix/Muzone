'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fdfcfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.h1`
  color: #d67d61;

  font-size: 60px;

  font-weight: 700;
`;

export const ParentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export const Block1 = styled.div`
  background-color: #f3adad;
  min-width: 400px;
  min-height: 390px;
  border-radius: 16px;
`;

export const Block2 = styled.div`
  background-color: #f3adad;
  width: 400px;
  height: 390px;

  border-radius: 16px;
`;

export const Block3 = styled.div`
  background-color: #f3adad;
  min-width: 400px;
  min-height: 390px;

  border-radius: 16px;
`;

const Guitar = () => {
  return (
    <Wrapper>
      <Title>Гитары</Title>

      <ParentBlock>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
      </ParentBlock>
    </Wrapper>
  );
};
export default Guitar;
