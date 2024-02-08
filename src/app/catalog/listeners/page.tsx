'use client';

import { Block1, Block2, Block3, ParentBlock, Title, Wrapper } from "../guitar/page";

const Listeners = () => {
  return (
    <Wrapper>
      <Title>Для слушателей</Title>

      <ParentBlock>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
      </ParentBlock>
    </Wrapper>
  );
};

export default Listeners;
