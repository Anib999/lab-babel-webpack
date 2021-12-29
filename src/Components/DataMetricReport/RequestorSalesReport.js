import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Filter from '../Common/Filter'
import PageHeader from '../Common/pageHeader'
import { getRequestorTotalSalesReport } from "../../services/datametricService";
import { Table } from "antd";

const RequestorSalesReport = () => {
  const dispatch = useDispatch();
  const [tableData, settableData] = useState([]);
  const [newTableData, setnewTableData] = useState([]);
  const [fromToDate, setfromToDate] = useState({});

  const tableHead = [
    {
      title: 'Requestor',
      dataIndex: 'Requestor',
      key: 'Requestor',
    },
    {
      title: 'Total Price',
      dataIndex: 'TotalPrice',
      key: 'TotalPrice',
    },
    {
      title: 'Discount Total',
      dataIndex: 'DiscountTotal',
      key: 'DiscountTotal',
    },
    {
      title: 'Actual Total',
      dataIndex: 'ActualTotal',
      key: 'ActualTotal',
    },
  ]

  const getDataForReport = (data) => {
    dispatch(getRequestorTotalSalesReport(data, (val) => {
      settableData(val)
      setnewTableData(val)
    }))
  }

  const dataRet = (val) => {
    let data = {
      fromdate: val[0].format("YYYY-MM-DD"),
      todate: val[1].format("YYYY-MM-DD"),
    }
    getDataForReport(data)
    setfromToDate(data)
  }

  const handleSearch = (val) => {
    if (val === undefined || val === '') {
      setnewTableData(tableData)
    } else {
      setnewTableData(val)
    }
  }

  return (
    <>
      <div className="maiTopContainer">
        <PageHeader
          pageTitle='Requestor Total Sales Summary'
          reportName='Requestor Total Sales'
          printFileName
          tableHead={tableHead}
          csvData={newTableData}
          fromToDate={fromToDate}
          csvLinkTitle='Export CSV'
          csvDataName='requestorSalesReport.csv'
        />
        <Filter
          dateRange
          dateRet={dataRet}
          serchButton
          toCompareData={tableData}
          onSearch
          dataReturn={handleSearch}
          forReportSalesReport
        />
      </div>
      <div className="tableisRes">
        <Table className='tableWidth'
          columns={tableHead}
          dataSource={newTableData}
        />
      </div>
    </>
  )
}

export default RequestorSalesReport