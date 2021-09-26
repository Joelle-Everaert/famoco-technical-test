import React from 'react'
import styled from 'styled-components'
import logo from '../../../image/zelda.png'

const NavStyle = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
`
const Title = styled.h1`
  display: flex;
  text-align: center;
  margin: 50px 0 40px 0;
`

const NavBar = () => {
  return (
    <NavStyle>
      <Title>Welcome to the World of Zelda</Title>
    </NavStyle>
  )
}

export default NavBar
