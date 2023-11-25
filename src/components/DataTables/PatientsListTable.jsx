import { Icon } from '@iconify/react';
import { Table, Pagination, ConfigProvider, Button } from 'antd';
import { useEffect, useState } from 'react';

export default function PatientsListTable({ headers, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows to display per page

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentData = data.slice(startIndex, endIndex);

  // Add a custom serial number to the data
  const dataWithSerialNumber = currentData.map((item, index) => ({
    ...item,
    serialNumber: startIndex + index + 1,
  }));

  // Function to determine row class name for alternating colors
  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? 'even-row' : '';
  };

  // Add edit and delete columns to the table
  const columns = [
    ...headers.map((header) => {
      if (header.key === 'status') {
        return {
          title: header.label,
          dataIndex: header.key,
          key: header.key,
          render: (text, record) => (
            <span style={{ color: text === 'Defaulted' ? '#E8362C' : '#2FB551' }}>
              {text}
            </span>
          ),
        };
      }

      if (header.key === 'action') {
        return {
          title: header.label,
          key: header.key,
          render: (text, record) => (
            <div className="flex h-[57px] items-center gap-2 pl-4">
                  <Icon
                    icon="bx:edit"
                    className="cursor-pointer text-xl text-[#2FB551]"
                  />
                  <Icon
                    icon="material-symbols:delete-outline"
                    className="cursor-pointer text-xl text-[#E8362C]"
                  />
                </div>
          ),
        };
      }

      return {
        title: header.label,
        dataIndex: header.key === 's/n' ? 'serialNumber' : header.key,
        key: header.key,
      };
    }),
   
  ];

  // Function to handle edit button click
  const handleEdit = (record) => {
    // Implement your edit logic here
    console.log('Edit clicked for record:', record);
  };

  // Function to handle delete button click
  const handleDelete = (record) => {
    // Implement your delete logic here
    console.log('Delete clicked for record:', record);
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#ffffff',
              headerColor: '#121212',
              headerSplitColor: '#ffffff',
              rowHoverBg: 'transparent',
              borderColor: '#ffffff',
              paddingTop: "5px"
            },
          },
        }}
      >
        <Table
          dataSource={dataWithSerialNumber}
          columns={columns}
          pagination={false}
          rowClassName={getRowClassName}
        />
      </ConfigProvider>
      <div className='flex items-center mt-10 border-t justify-between'>
        <div style={{ marginTop: '16px' }}>
          Showing items {startIndex + 1} - {Math.min(endIndex, data.length)} of {data.length}
        </div>
        <Pagination
          showSizeChanger={false}
          defaultCurrent={1}
          total={data.length}
          pageSize={pageSize}
          onChange={handleChange}
          style={{ marginTop: '16px' }}
        />
      </div>
    </div>
  );
}
