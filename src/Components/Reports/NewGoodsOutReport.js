import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import Filter from '../Common/Filter'
import PageHeader from '../Common/pageHeader'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement
} from 'chart.js';
import ReportChart from '../Common/ReportChart';
import { ChartColor } from '../Common/ChartColor';
import { getGoodsOutCountApi } from '../../services/labGoodsOutService';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  Tooltip
);

const columns = [
  {
    title: 'Item Id',
    dataIndex: 'ItemId',
    key: 'itemId',
  },
  {
    title: 'Item Name',
    dataIndex: 'ItemName',
    key: 'itemName',
  },
  {
    title: 'Goods Out Count',
    dataIndex: 'GoodsInCount',
    key: 'Total',
  },
  {
    title: 'Goods Out Date',
    dataIndex: 'GoodsInDate',
    key: 'GoodsInDate',
    render: (text) => {
      return text.split('T')[0]
    }
  }
]

const NewGoodsOutReport = () => {
  const dispatch = useDispatch();
  const [goodsList, setgoodsList] = useState([]);
  const [goodsOutName, setGoodsOutName] = useState([]);
  const [goodLister, setgoodLister] = useState([])
  const [newGoodsList, setnewGoodsList] = useState([]);

  const graphData = (data) => {
    dispatch(getGoodsOutCountApi(data, (val) => {

      let PushedGoodsName = []
      setgoodsList(val)
      setnewGoodsList(val);
      val.forEach(ele => {
        PushedGoodsName.push(ele?.ItemName)
      })

      var filteredArray = PushedGoodsName.filter(function (item, pos) {
        return PushedGoodsName.indexOf(item) === pos;
      });
      setGoodsOutName(filteredArray)
    }))
  }

  // console.log("this is goods in name",goodsOutName)

  useEffect(() => {
    retunDa()
  }, [goodsOutName])

  const retunDa = () => {
    const retDaa = groupData(goodsList).children

    let mainArrDataset = []

    retDaa.forEach(ele => {
      let totArr = []
      ele.children.forEach(el => {
        totArr.push(el.GoodsInCount)
      })
      let a = totArr.reduce((a, b) => a + b, 0);
      mainArrDataset.push(a);
    })
    setgoodLister(mainArrDataset)

  }

  const groupData = (d) => {
    let g = Object.entries(d.reduce((r, c) => (r[c.ItemName] = [...r[c.ItemName] || [], c], r), {}))
    return g.reduce((r, c) => (
      r.children.push(
        { children: c[1] }), r), { children: [] }
    )
  }

  const dataRet = (val) => {
    let data = {
      fromdate: val[0].format("YYYY-MM-DD"),
      todate: val[1].format("YYYY-MM-DD"),
      itemid: val?.itemid
    }
    // getLabData(data);
    graphData(data);

  }
  const labels = goodsOutName;
  const dataDo = {
    labels,
    datasets: [
      {
        label: 'Goods Out',
        backgroundColor: ChartColor,
        data: goodLister,
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
        label: 'Goods Out',
        backgroundColor: 'rgb(53, 162, 235)',
        data: goodLister,
        borderWidth: 2
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      ]
    }
  };
  const handleSearch = (val) => {
    if (val === undefined || val === '') {
      setnewGoodsList(goodsList)
    } else {
      setnewGoodsList(val)
    }
  }

  return (
    <NewGoodsOutContainer>
      <div className="maiTopContainer">
        <PageHeader
          pageTitle='Goods Out Report'
          csvLinkTitle='Export csv'
          csvData={newGoodsList}
          csvDataName='goodsOutReport.csv'
        />
        <Filter
          dateRange
          dateRet={dataRet}
          itemName
          onSearch
          toCompareData={goodsList}
          forGoodsIn
          dataReturn={handleSearch}
          serchButton
        />
      </div>
      <div className="tableisRes">
        <Table className='tableWidth'
          columns={columns}
          dataSource={newGoodsList}
        />
      </div>
      {goodsOutName.length !== 0 ?
        <ReportChart
          options={options}
          dataBar={dataBar}
          dataDo={dataDo}
        ></ReportChart>
        : ''}
    </NewGoodsOutContainer>
  )
}

export default NewGoodsOutReport

const NewGoodsOutContainer = styled.div`
 
`