import { Pagination, Table } from "antd";
import React from "react";

const Record = () => {
  const [tableParams, setTableParams] = React.useState({
    current: 1,
    pageSize: 5,
    total: 150,
  });
  const handlePaginationChange = (paginationData) => {
    setTableParams({
      current: paginationData?.current,
      pageSize: paginationData?.pageSize,
      total: paginationData?.total,
    });
  };
  const dataSource = [
    {
      key: "77",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "22",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "33",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "5",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "6",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "7",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "14",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "9",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "10",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "11",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "12",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "SN",
      //dataIndex: "key",
      render: (text, record, index) => {
        return (
          <div>
            {(tableParams?.current - 1) * tableParams?.pageSize + (index + 1)}
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        rowKey={"key"}
        columns={columns}
        pagination={{
          current: tableParams.current,
          pageSize: tableParams.pageSize,
          total: tableParams.total,
          showQuickJumper: true,
          showLessItems: true,
        }}
        onChange={handlePaginationChange}
      />
      ;
    </div>
  );
};

export default Record;
