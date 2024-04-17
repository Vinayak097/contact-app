import { Form, Formik ,Field} from "formik"
import { Model } from "./Model"
import { db } from "../config"
import { addDoc, collection, getDoc } from "firebase/firestore"
export const  AddandUpdate=({isopen,onClose})=>{
    const Addcontact=async (contact)=>{
        try{
            const contactref=collection(db,"contact");
            await addDoc(contactref,contact)

        }catch(e){
            console.log(e)

        }
    }
    return <div>
        <Model isOpen={isopen} onClose={onClose} >
            <Formik initialValues={{name:"sush" ,email:"sush@mail.com"}} onSubmit={values=>{console.log(values)}}>
                <Form className="flex flex-col gap-2">
                    <div className=" flex flex-col gap-1">
                        <label htmlFor="name">name</label>
                        <Field name="name" className="h-10 border" ></Field>
                    </div>
                    <div className="flex  flex-col gap-1">
                        <label htmlFor="email">email</label>
                        <Field type="email" name="email" className="h-10 border" ></Field>
                    </div>
                    <button className="self-end border px-2 py-1 bg-amber-300"> butons</button>
                </Form>
            </Formik>
        
      </Model> 
    </div>
}