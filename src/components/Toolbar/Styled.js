import styled from 'styled-components'

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