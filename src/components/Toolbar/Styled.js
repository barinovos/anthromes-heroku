import styled from 'styled-components'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  box-shadow: 0 2px 7px lightgrey;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`

export const LinksArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  ${props => props.withMargin && 'margin-right: 1em'};

  & > a {
    text-decoration: none;
  }
`

export const Logo = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const Slider = styled.input.attrs({ type: 'range' })`
  border: none;
  width: ${props => props.width[0] || 140}px;
  flex-basis: 50%;
  -webkit-appearance: none;
  cursor: pointer;

  @media (min-width: 768px) {
    width: ${props => props.width[1] || 200}px;
    flex-basis: auto;
    margin: 0 1.2em;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${props => props.height || 5}px;
    background: ${colors.blue};
    border: none;
    border-radius: ${props => props.height || 5}px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${colors.white};
    margin-top: -5px;
    cursor: pointer;
    box-shadow: 0 0 2px ${colors.darkGrey};
  }

  &:focus {
    outline: none;
  }

  &::-moz-range-track {
    width: 100%;
    height: ${props => props.height || 5}px;
    background: ${colors.lightGrey};
    border: none;
    border-radius: ${props => props.height || 5}px;
  }

  &::-moz-range-thumb {
    border: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${colors.white};
    cursor: pointer;
  }

  &::-moz-range-progress {
    background: ${colors.blue};
  }

  &:-moz-focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  &:focus::-moz-range-track {
    background: #ccc;
  }

  &::-ms-track {
    width: 100%;
    height: ${props => props.height || 5}px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${colors.blue};
    border-radius: 10px;
  }

  &::-ms-fill-upper {
    background: ${colors.superLightGrey};
    border-radius: 10px;
  }

  &::-ms-thumb {
    border: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${colors.white};
    cursor: pointer;
  }

  &:focus::-ms-fill-lower {
    background: ${colors.blue};
  }

  &:focus::-ms-fill-upper {
    background: #ccc;
  }

  &::-ms-tooltip {
    display: none;
  }
`

export const BtnContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 25px;
  margin-right: 0.5em;
  position: relative;
`

export const BtnMenu = styled.div`
  position: absolute;
  z-index: 10000;
  background: white;
  top: 46px;
  right: -8px;
  padding: 0.5em 1em;
  display: block;
`

export const Bar = styled.div`
  width: 25px;
  height: 2px;
  background-color: ${colors.darkGrey};
  margin: 6px 0;
  transition: 0.4s;
  
  ${props => props.open && props.bar1 && `transform: rotate(-45deg) translate(-7px, 6px);`}
  ${props => props.open && props.bar2 && `opacity: 0;`}
  ${props => props.open && props.bar3 && `transform: rotate(45deg) translate(-5px, -5px);`}
`
