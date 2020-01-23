import React, {useState, useEffect} from "react";



function Date (props){

    return (
        <div className="date">
            <h4>{props.mydate.date}</h4>
        </div>
    )
}

export default Date;