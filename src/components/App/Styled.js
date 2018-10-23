import styled from "styled-components";

const fontColor = '#3A3A3A';

export const Navbar = styled.div`
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
  box-shadow: 0 2px 7px lightgrey;
`;

export const NavbarText = styled.div`
  color: ${fontColor};
  font-size: 18px;
  cursor: pointer;
`;
