import React, { useState } from 'react';
import NavBar from '../Components/Common/NavBar';
import SideNav from '../Components/Common/SideNav'
import styled from 'styled-components'
import BottomNav from '../Components/Common/BottomNav';
import MobileNav from '../Components/Common/MobileNav';
import { Layout } from 'antd';

const { Content, Footer } = Layout;
const date = new Date();

const AppLayout = (props) => {
  const [Value, setValue] = useState();

  const statePass = (val) => {
    setValue(val);
  }

  return (
    <MainAppContentComponentContainer>
      <Layout className="mainLayout" id="app-layout">
        <Layout>
          <SideNav statePass={statePass}></SideNav>
          <Layout className="main-app-layout">
            <NavBar sideGo={Value === true ? 'customContent2' : 'customContent1'}></NavBar>
            <MobileNav />
            {props?.secondaryNav && props?.secondaryNavigation}
            <Content className={Value === true ? 'costomeContent2' : 'costomeContent1'}>
              {props?.children}
            </Content>
            <Footer className="footer">
              <h3>All rights reserved &copy; Lunivatech Pvt. Ltd {date.getFullYear()}</h3>
            </Footer>
            <BottomNav></BottomNav>
          </Layout>
        </Layout>
      </Layout>
    </MainAppContentComponentContainer>
  )
}

export default AppLayout;

const MainAppContentComponentContainer = styled.div`
  .mainLayout{
    min-height: 100vh;
  }
  .costomeContent1{
    
    padding: 20px 20px 20px 220px;
    @media(max-width: 576px){
      padding: 20px;
    }
  }
  .costomeContent2{
    padding: 20px 20px 20px 100px;
    @media(max-width: 576px){
      padding: 20px;
    }
  }

  .ant-layout-content {
    margin-top: 75px;
    margin-bottom: 30px;
    @media(max-width: 800px){
      margin-top: 65px;
    }
    @media(max-width: 576px){
      margin-top: 65px;
    }
  }

  .customContent1{
    padding: 0px 0px 0px 220px;
    @media(max-width: 576px){
      padding: 20px;
    }
  }
  .customContent2{
    padding: 0px 0px 0px 100px;
    @media(max-width: 576px){
      padding: 20px;
    }
  }

  .btnPrimary{
  margin-top: 25px;
  background-color: var(--secondary);
  color: var(--secondaryBackground);
  border-radius: 30px!important;
  min-height: 36px;
  display: flex;
  align-items: center;
  font-size: 20px;
  letter-spacing: 1.1px;
  font-weight: 400;
  border: 1px solid var(--secondary);
  &:hover{
    background-color: transparent;
    border: 1px solid var(--secondary);
    color: var(--secondary);
  }
}
  @media(max-width: 576px){
    .sideNav{
      display: none; 
    } 
  }
  .footer{
    display: flex;
    justify-content: center;

    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 99;
    padding: 7px 50px;

    h3{
      color: #80808b;
    }
    
    @media(max-width: 576px){
      display: none;
    }
  }
`