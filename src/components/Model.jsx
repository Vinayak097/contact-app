import { useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

export const Model=({onClose ,isOpen,children})=>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    return createPortal(<>
    {isOpen? <>
        <div className=" w-full m-auto relative  min-h-[200px] z-40 bg-white max-w-[80%]">
        <div className="m-2">
        <div className="flex justify-end p-2">
            <AiOutlineClose className="text-2xl" onClick={()=>{onClose()}}></AiOutlineClose>
        </div>
        <div className=" ">
        {children}

        </div>
        
        </div></div>
        <div className="absolute top-0 h-screen z-20 w-screen backdrop-blur">

        </div>
        </> :  <></> }
    
    {/* <div className="flex flex-col gap-4 bg-white mt-2  rounded-md ">
        <div className="flex flex-col mx-2">
            <label htmlFor="name " > name</label>
            <input className="border rounded-md p-1" type="text" placeholder="name" name="name" />
           
        </div>
        <div className="flex flex-col mx-2">
        <label htmlFor="email "> email</label>
            <input className="border rounded-md p-1" type="text" placeholder="email" name="email" />
        </div>
        <div>
            <button className="border rounded-md bg-amber-400 py-1 px-3 float-right m-2" onClick={""}>Add contact</button>
        </div>

    </div> */}
    
    </>,document.getElementById("model-root"))
}