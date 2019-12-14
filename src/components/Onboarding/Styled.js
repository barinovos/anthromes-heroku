import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 11111;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

const topCss = css`
  position: absolute;
  top: 60px;
  left: 60px;

  z-index: 99999 !important;
`

export const BigText = styled.p`
  margin: 0.5em 0;
  text-align: center;
  color: black;
  z-index: 222222;
  font-size: 0.9rem;
  padding: 0 1.5em;

  ${props => props.bottom && bottomCss}
  ${props => props.top && topCss}
`

export const Bold = styled.span`
  font-weight: 700;
`
export const NumberText = styled.p`
  color: white;
`

export const PinIcon = styled.img`
  margin-right: 0.7em;
  position: relative;
  top: 0.25em;
`
const bottomOverlay = css`
  margin-bottom: 65px;
`

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5em;
  ${props => props.bottom && bottomOverlay}
`
export const PageNumber = styled.p`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  background-color: red;
  width: 23px;
  height: 23px;
  border-radius: 50%;
`
export const Pagination = styled.div`
  background: rgb(86, 145, 210);
  padding: 8px 15px 9px 13px;
  border-radius: 4px;
  font-size: 0.7rem;
  color: white;
  height: 35px;
  width: 64px;
  margin-right: 15px;
  font-size: 18px;
  cursor: pointer;
`
export const OnboardingTwoModal = styled.div`
  z-index: 1111 !important;
  padding-bottom: 2rem;
  align-items: center;
  background-color: white;
  padding-left: 1em;
  border-radius: 3px;
  -moz-box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);
  -webkit-box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);
  box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);
`

export const OnboardingFourModal = styled.div`
  z-index: 1111 !important;
  padding-bottom: 2rem;
  align-items: center;
  background-color: white;
  padding-left: 1em;
  border-radius: 3px;
  -moz-box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);
  -webkit-box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);
  box-shadow: 3px 3px 9px 3px rgba(135, 135, 135, 0.5);

  @media (max-width: 768px) {
    width: 100%;
  }
`

const bottomModal = css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

export const OnboardingThreeModal = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1111 !important;
  align-items: center;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 65px;
  width: 400px;
  height: 325.5px;
  -moz-box-shadow: 3px -9px 9px 3px rgba(135, 135, 135, 0.5);
  -webkit-box-shadow: 3px -9px 9px 3px rgba(135, 135, 135, 0.5);
  box-shadow: 3px -9px 9px 3px rgba(135, 135, 135, 0.5);
  ${props => props.bottom && bottomModal}
`
export const LinksArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  & > a {
    text-decoration: none;
  }
`
export const OnboardingModal = styled.div`
  position: fixed;
  top: 50;
  left: 50;
  bottom: 50;
  right: 50;
  min-height: 150px;
  width: 445px;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding-left: 24px;
  padding-top: 21px;
  z-index: 11111;
  overflow: hidden;

  & > a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 25%;
    padding-left: 0;
    padding-top: 0.45em;
  }
  @media (max-width: 375px) {
    height: 30%;
  }
`

export const Wizard = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60%;
  margin-left: auto;
  margin-right: auto;
`
