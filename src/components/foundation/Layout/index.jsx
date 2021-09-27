import React from 'react'
import styled from 'styled-components'
import logo from '../../../image/zelda.png'

const NavStyle = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  display: flex;
  text-align: center;
  margin: 0;
`

const NavBar = () => {
  return (
    <NavStyle>
      <img src={logo} alt='Zelda' />
      <Title>Welcome to the World of Zelda</Title>
    </NavStyle>
  )
}

export default NavBar
