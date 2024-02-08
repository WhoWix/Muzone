import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('images/banner.jpg');

  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;

  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;
`;

export const Subtitle = styled.p`
  text-align: center;

  color: white;

  font-size: 30px;
  text-transform: uppercase;
  z-index: 2;
`;

const Arrow = styled.img`
  transform: translate(-50%, 0);
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: block;
`;

export const Main = () => {
  return (
    <Wrapper>
      <Title>Лучшие инструменты</Title>
      <Subtitle>
        Для тех, кто ценит каждую ноту
        <br />
        своего музыкального пути
      </Subtitle>
      <Arrow src="images/chevron-down.svg" alt="" />
    </Wrapper>
  );
};
