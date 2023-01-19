import React from "react";

function Result({longLink, shortLink}){
    console.log(longLink, shortLink)
    return(
        <div className="result">
            <div>{`Given link: ${longLink}`}</div>
            <div>{`Shortened link: localhost:3000/${shortLink}`}</div>
        </div>
    )
}


export default Result