import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 0.9rem;
  padding: 0 1.5em;
  color: white;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const bottomCss = css`
  position: absolute;
  bottom: 0.7em;
  left: 7em;
  text-align: left;

  @media (min-width: 768px) {
    bottom: 1.4em;
    left: 5em;
  }
`

export const BigText = styled.p`
  margin: 0.5em 0;
  text-align: center;

  ${props => props.bottom && bottomCss}
`

export const Bold = styled.span`
  font-weight: 700;
`

export const PinIcon = styled.img`
  margin-right: 0.7em;
  position: relative;
  top: .25em;
`
