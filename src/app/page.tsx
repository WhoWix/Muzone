'use client';
import styled from 'styled-components';
import { Main } from './components/main';
import { Studio } from './components/studio';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Main />

      <Studio />
    </Wrapper>
  );
};
export default Home;
