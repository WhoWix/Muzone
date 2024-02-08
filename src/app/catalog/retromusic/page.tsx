'use client';
import styled from 'styled-components';
import {
  Block1,
  Block2,
  Block3,
  ParentBlock,
  Title,
  Wrapper,
} from '../guitar/page';
import Link from 'next/link';

const Subtitle = styled.p`
  color: #fff;

  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 2px;
`;

const ImgBlock = styled.img`
  border-radius: 15px 15px 15px 15px;
  margin: 5px;
`;

const Retro = () => {
  return (
    <Wrapper>
      <Title>Винилы и винтаж</Title>

      <ParentBlock>
        <Block1>
          <Link href="/catalog/playvinilAudioTechnicaATLP120XUSBBlack">
            <ImgBlock src="/images/Retro/proigrivatel.jpg" alt="" />
          </Link>

          <Subtitle>
            Проигрыватель винила
            <br />
            Audio-Technica <br /> AT-LP120XUSB Black
          </Subtitle>
        </Block1>

        <Block2>
          <Link href="/catalog/viniljaMichaelJacksonXscape">
            <ImgBlock src="/images/Retro/Michael.jpg" alt="" />
          </Link>
          <Subtitle>
            Пластинка
            <br />
            Michael Jackson - Xscape
          </Subtitle>
        </Block2>

        <Block3>
          <Link href="/catalog/viniltimekinonum1">
            <ImgBlock src="/images/Retro/timeoclockebat.jpg" alt="" />
          </Link>
          <Subtitle>
            Часы из виниловой <br /> пластинки - Кино
          </Subtitle>
        </Block3>
      </ParentBlock>
    </Wrapper>
  );
};
export default Retro;
