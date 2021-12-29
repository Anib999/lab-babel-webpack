import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Filter from '../Common/Filter'
import PageHeader from '../Common/pageHeader'
import { getRequestorReport } from "../../services/datametricService";
import { Table } from "antd";

const RequestorReport = () => {
  const dispatch = useDispatch();
  const [tableData, settableData] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [newTableData, setnewTableData] = useState([]);
  const [fromToDate, setfromToDate] = useState({});

  const getDataForReport = (data) => {
    dispatch(getRequestorReport(data, (val) => {
      settableData(val)
      setnewTableData(val)
    }))
  }

  const dataRet = (val) => {
    let data = {
      ...val,
      fromdate: val[0].format("YYYY-MM-DD"),
      todate: val[1].format("YYYY-MM-DD"),
    }
    getDataForReport(data)
    setfromToDate(data);
  }

  useEffect(() => {
    createTableHead()
  }, [tableData]);

  const createTableHead = () => {
    if (tableData.length !== 0) {
      let tableKeys = Object.keys(tableData[0]);
      let data = []
      tableKeys.forEach(ele => {
        data.push({
          title: ele,
          dataIndex: ele,
          key: ele,
        })
      })
      setTableHead(data)
    }
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
          pageTitle='Requestor Report'
          csvLinkTitle='Export CSV'
          csvData={newTableData}
          csvDataName='requestorReport.csv'
          printFileName
          reportName='Requestor'
          tableHead={tableHead}
          fromToDate={fromToDate}
          removetwo
          selctorr={'Requestor Name'}
        />
        <Filter
          dateRange
          dateRet={dataRet}
          serchButton
          getrequestorlist
          toCompareData={tableData}
          onSearch
          dataReturn={handleSearch}
          forRequestorReport
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

export default RequestorReport