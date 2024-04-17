import { FiSearch } from "react-icons/fi";
import {HiOutlineUserCircle} from 'react-icons/hi'
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
export const ContactCard=({cont})=>{
    return <div className=' bg-amber-400 flex items-center gap-2 justify-between rounded-sm p-2  ' >
    <div className='flex items-center gap-1'>
    <HiOutlineUserCircle className='text-4xl text-orange'></HiOutlineUserCircle>
    <div className='  text-white'>
      <h3 className=''>{cont.name}</h3>
      <p>{cont.email}</p>
    </div></div>
    <div className='flex gap-2 text-2xl'>
      <RiEditCircleLine></RiEditCircleLine>
      <IoMdTrash className='text-orange'></IoMdTrash>
    </div>

   </div>
}