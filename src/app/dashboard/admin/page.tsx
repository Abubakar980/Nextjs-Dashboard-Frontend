import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalendar from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARD */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
        {/* MIDDLE CHARTS */}
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className=''>
          <FinanceChart/>
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage
