import React from "react";




export default function HisShow({data}){
    console.log(data)
    return(
        <div>
            <span className="hisspan">Given Link:{data.Longlink}</span>
            <span className="hisspan">Shortened Link:{data.Shortlink}</span>
        </div>
    )
}


