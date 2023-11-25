"use client"

import { Select } from 'antd';
import React, { useEffect, useState } from 'react';

const { Option } = Select;

const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getMonthName = (month) => {
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  return monthNames[month];
};

export default function CalenderPicker() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  useEffect(() => {
    const today = new Date();
    setSelectedDate(today.getDate());
  }, []);

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderCalendarDays = () => {
    const year = new Date().getFullYear();
    const totalDays = daysInMonth(year, selectedMonth);
    const monthName = getMonthName(selectedMonth);
  
    return Array.from({ length: totalDays }, (_, index) => {
      const day = index + 1;
      const dayOfWeek = new Date(year, selectedMonth, day).toLocaleDateString('en-US', { weekday: 'short' });
      const isActive = selectedDate === day;
      const isFirstDay = day === 1;
  
      return (
        <button
          key={index}
          onClick={() => handleDateClick(day)}
          className={`border flex flex-col items-center text-center py-2 rounded-[10px] px-7 ${isActive ? 'bg-blue-500' : 'bg-zinc-100'}`}
        >
          
          <span className={`text-center text-xl font-light ${isActive ? 'text-white' : 'text-neutral-600'}`}>
            {dayOfWeek.toUpperCase()}
          </span>
          <span className={`text-center text-[28px] font-normal ${isActive ? 'text-white' : 'text-neutral-600'}`}>
            {day}
          </span>
          {isFirstDay && (
            <span className="text-center text-green-500 text-xs font-semibold">
              Start
            </span>
          )}
        </button>
      );
    });
  };

  return (
    <div className="my-4 relative">
      <label className="block absolute top-[-65%] right-0 text-sm font-medium text-gray-700">
      <Select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mt-1 w-[130px]"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <Option key={index} value={index}>{getMonthName(index)}</Option>
          ))}
        </Select>
      </label>

      <div className="flex gap-2 mt-[38px] overflow-x-scroll custom-scrollbar pr-5 pb-2">
        {renderCalendarDays()}
      </div>
    </div>
  )
}
