import { Button } from 'antd/lib/radio'
import React from 'react'
import styled from 'styled-components'

const AppButton = (props) => {
  return (
    <AppButtonContainer>
    { props.primaryBtn && 
      <Button className='primary-btn' shape="circle" onClick={props.buttonOnClick}>
        {props.buttonTitle}
      </Button>
    }
    { props.priamryOutlineBtn && 
      <Button className='primary-btn-outline' shape="circle" onClick={props.buttonOnClick}>
        {props.buttonTitle}
      </Button>
    }
      {/* 
      <Button className='primary-btn-outline' shape="circle" onClick={props.buttonOnClick}>
        {props.buttonTitle}
      </Button> */}
    </AppButtonContainer>
  )
}

export default AppButton

const AppButtonContainer = styled.div`
  .primary-btn{
    background-color: #1890ff;
    color: #fefefe;
    border-radius: 30px!important;
    width: auto;
    min-height: 36PX;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 0 10px;
    letter-spacing: 1px;
    justify-content: center;
    font-weight: 400;
    border: 2px solid #1890ff;
    &:hover{
      background-color: transparent;
      color: #1890ff;
      border: 2px solid #1890ff;
    }
  }
  .primary-btn-outline{
    background-color: transparent;
    color: #e95b29;
    border-radius: 30px!important;
    widtautoh
    min-height: 36PX;
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 400;
    border: 2px solid #e95b29;
    &:hover{
      background-color:  #e95b29;
      color: #fefefe;
      border: 2px solid#e95b29;
    }
  }
`
