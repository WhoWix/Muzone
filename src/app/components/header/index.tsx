import styled from 'styled-components';
import { Logo } from '../../../../public/images/logo';
import Link from 'next/link';

const Wrapper = styled.header`
  display: flex;
  align-items: center;

  justify-content: space-between;
  background-color: white;

  margin: 0px 40px 0px 40px;
  padding: 10px 0px 10px 0px;

  z-index: 2;
`;

const List = styled.ul`
  display: flex;
  gap: 34px;

  padding: 6px;

  list-style: none;
`;

const StyledLink = styled(Link)`
  font-size: 20px;

  color: #d8946f;

  text-decoration: none;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;

  padding: 6px;
`;

const StyledSearchForm = styled.input`
  font-size: 18px;

  background: #d9d9d9;
  outline-color: #d8946f;
  color: #d8946f;

  padding: 6px 10px 6px 10px;

  border: none;
  border-radius: 50px;

  width: 320px;
  height: 30px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  gap: 60px;
`;

const Autorization = styled.div`
  display: flex;
  gap: 34px;

  padding: 6px;
`;

const StyledButton = styled.button`
  color: #d8946f;
  font-size: 20px;
  border: none;
  background-color: transparent;
`;

const SearchButton = styled.button`
  font-size: 16px;
  border-radius: 50px;
  background: #d8946f;

  padding: 12px 20px;
  flex-shrink: 0;
  border: none;
  color: #fffcfb;
`;

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo />

        <List>
          <li>
            <StyledLink href="/">Главная</StyledLink>
          </li>

          <li>
            <StyledLink href="/about">О магазине</StyledLink>
          </li>

          <li>
            <StyledLink href="/catalog">Каталог</StyledLink>
          </li>
        </List>

        <Search>
          <StyledForm>
            <StyledSearchForm type="text" />
            <SearchButton>Поиск</SearchButton>
          </StyledForm>

          <Autorization>
            <StyledButton>Регистрация</StyledButton>
            <StyledButton>Вход</StyledButton>
          </Autorization>
        </Search>
      </Wrapper>
    </>
  );
};
