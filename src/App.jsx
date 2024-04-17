import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai';
import { Navbar } from './components/Navbar'
import { collection, getDocs } from 'firebase/firestore';
import {db} from './config'
import { Model } from './components/Model';
import { ContactCard } from './components/ContactCard';
import { AddandUpdate } from './components/AddandUpdate';
function App() {
  const [contacts,setContact]=useState([]);
  const [isopen,setOpen]=useState(false)
  
  const onOpen=()=>{
    setOpen(true)
  }
  const onClose=()=>{
    setOpen(false)    
  }
  
  useEffect(() => {
    const getContacts = async () => {
        try {
            const contactref = await collection(db, "contact");
            const contactsSnap = await getDocs(contactref);
            const contactlist = contactsSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setContact(contactlist);
        } catch (e) {
            console.log(e);
        }
    };

    getContacts();
}, []);

useEffect(() => {
    console.log(contacts," this ");
}, [contacts]);

  return (
    <div className='  max-auto max-w-[350px] px-4'>
      <Navbar></Navbar>
      <div className='flex gap-2 bg-slate-600 '>
        <div className=' w-full relative flex items-center'>
            <FiSearch className='absolute text-3xl text-white ml-1' />
          <input type="text" className="border w-full bg-transparent border-white h-10 flex-grow rounded-sm text-white pl-8" />
        </div>    
        <FaCirclePlus onClick={onOpen} className=' h-10 text-white text-5xl' />
      </div>
      <div className="mt-4 flex  flex-col gap-3">
      {contacts.map(cont=>    <ContactCard key={cont.id} cont={cont}></ContactCard> ) }
      </div>
      <AddandUpdate isopen={isopen} onClose={onClose}></AddandUpdate>

     
    
     
     

      
    </div>
  )
}

export default App
