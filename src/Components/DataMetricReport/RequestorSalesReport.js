import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Filter from '../Common/Filter'
import PageHeader from '../Common/pageHeader'
import { getRequestorTotalSalesReport } from "../../services/datametricService";
import { Table } from "antd";

const RequestorSalesReport = () => {
    const dispatch = useDispatch();
    const [tableData, settableData] = useState([]);
    const [newtableData, setnewtableData] = useState([]);

    const columns = [
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
            setnewtableData(val)
        }))
    }

    const dataRet = (val) => {
        let data = {
            fromdate: val[0].format("YYYY-MM-DD"),
            todate: val[1].format("YYYY-MM-DD"),
        }
        getDataForReport(data)
    }

    const handleSearch = (val) => {
        if (val === undefined || val === '') {
            setnewtableData(tableData)
        } else {
            setnewtableData(val)
        }
    }

    return (
        <>
            <PageHeader
                pageTitle='Requestor Total Sales Summary'
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
            <Table
                columns={columns}
                dataSource={newtableData}
            />
        </>
    )
}

export default RequestorSalesReport