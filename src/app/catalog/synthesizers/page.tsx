"use client"
import styled from 'styled-components';
import { ParentBlock, Title, Wrapper } from '../guitar/page';


const Block1 = styled.div`
  background-color: #f3adad;
  min-width: 400px;
  min-height: 390px;
  grid-area: 1 / 2 / 2 / 2;
  border-radius: 15px;
`;
const Block2 = styled.div`
  background-color: #f3adad;
  width: 400px;
  height: 390px;
  grid-area: 1 / 3 / 3 / 4;
  border-radius: 15px;
`;

const Block3 = styled.div`
  background-color: #f3adad;
  min-width: 400px;
  min-height: 390px;
  grid-area: 1 / 4/ 2 / 5;
  border-radius: 15px;
`;

const Sinth = () => {
  return (
    <Wrapper>
      <Title>Клавишные инструменты</Title>

      <ParentBlock>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
      </ParentBlock>
    </Wrapper>
  );
};
export default Sinth;
