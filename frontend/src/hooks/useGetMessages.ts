import { useEffect, useState } from "react"
import userConverstaion from "../zustand/useConversation";
import toast from "react-hot-toast";



const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = userConverstaion();

    useEffect(() => {
        const getMessages =async ()=>{
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`);

            const data = await res.json();
            
            if(data.error) throw new Error(data.error);

            setMessages(data);
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(true);
        }   
        }

        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id]);
    return {messages, loading};
}

export default useGetMessages