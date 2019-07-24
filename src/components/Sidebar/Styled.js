import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  // background: lightgrey;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
  box-shadow: 0 2px 7px lightgrey;
`

export const LinksArea = styled.div`
  display: flex;

  & > a {
    text-decoration: none;
  }
`
