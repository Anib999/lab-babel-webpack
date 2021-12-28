import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
// import SerchBar from './SerchBar'
import UserBar from './UserBar'
import Notification from './Notification'

const NavBar = (props) => {
  const { sideGo } = props
  return (
    <NavBarContainer>

      <Row justify="space-between">
        <Col>
          {/* <SerchBar></SerchBar> */}
          <h2 className={sideGo} style={{ color: '#232324' }}>CareLab Inventory Management System</h2>
        </Col>

        <Col className='costomeCol'>
          <Notification />
          <UserBar></UserBar>
        </Col>
      </Row>

    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.div`
/*  padding: 20px; */
  padding: 15px;
  cursor: pointer;
  background-color: #fefefe;

  position: fixed;
  z-index: 99;
  width: 100%;
  box-shadow: 0 2px 22px 0 rgb(31 38 135 / 17%);

  @media(max-width: 500px){
    display: none;
  }
  .costomeCol{
    display: flex;
    gap: 20px;
    align-items: center;
  }
`