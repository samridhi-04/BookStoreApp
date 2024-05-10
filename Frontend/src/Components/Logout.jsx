import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
const Logout = () => {
    const [authUser,setAuthUser]= useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null

            })
            localStorage.removeItem("Users")
            toast.success("Logout succesfully")
                setTimeout(()=>{
                    window.location.reload()

                },3000)
        } catch (error) {
            toast.error("Error:" +error);
            setTimeout(()=>{},2000)
        }
    }
    return (
        <div>
            <button className='px-3 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>

        </div>
    );
}

export default Logout;
