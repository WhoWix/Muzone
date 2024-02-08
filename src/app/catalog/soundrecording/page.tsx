'use client';

import { Block1, Block2, Block3, ParentBlock, Title, Wrapper } from "../guitar/page";

const Record = () => {
  return (
    <Wrapper>
      <Title>Все для записи звука</Title>

      <ParentBlock>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
      </ParentBlock>
    </Wrapper>
  );
};
export default Record;
