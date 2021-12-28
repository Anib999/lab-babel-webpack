import { Col, Row, Table } from 'antd';
import React from 'react'
import styledComponents from 'styled-components';
import Filter from '../Common/Filter';
import PageHeader from '../Common/pageHeader';
import { ChartColor } from '../Common/ChartColor'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement,
  Title
} from 'chart.js';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
  Title
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const columns = [
  {
    title: 'Day',
    dataIndex: 'Day',
    key: 'Day'
  },
  {
    title: 'Total Patiet',
    dataIndex: 'TotlaPatiet',
    key: 'TotlaPatiet'
  },
  {
    title: 'Total Amount',
    dataIndex: 'TotalAmount',
    key: 'TotalAmount'
  },
  {
    title: 'Dues',
    dataIndex: 'Dues',
    key: 'Dues'
  },
  {
    title: 'Paid',
    dataIndex: 'Paid',
    key: 'Paid'
  }
]


const Index = () => {
  const labels = ['potato', 'brinjasl', 'coma']
  const financeData = [44, 22, 11]
  const dataDo = {
    labels,
    datasets: [
      {

        label: 'financeData',
        backgroundColor: ChartColor,
        data: financeData,
        borderColor: [
          'rgba(255, 255, 132, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
  const dataPie = {
    labels,
    datasets: [
      {
        type: 'pie',
        label: 'financeData',
        backgroundColor: ChartColor,
        data: financeData,
        borderColor: [
          'rgba(255, 255, 132, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };
  const dataBar = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'financeData',
        backgroundColor: 'rgb(53, 162, 235)',
        data: financeData,
        borderWidth: 2
      },
    ],
  };

  return (
    <FinenceDashbordContainer>
      <div className="headingContainer">
        <PageHeader
          pageTitle='Finance Dashbord'
        ></PageHeader>
        <Filter
          dateRange
          serchButton
        />
      </div>

      <div className="mainContainer">
        <Row justify='space-between'>
          <Col span={15}  className='financeCards'> 
            <h3>Paymet Report</h3>
            <Bar options={options} data={dataBar} />
          </Col>
          <Col span={8} className='financeCards'>
            <h3>Paymet Report</h3>
            <Pie options={options} data={dataPie} />
          </Col>
        </Row>
        <Row justify='space-between'>
          <Col span={11} className='financeCards'>
            <h3>Refer Report</h3>
            <Doughnut options={options} data={dataDo}/>
          </Col>
          <Col span={12} className='financeCards'>
            <h3>Requestor Report</h3>
            <Doughnut options={options} data={dataDo}/>
          </Col>
        </Row>
        
        <div className="tableisRes financeCards">
          <h3>Total Collection</h3>
          <Table columns={columns} span={24}></Table>
        </div>
        
      </div>
    </FinenceDashbordContainer>
  )
}
export default Index;

const FinenceDashbordContainer = styledComponents.div`
  .headingContainer{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 2px 22px 0 rgba( 31, 38, 135, 0.10 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    overflow: hidden;
    margin-bottom: 30px;
  }
  .financeCards{
    background: rgba( 255, 255, 255, 1 );
    box-shadow: 0 2px 22px 0 rgba( 31, 38, 135, 0.10 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 30px;
    padding: 5px 8px;
    h3{
      border-bottom: 1px solid #c6c6cb;
    }
  }
`