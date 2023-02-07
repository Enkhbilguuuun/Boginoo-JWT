import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";



export default function HisShow({data}){
    const [id, setId] = useState();
    const [rolee, setRolee] = useState()
    
    const getUser = async () => {

        const res = await instance.get(`/users/${data.user_id}`, {
        })
        setRolee(res.data.data.role)
    
    };

    const Delete = async () => {
        if (rolee == "admin") {
            const res = await instance.delete(`/links/${data._id}`, {
        });
        }
        else{
            alert("admin bish")
        }
    }
    useEffect(() => {
        getUser()
    },[])
return(
    <div>
        <span className="hisspan">Given Link:{data.Longlink}</span>
        <span className="hisspan">Shortened Link:{data.Shortlink}</span>
        <button onClick={Delete}>ustgah</button>
    </div>
)


}