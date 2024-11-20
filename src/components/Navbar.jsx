import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilContext';

const Navbar = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const{setIsSidebar, isSidebar, mobileShow, setMobileShow} = useUtils();

    useEffect(()=>{

    },[isSidebar])

    const navigate = useNavigate();
    

    const searchQueryHandler = (event)=>{
        if((event?.key === "Enter" || event === "searchButton") && searchQuery?.length>0){
            navigate(`/search/${searchQuery}`)
            setSearchQuery("")
        }    
    }

    const handleSidebar=()=>{
        if(window.innerWidth <= 1280){
            setIsSidebar(!isSidebar);
            setMobileShow(!mobileShow);
        }

        setIsSidebar(!isSidebar)
    }

    return (
        <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>
            <div className='flex items-center space-x-4'>
                <GiHamburgerMenu className='text-xl cursor-pointer' onClick={handleSidebar} />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GLuYuWQALVBkU2PnoH5WfpDvvZ3kVSOYlw&s' alt='logo' className='w-28 cursor-pointer' />
            </div>
            <div className=' flex items-center w-[35%]'>
                <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
                    <input type='text' placeholder='Search' className='outline-none' onChange={(e)=>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery}/>
                </div>
                <button className='px-4 py-2 border bg-gray-100 rounded-r-full border-gray-400' onClick={()=>searchQueryHandler("searchButton")}><CiSearch size={"24px"} /></button>
                <IoMdMic size={"42px"} className='ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
            </div>
            <div className='flex space-x-5 items-center'>
                <RiVideoAddLine className='text-2xl' />
                <AiOutlineBell className='text-2xl' />
                <Avatar src='https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg' size='32' round={true} />
            </div>
        </div>
    )
}

export default Navbar
