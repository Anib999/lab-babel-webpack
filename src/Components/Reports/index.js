import React from 'react'
import styled from 'styled-components'
import PageHeader from '../Common/pageHeader'
import { Link } from 'react-router-dom'

const data = [
  {
    name: 'Goods in Report',
    pathName: 'goodsin'
  },
  {
    name: 'Goods Out reports',
    pathName: 'goodsout'
  },
  {
    name: 'Consumption Report',
    pathName: 'consumption'
  },
  {
    name: 'Stocks',
    pathName: 'stocks'
  },
  {
    name: 'Overall Report',
    pathName: 'inoutcon'
  },
  {
    name: 'Min Quantity Report',
    pathName: 'minquantityreport'
  },
  {
    name: 'Location Stock Report',
    pathName: 'locationstockreport'
  },

]

const Index = () => {
  return (
    
    <ReportContainer>
      <div className="maiTopContainer">
      <PageHeader pageTitle="Reports"></PageHeader>
      </div>
      <div className="contents">
        {
          data.map(e => (
            <Link to={`./reports/${e.pathName}`} pathname={e.pathName}>{e.name}</Link>
          ))
        }
      </div>

    </ReportContainer>
  )
}

export default Index

const ReportContainer = styled.div`
  .contents{
    width: 100%;
    /* padding: 40px 20px; */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    a{
    font-size: 18px;
    padding: 20px 30px;
    background: var(--cardColor);
    box-shadow: 0 2px 22px 0 rgba( 31, 38, 135, 0.17 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #2f2f33;
    }
    @media (max-width: 768px) {
      a {
        width: 100%;
      }
    }
  }
  `