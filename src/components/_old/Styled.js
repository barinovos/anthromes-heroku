import styled from "styled-components";

export const Container = styled.div.attrs({
  style: ({ x, y }) => ({ backgroundPosition: `${x}% ${y}%`})
})`
  height: calc(100% - 70px);
  width: 100%;
  background-image: url('/example.jpg');
  background-size: auto;
  background-repeat: no-repeat;
`;
