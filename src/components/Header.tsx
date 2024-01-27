import { useEffect,useState } from "react";

import {IoMoon, IoMoonOutline} from "react-icons/io5";
import styled from "styled-components";

import { Container } from "./Container";
const HeaderElement  = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled.p`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    //font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

const Header = () => {
  const [theme,setTheme] = useState("light");

  const toggleTheme = ()=> setTheme(theme ==="light" ? "dark" : "light");

  useEffect(()=>{
    document.body.setAttribute("data-theme",theme);
  },[theme]);
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Rick And Morty Characters</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme ==="light" ? (<IoMoonOutline size="14px"/>) : ( <IoMoon size="14px"/>)}
                   
            <span style={{marginLeft:"0.75rem"}}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;
