import styled, { css } from 'styled-components';
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  position: fixed;
  right: 31px;
  top: 91px;
  height: 76px;
  width: 28px;
  z-index: 100;
  overflow: hidden;
`;

const border = `1px solid ${colors.darkGrey}`

const topBorder = css`
  border-radius: 3px 3px 0 0;
  border: ${border};
`

const bottomBorder = css`
  border-radius: 0 0 3px 3px;
  border-left: ${border};
  border-bottom: ${border};
  border-right: ${border};
`

export const Button = styled.button`
  height: 27px;
  width: 28px;
  background: white;
  padding: 5px;
  line-height: 15px;
  color: #979797;
  font-size: 21px;
  cursor: pointer;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
  
  ${props => props.top ? topBorder : bottomBorder}
`;

export const Value = styled.div`
  font-size: 11px;
  line-height: 12px;
  background: ${colors.darkGrey};
  text-align: center;
  color: white;
  opacity: .7;
  margin-top: 5px;
`