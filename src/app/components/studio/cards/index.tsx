import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  z-index: 2;
`;

const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

const SecondBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

const Image1 = styled.img`
  width: 300px;
  border-radius: 15px;
`;

const Image3 = styled.img`
  width: 900px;
  border-radius: 30px;
`;

const Image4 = styled.img`
  width: 300px;
  border-radius: 15px;
`;
export const Cards = () => {
  return (
    <Wrapper>
      <FirstBlock>
        <Link href="/catalog/retromusic">
          <Image1 src="./images/Recommendations/vinil3.jpg" alt="" />
        </Link>
        <Link href="/catalog/synthesizers">
          <Image1 src="./images/Recommendations/piano.jpg" alt="" />
        </Link>
      </FirstBlock>

      <Link href="/catalog/soundrecording">
        <Image3 src="./images/Recommendations/Mic.jpg" alt="" />
      </Link>

      <SecondBlock>
        <Link href="/catalog/listeners">
          <Image4 src="./images/Recommendations/headfhones.jpg" alt="" />
        </Link>
        <Link href="/catalog/guitar">
          <Image4 src="./images/Recommendations/guitar.jpg" alt="" />
        </Link>
      </SecondBlock>
    </Wrapper>
  );
};
