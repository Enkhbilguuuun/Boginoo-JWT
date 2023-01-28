import React from "react";
import { useState } from "react";

const [id, setId] = useState()

export default function HisShow({data}){
    const Delete = async () => {
        const res = await instance.delete(`/links/${id}`, {
        
        });
    console.log(data)
    return(
        <div>
            <span className="hisspan">Given Link:{data.Longlink}</span>
            <span className="hisspan">Shortened Link:{data.Shortlink}</span>
            <button onClick={Delete}>ustgah</button>
        </div>
    )
}


}