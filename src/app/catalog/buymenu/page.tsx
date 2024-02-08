"use client"
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  background-color: #d77d4d;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;
const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #cbcbcb;

  width: 1280px;
  height: 564px;
  margin-top: 77px;
  border-radius: 30px;
`;

const WrappImageCard = styled.img`
  display: flex;
  position: absolute;
  background: #f3adad;
  width: 800px;
  height: 534px;
  flex-shrink: 0;
  left: 14px;
  top: 14px;

  border-radius: 15px;
`;

const NameCardWrapper = styled.div`
  position: relative;
  margin-left: 858px;
`;
const NameInstrumentTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  top: 54px;

  color: #000;
`;
const ManufacturerInstrumentTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  top: 64px;

  color: #000;
`;
const NameIDInstrumentTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  top: 110px;

  color: #000;
`;
const ActualInstrumentTitle = styled.h1`
  font-weight: 700;
  font-size: 10px;
  position: absolute;
  top: 136px;
  color: #a1851e;
`;

const PriceInstrumentTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  position: absolute;
  top: 190px;
  color: #000;
`;
const ButtonShoppingCart = styled.button`
  border-radius: 15px;
  width: 150px;
  height: 50px;
  border: none;
  background: #c1843c;
  position: absolute;
  top: 243px;

  //Текст кнопки

  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #fee1c6;
`;
const ButtonShop = styled.button`
  border-radius: 15px;
  width: 150px;
  height: 50px;
  border: none;
  background: #d77d4d;
  position: absolute;
  top: 243px;
  left: 178px;

  //Текст кнопки

  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #fee1c6;
`;
const NameBriefInformation = styled.h1`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  top: 334px;
  color: #000;
`;
const BriefInformation = styled.p`
  font-weight: 400;
  font-size: 20px;
  position: absolute;
  top: 355px;
  color: #000;
`;

const PlayVinil = () => {
  return (
    <Wrapper>
      {/* Карточка с товараром */}

      <CardWrapper>
        <WrappImageCard src="./images/Card/VinilPlay.jpg" alt="" />
        <NameCardWrapper>
          <NameInstrumentTitle>Проигрыватель винила</NameInstrumentTitle>
          <ManufacturerInstrumentTitle>
            Audio-Technika
          </ManufacturerInstrumentTitle>
          <NameIDInstrumentTitle>AT-LP120XUSB Black</NameIDInstrumentTitle>
          <ActualInstrumentTitle>Сейчас в наличии</ActualInstrumentTitle>
          <PriceInstrumentTitle>49 999₽</PriceInstrumentTitle>
          <ButtonShoppingCart>В корзину</ButtonShoppingCart>
          <ButtonShop> Купить сейчас </ButtonShop>
          <NameBriefInformation>
            Краткая информация о товаре:
          </NameBriefInformation>
          <BriefInformation>
            Профессиональный проигрыватель <br />
            с прямым приводом, отключаемым фонокорректором, регулировкой <br />
            анти-скатывающей и возможностью подключения по USB для оцифровки
            аудиозаписей
          </BriefInformation>
        </NameCardWrapper>
      </CardWrapper>
      {/* Характеристики и Связь */}
    </Wrapper>
  );
};

export default PlayVinil;

const MainTittle = styled.h1``;

export const Vinil = () => {
  return (
    <MainTittle>
      Пластинка <br />
      Michael Jackson - Xscap
    </MainTittle>
  );
};

export const VinilTime = () => {
  return (
    <h1>
      Часы из виниловой <br /> пластинки - Кино
    </h1>
  );
};
