import styled from 'styled-components';

const color = '#C7C7C7';

export const Wrapper = styled.div`
  position: fixed;
  right: 31px;
  top: 91px;
  height: 56px;
  width: 28px;
  background: white;
  border-radius: 2px;
  border: 1px solid ${color};
  z-index: 100;
`;

export const Button = styled.button`
  height: 27px;
  width: 28px;
  background: white;
  border: 0;
  padding: 5px;
  line-height: 15px;
  color: ${color};
  font-size: 21px;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  &:first-child {
    border-bottom: 1px solid ${color};
  }
`;
