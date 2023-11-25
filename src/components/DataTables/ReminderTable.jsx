import { Table, Pagination, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';

export default function ReminderTable({ headers, bodyData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows to display per page

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentData = bodyData.slice(startIndex, endIndex);

  // Add a custom serial number to the data
  const dataWithSerialNumber = currentData.map((item, index) => ({
    ...item,
    serialNumber: startIndex + index + 1,
  }));

  // Function to determine row class name for alternating colors
  const getRowClassName = (record, index) => {
    return index % 2 === 0 ? 'even-row' : '';
  };

  // Function to format date and time
  const formatDateTime = (datetimeString) => {
    const optionsDate = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', optionsDate).format(new Date(datetimeString));
    const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(new Date(datetimeString));

    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  const columns = headers.map((header) => {
    if (header.key === 'date') {
      return {
        title: header.label,
        dataIndex: header.key,
        key: header.key,
        render: (text, record) => {
          const { date, time } = formatDateTime(text);
          return (
            <div>
              <div>{date}</div>
              <div>{time}</div>
            </div>
          );
        },
      };
    }

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

    return {
      title: header.label,
      dataIndex: header.key === 's/n' ? 'serialNumber' : header.key,
      key: header.key,
    };
  });

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
          Showing items {startIndex + 1} - {Math.min(endIndex, bodyData.length)} of {bodyData.length}
        </div>
        <Pagination
          showSizeChanger={false}
          defaultCurrent={1}
          total={bodyData.length}
          pageSize={pageSize}
          onChange={handleChange}
          style={{ marginTop: '16px' }}
        />
      </div>
    </div>
  );
}
