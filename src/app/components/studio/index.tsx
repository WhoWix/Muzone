import styled from 'styled-components';
import { Subtitle, Title } from '../main';
import Link from 'next/link';
import { Cards } from './cards';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px;
`;

const Video = styled.video`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  object-fit: cover;
  z-index: -1;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #fee1c6;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  border-radius: 100px;
  padding: 15px 40px;
  background: #d8946f;
  border: none;
`;

export const Studio = () => {
  return (
    <Wrapper>
      <Video src="./video/studio.mp4" muted autoPlay loop />

      <StyledWrapper>
        <Title>О магазине</Title>
        <Subtitle>
          Добро пожаловать в "muzone"- ваш идеальный партнер <br /> в мире
          музыкальных инструментов! ОТ КАЧЕСТВЕННЫХ ИНСТРУМЕНТОВ РУЧНОЙ РАБОТЫ
          <br /> ДО ПЕРЕДОВЫХ ЭЛЕКТРОИНСТРУМЕНТОВ, МЫ ПРЕДЛАГАЕМ ШИРОКИЙ
          АССОРТИМЕНТ ДЛЯ ЛЮБИТЕЛЕЙ <br />И ПРОФИ. НАШ МАГАЗИН - ЭТО НЕ ПРОСТО
          МЕСТО ПОКУПОК, ЭТО ПЛОЩАДКА
          <br /> ДЛЯ ВОПЛОЩЕНИЯ ВАШИХ ТВОРЧЕСКИХ ИДЕЙ В ЖИЗНЬ.
        </Subtitle>
      </StyledWrapper>

      <StyledLink href="/catalog"> Перейти в каталог</StyledLink>

      <Cards />
    </Wrapper>
  );
};
