import React from 'react'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


import "./AdminNavBarStyle.css"
//imported icon from react-icons ====
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {RiUserSharedLine} from 'react-icons/ri'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {AiOutlineUserAdd} from 'react-icons/ai'




//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'

import stats from '../../assets/stats.png'
import { Link } from 'react-router-dom'

const AdminCardDiv = () => {
    const [value, setValue] = React.useState(dayjs('2023-06-17'));

  return (
    <>

        <div className='mb-[1rem]'>
        
            <div className='grid gap-2 grid-cols-4 items-center m-1'>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] border-[1px] border-greenColor bg-gradient-to-r from-blueColor to-greenColor'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <RiUserSharedLine className='text-white text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-white text-[15px] items-center'>
                                Overall HMS Employees
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-white text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-white text-[30px] mt-5'>
                            261
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-white rounded-full  bg-slate-200 opacity-[.9]'>
                            +6.18%
                        </span>

                    </div>
                  

                    <div className='m-3'>
                        <p className='block text-[13px] text-white opacity-[.9] py-[1rem] font-semibold '>
                            Data obtained for the last 7 days from 194 Employees to 261 Employees.
                        </p>
                    </div>

                    <div className='flex justify-center items-center m-3'>
                        <input
                            type="range"
                            className='transparent h-[10px] w-full cursor-pointer accent-purple-200 rounded-lg  bg-white'
                            id="customRange1" />
                        <p className='text-center text-[13px] text-white'>
                            1,234 Today
                        </p>
                    </div>

                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <FiUsers className='text-textColor text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] items-center'>
                                DEPARTMENTS
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-textColor text-[30px] mt-5'>
                            14
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +2 New Departments
                        </span>

                    </div>
                



                    <div className='flex justify-center mb-3'>
                        <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                            <div className='bg-green-500 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-blue-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-yellow-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-300 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-purple-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-500 h-[20px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-300 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                        </div>

                        <div className=' items-center mx-4'>
                            <p className='block text-center text-[13px] text-textColor opacity-[.9] font-semibold mb-2'>
                                Data obtained for the last 7 days.
                            </p>
                            <div className='text-center justify-center bg-greenColor rounded-full hover:bg-slate-200'>
                                <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/departments"}>View All Departments</Link></button>
                            </div>
                            <div className='text-center justify-center bg-yellow-500 rounded-full hover:bg-slate-200 mt-2'>
                                <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/adminvacantroomdetails"}>View All Rooms</Link></button>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <FiUsers className='text-textColor text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] border-b-[2px] border-b-green-500 items-center'>
                                EMPLOYEES
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-textColor text-[30px] mt-5'>
                            10.525
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +15.2%
                        </span>

                    </div>
                

                    <div className='mx-3'>
                        <p className='block text-[13px] text-textColor opacity-[.9] py-[1rem] font-semibold '>
                            Data obtained for the last 7 days from 5,567 visitors to 7,234 Visitors.
                        </p>
                    </div>

                    <div className='justify-center gap-3'>

                        <div className='flex justify-center bg-red-600 rounded-full hover:bg-slate-200 mx-2 mb-5'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"#"}>Create Employees' Account</Link></button>
                        </div>
                    </div>

                    

                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <AiOutlineUserAdd className='text-greenColor font-bold text-[35px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] items-center'>
                                Create HMS Account
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 border-b-[2px] py-3'>
                        <span className='font-semibold text-textColor text-[30px] mt-5'>
                            46
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +8 New Hired Doctors
                        </span>

                    </div>
                

                    <div className='justify-center gap-3'>
                        <div className='flex bg-blueColor  justify-center rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/regulardoctor"}>Regular Doctor</Link></button>
                        </div>

                        <div className='flex justify-center bg-greenColor rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"/doctoroncall"}>Doctors On Call</Link></button>
                        </div>
                    </div>

                </div>

            </div>


            <div className='grid gap-1 grid-cols-3 items-center m-1 '>

                <div className='singleGrid justify-center rounded-[10px] border-[1px] border-greenColor'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
        
                            <DateCalendar
                                defaultValue={dayjs()}
                                views={['year', 'month', 'day']}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                <div className='flex justify-between items-center m-3'>
                    <div className='flex items-center '>
                        <AiOutlineUserAdd className='text-greenColor text-[25px] me-1 icon'/>
                        <h4 className='font-bold text-textColor text-[15px] items-center'>
                            Create HMS Account
                        </h4>
                    </div>
                    
                    <div className='flex justify-end  '>
                        <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                    </div>
                    
                </div>

                <div className='flex items-center m-3 py-3'>
                    <span className='font-semibold text-textColor text-[30px] mt-5'>
                        344
                    </span>

                    <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                        +22 New Hired Employees
                    </span>

                </div>
            


                    <div className='flex justify-center'>
                        <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                            <div className='bg-green-500 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-300 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-500 h-[20px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-green-300 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                        </div>

                        <div className=' items-center mx-4'>
                            <p className='block text-center text-[13px] text-textColor opacity-[.9] font-semibold mb-2'>
                                Data obtained for the last 7 days.
                            </p>
                            <div className='text-center justify-center bg-red-500 rounded-full hover:bg-slate-200'>
                                <button className='text-white text-[13px] p-2  hover:text-textColor'><Link to={"#"}>View All Employees</Link></button>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="statistics justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]" >
                </div>

                {/* <div className='singleGrid justify-center rounded-[10px] p-[5px] shadow-2xl shadow-greyIsh border-[0.5px]'>
                
                    <div className='flex justify-between items-center m-3'>
                        <div className='flex items-center '>
                            <FiUsers className='text-textColor text-[25px] me-1 icon'/>
                            <h4 className='font-bold text-textColor text-[15px] items-center'>
                                ROOMS
                            </h4>
                        </div>
                        
                        <div className='flex justify-end  '>
                            <AiOutlineEllipsis className='justify-end text-textColor text-[25px] me-1 hover:bg-[#f7edf5] rounded-full icon'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center m-3 '>
                        <span className='font-semibold text-textColor text-[30px] mt-5'>
                            14
                        </span>

                        <span className='font-semibold text-green-900 text-[12px] ms-2 p-2  hover:bg-greenColor rounded-full  bg-slate-200 opacity-[.9]'>
                            +2 New Departments
                        </span>

                    </div>
                



                    <div className='flex justify-center'>
                        <div className='grid grid-cols-8 w-[50%] items-end ms-3'>
                            <div className='bg-red-500 h-[90px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-400 h-[60px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-500 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-300 h-[70px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-200 h-[40px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-500 h-[100px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                            <div className='bg-red-300 h-[50px] w-[7px] rounded-t-lg rounded-b-lg'></div>
                        </div>

                        <div className=' items-center mx-4'>
                            <p className='block text-center text-[13px] text-textColor opacity-[.9] font-semibold mb-2'>
                                Data obtained for the last 7 days.
                            </p>
                            <div className='text-center justify-center bg-greenColor rounded-full hover:bg-slate-200'>
                                <button className='text-white text-[13px] p-2  hover:text-textColor'>View All Departments</button>
                            </div>

                        </div>

                    </div>

                </div> */}





            </div>


        </div>
    </>
  )
}

export default AdminCardDiv